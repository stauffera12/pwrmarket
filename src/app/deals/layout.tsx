export async function generateMetadata() {
  return {
    title: "Deals",
    description: "Everyday Deals!",
    image: "/images/deal1.png",
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
