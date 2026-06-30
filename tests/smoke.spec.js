const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const app = 'file://' + path.resolve(__dirname, '..', 'index.html');
const shots = path.resolve(__dirname, '..', 'docs', 'screenshots');

test('RefundRadar computes loop actions, saves cases, and exports reminders and packets', async ({ page }) => {
  await page.goto(app);
  await expect(page.getByText('Stop letting refund cases disappear')).toBeVisible();
  await expect(page.locator('#statusLabel')).toHaveText('Follow-up due');

  await page.getByRole('button', { name: 'Save case locally' }).click();
  await expect(page.locator('#caseShelf')).toContainText('Northstar Air');

  await page.getByRole('button', { name: 'Load subscription sample' }).click();
  await expect(page.locator('#statusLabel')).toHaveText('Follow-up due');
  await expect(page.locator('#readinessLabel')).toContainText('Usable');
  await expect(page.locator('#evidenceGaps')).toContainText('Promise date recorded');
  await page.getByRole('button', { name: 'Save case locally' }).click();
  await expect(page.locator('#caseShelf')).toContainText('BrightDesk SaaS');

  await page.getByRole('button', { name: 'Firm escalation' }).click();
  await expect(page.locator('#messageText')).toContainText('escalated to the appropriate owner');

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download reminder' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toContain('refundradar-brightdesk-saas');

  const packetPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export packet' }).click();
  const packet = await packetPromise;
  expect(packet.suggestedFilename()).toContain('refundradar-brightdesk-saas-packet.md');

  const printPacketPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export print/PDF packet' }).click();
  const printPacket = await printPacketPromise;
  expect(printPacket.suggestedFilename()).toContain('refundradar-brightdesk-saas-print-packet.html');
  const printPacketHtml = fs.readFileSync(await printPacket.path(), 'utf8');
  expect(printPacketHtml).toContain('Print / Save as PDF');
  expect(printPacketHtml).toContain('Subscription billing route');
  expect(printPacketHtml).toContain('Packet readiness');

  const loopPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export loop JSON' }).click();
  const loopDownload = await loopPromise;
  expect(loopDownload.suggestedFilename()).toContain('refundradar-brightdesk-saas-loop.json');
  const loopPath = await loopDownload.path();
  const loop = JSON.parse(fs.readFileSync(loopPath, 'utf8'));
  expect(loop.schema).toBe('refundradar.loop.v1');
  expect(loop.loop.stop_condition).toContain('Refund received');
  expect(loop.case.vendor).toBe('BrightDesk SaaS');

  await page.setInputFiles('#loopImport', {
    name: 'warranty-loop.json',
    mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify({
      schema: 'refundradar.loop.v1',
      case: {
        vendor: 'KitchenPro Warranty',
        type: 'Warranty',
        amount: 229,
        state: 'Denied',
        last_contact: '2026-06-10',
        promised_response: '2026-06-15',
        evidence_notes: 'Mixer failed inside warranty window; receipt and photos saved.'
      }
    }))
  });
  await expect(page.locator('#vendor')).toHaveValue('KitchenPro Warranty');
  await expect(page.locator('#statusLabel')).toHaveText('Escalate');
  await expect(page.locator('#playbook')).toContainText('Warranty portal');
  await expect(page.locator('#playbook')).toContainText('Warranty claim route');
  await expect(page.locator('#playbook')).toContainText('Deadline guard');
  await expect(page.locator('#playbook')).toContainText('Human approval stop');

  await page.locator('#deadline').fill(await page.evaluate(() => iso(1)));
  await page.locator('#deadline').evaluate((el) => el.dispatchEvent(new Event('change', { bubbles: true })));
  await expect(page.locator('#statusLabel')).toHaveText('Human approval needed');
  await expect(page.locator('#timeline')).toContainText('Deadline guard');

  const warrantyLoopPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export loop JSON' }).click();
  const warrantyLoopDownload = await warrantyLoopPromise;
  const warrantyLoop = JSON.parse(fs.readFileSync(await warrantyLoopDownload.path(), 'utf8'));
  expect(warrantyLoop.playbook.channels).toContain('Warranty portal');
  expect(warrantyLoop.vendor_route.label).toBe('Warranty claim route');
  expect(warrantyLoop.case.dispute_deadline).toBeTruthy();
  expect(warrantyLoop.loop.status).toBe('Human approval needed');
  expect(warrantyLoop.loop.human_approval_needed).toBe(true);
  expect(warrantyLoop.playbook.stop).toContain('warranty denial');
  expect(warrantyLoop.evidence_readiness.score).toBeGreaterThan(0);
  expect(warrantyLoop.evidence_readiness.gaps).toContain('serial number');

  await page.screenshot({ path: path.join(shots, 'landing-overview.png'), fullPage: true });
  await page.locator('.loopcard').screenshot({ path: path.join(shots, 'case-loop.png') });
  await page.locator('.message').screenshot({ path: path.join(shots, 'message-template.png') });
  await page.setViewportSize({ width: 390, height: 1200 });
  await page.screenshot({ path: path.join(shots, 'mobile-responsive.png'), fullPage: true });
});
