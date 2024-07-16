export async function generateMetadata() {
    return {
      title: "Carwash",
      description:
        "Join PM+ for monthly unlimited washes! 50% off your first two months! ",
      image: "/images/reward.png",
      keywords: "powermarket, california, gas station, rest stop, food, carwash",
    };
  }
  
  export default function PageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <section>{children}</section>;
  }