const { test, expect } = require('@playwright/test');
test('Customer login workflow across browsers', async ({ page }) => {
// Step 1: Visit demo banking site
await page.goto('http://demo.testfire.net/login.jsp');
// Step 2: Enter username and password
await page.fill('input[name="uid"]', 'jsmith');
await page.fill('input[name="passw"]', 'demo1234');
// Step 3: Click login
await page.click('input[name="btnSubmit"]');
// Step 4: Verify welcome message
await expect(page.locator('text=Hello John Smith')).toBeVisible();
});