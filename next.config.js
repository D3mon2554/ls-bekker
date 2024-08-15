/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com", "lsbekker.s3.eu-north-1.amazonaws.com"],
  },
  env: {
    AWS_FILE_URL_DAY: process.env.AWS_FILE_URL_DAY,
    AWS_FILE_URL_WEEKEND: process.env.AWS_FILE_URL_WEEKEND,
    AWS_FILE_URL_HOSTEL_APPLICATION:
      process.env.AWS_FILE_URL_HOSTEL_APPLICATION,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    AWS_REGION: process.env.AWS_REGION,
    FACEBOOK_ACCESS_TOKEN: process.env.FACEBOOK_ACCESS_TOKEN,
    FACEBOOK_PAGE_ID: process.env.FACEBOOK_PAGE_ID,
    AUTH_USER: process.env.AUTH_USER,
    AUTH_PASS: process.env.AUTH_PASS,
    FROM_EMAIL: process.env.FROM_EMAIL,
    TO_EMAIL: process.env.TO_EMAIL,
  },
};
