/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avataaars.io",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
