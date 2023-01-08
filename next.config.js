/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "buckitforimg.s3.ap-northeast-2.amazonaws.com",
      "k.kakaocdn.net",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
