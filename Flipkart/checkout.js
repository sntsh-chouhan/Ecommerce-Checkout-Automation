export async function completeCheckout(page) {
  const currentUrl = page.url();
  console.log("Final Checkout Page URL:", currentUrl);
  return currentUrl;
}
