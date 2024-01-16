export async function generateMetadata() {
  return {
    title: "Contact",
    description: "submit form",
    image: "/images/slide6.png",
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
