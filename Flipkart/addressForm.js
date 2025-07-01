export async function fillAddress(page) {
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.locator('input[name="name"]').fill('Santosh Chouhan');
  await page.locator('input[name="phone"]').fill('7999907332');
  await page.locator('input[name="pincode"]').fill('451447');
  await page.locator('input[name="addressLine2"]').fill('surana');
  await page.locator('textarea[name="addressLine1"]').fill('teh ANJAD, DIST BARWANI, M.P.');
  await page.getByText('Home (All day delivery)').click();
  await page.getByRole('button', { name: 'Save and Deliver Here' }).click();

  console.log("Address filled");
}
