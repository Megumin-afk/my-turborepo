/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers () {
    return [
      {
        source: '/about',
        headers: [{
          key: 'Cache-Control',
          value: 's-maxage=2, stale-while-revalidate'
        }]
      },
      {
        source: '/about',
        has: [
          {
            type: 'query',
            key: 't',
            value: '100',
          }
        ],
        headers: [{
          key: 'Cache-Control',
          value: 's-maxage=100, stale-while-revalidate'
        }]
      },
      {
        source: '/about',
        has: [
          {
            type: 'query',
            key: 't',
            value: '800',
          }
        ],
        headers: [{
          key: 'Cache-Control',
          value: 's-maxage=800, stale-while-revalidate'
        }]
      },
    ]
  }
};

export default nextConfig;
