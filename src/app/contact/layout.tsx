export async function generateMetadata() {
    return {
        title: "contact",
        description: "submit form",
        image: "/images/slide6.png",
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