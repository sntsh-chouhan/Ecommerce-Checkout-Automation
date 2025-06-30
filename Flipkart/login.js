import { getLatestOtpFromSms } from '../helpers/getOTP';
import dotenv from 'dotenv';
dotenv.config();

export async function login(page) {
    await page.goto('https://www.flipkart.com/account/login');
  // await page.getByRole('textbox', { name: 'Enter Email/Mobile number' }).waitFor();
  // await page.getByRole('textbox', { name: 'Enter Email/Mobile number' }).fill(process.env.GMAIL);

    const emailInput = page.locator('input.r4vIwl').first();
    await emailInput.waitFor();
    await emailInput.fill(process.env.GMAIL);

    await page.getByRole('button', { name: 'Request OTP' }).click();
    await page.locator('form').filter({ hasText: 'Enter Mobile numberBy' }).getByRole('textbox').fill(process.env.PHONE);
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await page.getByRole('button', { name: 'Request OTP' }).click();

    console.log("Waiting 5 seconds for OTP SMS...");
    await page.waitForTimeout(5000); // Give it a moment for SMS to arrive

    const otp = getLatestOtpFromSms();
    console.log(otp)
    if (!otp) throw new Error("OTP not found");

    const otpDigits = otp.split('');
    for (let i = 0; i < otpDigits.length; i++) {
      await page.locator(`div:nth-child(${i + 1}) > .r4vIwl`).fill(otpDigits[i]);
    }

    // After OTP entry
    console.log("Logged in");
}
