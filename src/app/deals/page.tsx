import Header from "../Components/Header"
import { Banner } from "../Components/Banner"
import { Download } from "../Components/Download"
import Footer from "../Components/Footer"
import DealsComponent from "../Components/DealsComponent"


export default function Deals() {
    return (
        <div className="w-[100vw] h-screen overflow-x-hidden overflow-y-auto ">
            <Header />
            <Banner name="Deals" title="Everyday Deals!" description="Our committed staff strives for a seamless customer experience, ensuring daily sanitization of high-touch surfaces and ample stocking of our customers' favorite products." />
            <DealsComponent />

            <Download />
            <Footer />
        </div>
    )
}
