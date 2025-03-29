export const otpEmailTemplate = (otp) => {
  return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
    <h2 style="text-align: center; color: #333;">🔑 Password Reset Request</h2>
    <p>Hello,</p>
    <p>You requested to reset your password. Use the OTP below to reset it:</p>
    <h1 style="text-align: center; background: #007BFF; color: white; padding: 10px; border-radius: 5px;">${otp}</h1>
    <p style="text-align: center;">This OTP is valid for <b>10 minutes</b>. Do not share it with anyone.</p>
    <hr />
    <p>If you didn't request this, please ignore this email.</p>
    <p style="text-align: center; color: #888;">© 2025 AgiroCabs</p>
  </div>
  `;
};
