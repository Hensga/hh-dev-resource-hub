/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: ''
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: ''
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: ''
      }
    ]
  },
};

export default nextConfig;



// domains: ["images.unsplash.com", "placehold.co", "images.ctfassets.net"],    