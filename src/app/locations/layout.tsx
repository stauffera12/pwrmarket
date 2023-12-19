export async function generateMetadata() {
    return {
        title: "locations",
        description: "Find a PWRmarket Near You",
        image: "/images/story1.png",
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