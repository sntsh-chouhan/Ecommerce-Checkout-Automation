export async function login(page) {
  await page.goto('https://www.flipkart.com/account/login');
  await page.getByRole('textbox', { name: 'Enter Email/Mobile number' }).fill('santoshchouhan2442@gmail.com');
  await page.getByRole('button', { name: 'Request OTP' }).click();

  console.log("🛑 Pause for manual OTP entry...");
  await page.pause(); // You can manually enter OTP for now

  // After OTP entry
  console.log("Logged in");
}
