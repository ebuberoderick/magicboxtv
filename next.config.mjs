const nextConfig = {
  images: {
    domains: [
      "magicbox-files.nyc3.digitaloceanspaces.com",
      "source.unsplash.com",
      "https://",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/campaign-mobplus",
        destination: "/api/campaign/mobplus",
      },
      {
        source: "/campaign",
        destination: "/api/campaign/neth",
      },
      {
        source: "/campaign/mobedia",
        destination: "/api/campaign/mobedia",
      },
      {
        source: "/campaign/angel-media",
        destination: "/api/campaign/angelmedia",
      },
    ];
  },
};

export default nextConfig;
