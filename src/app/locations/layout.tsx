export async function generateMetadata() {
  return {
    title: "Locations",
    description: "Find a PWRmarket Near You",
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
