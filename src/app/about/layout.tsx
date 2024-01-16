export async function generateMetadata() {
  return {
    title: "About",
    description:
      "Look no further, we are POWER MARKET! - your neighborhood convenience store, with impeccable service and a wide selection of snacks, hot foods, drinks, grocery, and much more!",
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
