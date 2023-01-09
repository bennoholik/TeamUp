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
  publicRuntimeConfig: {
    backendUrl: process.env.REACT_APP_API_BASEURL,
  },
};

module.exports = nextConfig;
