export async function generateMetadata() {
  return {
    title: "Privacy-policy",
    description:
      "This Privacy Policy explains how H&S Energy Products, LLC dba Power Market and Power Mart, (collectively, “Power Market,” “we,” “us,” or “our”) collects, uses, and discloses information about you when you access or use our websites, ",
    image: "/images/story1.png",
    keywords: "powermarket, california, gas station, rest stop, food",
  };
}

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
