export async function generateMetadata() {
    return {
        title: "download",
        description: "Save money at H&S Power Market stores with great coupons on gas, snacks, and more!",
        image: "/images/phone.png",
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