import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export", // Aktifkan ekspor statis
  async redirects() {
    return [
      {
        source: "/",
        destination: "/id",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
