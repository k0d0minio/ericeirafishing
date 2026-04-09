import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/join-us", permanent: true },
      {
        source: "/:locale(en|fr|pt)/contact",
        destination: "/:locale/join-us",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
