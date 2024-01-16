export async function generateMetadata() {
  return {
    title: "Download",
    description:
      "Save money at H&S Power Market stores with great coupons on gas, snacks, and more!",
    image: "/images/phone.png",
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
