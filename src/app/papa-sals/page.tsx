import Header from "../Components/Header"
import Footer from "../Components/Footer"
import PaPaComponent from "../Components/Papa"
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'papa-sals',
    description: 'papa-sals',
}

export default function Rewards() {
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
            <Header />
            {/* <Banner ishome /> */}
            <PaPaComponent />

            <Footer />
        </div>
    )
}