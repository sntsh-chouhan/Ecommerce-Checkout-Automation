import { test } from '@playwright/test';
import { login } from '../Flipkart/login.js';
import { addToCart } from '../Flipkart/addToCart.js';
import { fillAddress } from '../Flipkart/addressForm.js';
import { completeCheckout } from '../Flipkart/checkout.js';
import { Console } from 'console';

test('Flipkart Checkout Flow', async ({ page }) => {
    console.log("Checkout initiated");
    await login(page);

    const productUrl = 'https://www.flipkart.com/alkarty-orchid-potting-mix-coco-chip-pumice-moss-grass-lecca-balls-charcoal-mixture/p/itmddc22ec2a3198';
    await addToCart(page, productUrl);

    await fillAddress(page);
    const checkoutUrl = await completeCheckout(page);

});


// /home/dev/Projects/Ecommerce-Checkout-Automation/Flipkart/checkout.spec.js