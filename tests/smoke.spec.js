const { test, expect } = require('@playwright/test');
const path = require('path');

const app = 'file://' + path.resolve(__dirname, '..', 'index.html');
const shots = path.resolve(__dirname, '..', 'docs', 'screenshots');

test('RefundRadar computes loop actions, saves cases, and exports reminders', async ({ page }) => {
  await page.goto(app);
  await expect(page.getByText('Stop letting refund cases disappear')).toBeVisible();
  await expect(page.locator('#statusLabel')).toHaveText('Follow-up due');

  await page.getByRole('button', { name: 'Save case locally' }).click();
  await expect(page.locator('#caseShelf')).toContainText('Northstar Air');

  await page.getByRole('button', { name: 'Load subscription sample' }).click();
  await expect(page.locator('#statusLabel')).toHaveText('Follow-up due');
  await page.getByRole('button', { name: 'Save case locally' }).click();
  await expect(page.locator('#caseShelf')).toContainText('BrightDesk SaaS');

  await page.getByRole('button', { name: 'Firm escalation' }).click();
  await expect(page.locator('#messageText')).toContainText('escalated to the appropriate owner');

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download reminder' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toContain('refundradar-brightdesk-saas');

  await page.screenshot({ path: path.join(shots, 'landing-overview.png'), fullPage: true });
  await page.locator('.loopcard').screenshot({ path: path.join(shots, 'case-loop.png') });
  await page.locator('.message').screenshot({ path: path.join(shots, 'message-template.png') });
  await page.setViewportSize({ width: 390, height: 1200 });
  await page.screenshot({ path: path.join(shots, 'mobile-responsive.png'), fullPage: true });
});
