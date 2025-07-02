# Ecommerce Checkout Automation (Flipkart)

This project automates the checkout process on [Flipkart.com](https://www.flipkart.com) using Playwright and Node.js. It simulates a full purchase flow: logging in via OTP, adding a product to the cart, filling the address (if required), and returning the final checkout URL — all in under 25 seconds.

---

## Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Playwright](https://playwright.dev/)
- A physical Android device with **USB Debugging enabled**
- Flipkart account with valid credentials

### Installation

```bash
npm install
npx playwright install

```
### OTP Handling (via ADB)
To capture the OTP from your device:

- Connect your Android phone via USB with USB debugging turned on

- Make sure it's authorized (adb devices should list your device)

- The script reads SMS using ADB shell to capture OTP from Flipkart

##### Connect and Authorize Device via ADB
```bash
adb devices
```
You should see something like:
```bash
List of devices attached
13a47fc2	device
```

### Setup Environment Variables
Create .env file in the root:
```bash
GMAIL=your_email_or_phone
PHONE=your_phone_number
```
Replace with your Flipkart login details.

# Running the Script
From the root directory of the project:

### Run headless (faster)
```bash
npx playwright test checkout.spec.js
```

### Run with UI (for debugging, slower)
```bash
npx playwright test checkout.spec.js --headed
```

# Directory Structure (Simplified)

```bash
.
├── Flipkart/
│   ├── login.js
│   ├── checkout.js
|   ├── addressForm.js
│   └── addToCart.js
├── helper/
|   └── getOTP.js
├── tests/
│   └── checkout.spec.js
├── .env
├── README.md
├── package.json
└── playwright.config.js
```

# Output
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


## Thoughts? 
Share your thoughts, point out my mistakes, let me know where I can improve

Peace out
