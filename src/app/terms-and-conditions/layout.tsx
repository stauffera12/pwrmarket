export async function generateMetadata() {
    return {
        title: "terms-and-conditions",
        description: "Welcome to Power Market! These Terms and Conditions (these “Terms”) apply to your access to, and your use of our website located",
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