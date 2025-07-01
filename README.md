# Ecommerce Checkout Automation

This is a playwright script to automate the checkout process on www.flipkart.com

## Setup
1. PlayWright
2. Node.js
3. USB debugging for OTP capture

## Running
open a terminal in the root of the project folder

```bash
// to run the process in the background
npx playwright test checkout.spec.js

// to run the process with visible window (this will take more time as time spent loading the window)
npx playwright test checkout.spec.js --headed
```

## Output
This is on terminal
```bash
Waiting 5 seconds for OTP SMS...
otp =>  981191
Logged in
Product added to cart
Address filled
Final Checkout Page URL: https://www.flipkart.com/checkout/init?view=FLIPKART&loginFlow=false
```
Additionally we can wrap this on am API endpoint for ease

### Sample output ScreenShot
![Screenshot from 2025-07-01 22-26-16](https://github.com/user-attachments/assets/5d85b6ea-c3ab-4b52-9820-c9a21b85b455)
![Screenshot from 2025-07-01 22-33-39](https://github.com/user-attachments/assets/ce8dfe20-ef52-477c-9c59-200b2dc85ebf)
![Screenshot from 2025-07-01 22-33-56](https://github.com/user-attachments/assets/943a1c83-7800-4407-8ccf-6b736d1e3516)
![Screenshot from 2025-07-01 22-34-30](https://github.com/user-attachments/assets/e354d5d0-1e08-497d-bbe7-3b55d480cde3)


## thoughts? 
Share your thoughts, point out my mistakes, let me know where I can improve

Peace out
