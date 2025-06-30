import { test } from '@playwright/test';
import { login } from '../Flipkart/login.js';
import { addToCart } from '../Flipkart/addToCart.js';
import { fillAddress } from '../Flipkart/addressForm.js';
import { completeCheckout } from '../Flipkart/checkout.js';

test('Flipkart Checkout Flow', async ({ page }) => {
    
    // await login(page);
    // await page.pause();

    const productUrl = 'https://www.flipkart.com/alkarty-orchid-potting-mix-coco-chip-pumice-moss-grass-lecca-balls-charcoal-mixture/p/itmddc22ec2a3198';
    await addToCart(page, productUrl);

    await fillAddress(page);
    const checkoutUrl = await completeCheckout(page);

//   Optional: send checkoutUrl somewhere (DB, webhook, console etc.)
});


// /home/dev/Projects/Ecommerce-Checkout-Automation/Flipkart/checkout.spec.js