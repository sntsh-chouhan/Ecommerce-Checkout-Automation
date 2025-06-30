export async function addToCart(page, productUrl) {
  await page.goto(productUrl);
  await page.getByRole('button', { name: 'Add to cart' || 'Go to cart'}).click();
  await page.waitForTimeout(1000);
  console.log("Product added to cart");
}
