import { execSync } from 'child_process';

export function getLatestOtpFromSms() {
  const ONE_DAY_AGO = Date.now() - 24 * 60 * 60 * 1000;

  try {
    const cmd = `adb shell content query --uri content://sms/inbox ` +
      `--projection address:body:date ` +
      `--where "\\\"date > ${ONE_DAY_AGO}\\\""`;

    const output = execSync(cmd).toString();

    const match = output.match(/LOGIN.*?OTP\s(\d{6})/);
    if (match) {
      return match[1];
    } else {
      console.error("OTP not found in SMS");
      return null;
    }
  } catch (err) {
    console.error("Error while fetching OTP from ADB:", err.message);
    return null;
  }
}
