import { test } from '@playwright/test';
import { login } from '../workflows/login.js';
import { addToCart } from '../workflows/addToCart.js';
import { fillAddress } from '../workflows/addressForm.js';
import { completeCheckout } from '../workflows/checkout.js';

test('Flipkart Checkout Flow', async ({ page }) => {
  await login(page);

  const productUrl = 'https://www.flipkart.com/alkarty-orchid-potting-mix-coco-chip-pumice-moss-grass-lecca-balls-charcoal-mixture/p/itmddc22ec2a3198';
  await addToCart(page, productUrl);
  
  await fillAddress(page);
  const checkoutUrl = await completeCheckout(page);

  // Optional: send checkoutUrl somewhere (DB, webhook, console etc.)
});
