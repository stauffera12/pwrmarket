export async function generateMetadata() {
    return {
        title: "ccpa",
        description: "submit form",
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