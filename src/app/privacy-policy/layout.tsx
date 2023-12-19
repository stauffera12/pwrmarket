export async function generateMetadata() {
    return {
        title: "privacy-policy",
        description: "This Privacy Policy explains how H&S Energy Products, LLC dba Power Market and Power Mart, (collectively, “Power Market,” “we,” “us,” or “our”) collects, uses, and discloses information about you when you access or use our websites, ",
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