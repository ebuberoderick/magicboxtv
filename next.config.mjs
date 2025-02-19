const nextConfig = {
  reactStrictMode: true,
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
        destination: "/campaign/mobplus",
      },
      {
        source: "/campaign",
        destination: "/campaign/neth",
      },
      {
        source: "/campaign/mobedia",
        destination: "/campaign/mobedia",
      },
      {
        source: "/campaign/angel-media",
        destination: "/campaign/angelmedia",
      },
    ];
  },
};

export default nextConfig;
