export async function generateMetadata() {
    return {
        title: "deals",
        description: "Everyday Deals!",
        image: "/images/deal1.png",
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