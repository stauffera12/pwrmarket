export async function generateMetadata() {
  return {
    title: "Financial-incentive",
    description:
      "H&S Energy Products, LLC dba Power Market offers financial incentives to members of our Power Rewards loyalty program (the “Program”). To take advantage of the Program, you must agree to our Terms and Conditions and Privacy Policy. These financial incentives will range from earning discounts on fuel transactions at the pump to discounts earned based on transactions that occur in our stores. For example, we may offer “Buy 1 Get 1 Free” and “Buy 2 and Save Money” type promotions to Program members. These promotions will be available through the Power Market App. Below you will find additional examples of the financial incentives that we may offer to Program Members:!",
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
