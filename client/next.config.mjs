/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*',
      },
      {
        source: '/events/:path*',
        destination: 'http://localhost:4000/events/:path*',
      },
      {
        source: '/students/:path*',
        destination: 'http://localhost:4000/students/:path*',
      },
    ];
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/events/**',
      },
    ],
  },
};

export default nextConfig;
