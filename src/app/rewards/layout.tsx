export async function generateMetadata() {
  return {
    title: "Rewards",
    description:
      "Our foods, beverages, and healthy options are always fresh, delicious, and made for you. ",
    image: "/images/reward.png",
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
