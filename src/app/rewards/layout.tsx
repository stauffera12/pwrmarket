export async function generateMetadata() {
    return {
        title: "rewards",
        description: "Our foods, beverages, and healthy options are always fresh, delicious, and made for you. ",
        image: "/images/reward.png",
    }
}

export default function PageLayout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <section >{children}</section>
    )
}