import { test, expect } from '@playwright/test';

test('has name', async ({page}) => {
  await page.goto("https://suman-stha.com.np");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Suman Shrestha/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://suman-stha.com.np');

  // Click the get started link.
  await page.getByRole('link', {name: "My Work"}).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('This is Work Page')).toBeVisible();
});

test("has contact details", async({page}) => {
  await page.goto("https://suman-stha.com.np");

  // Expect a phone number
  await expect(page.getByRole("link", {name: "+4917685985727"})).toBeVisible();

  // Expect an Email Address
  await expect(page.getByRole("link", {name: "sumanstha999@gmail.com"})).toBeVisible();
})