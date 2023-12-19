import Header from "../Components/Header"
import { Download } from "../Components/Download"
import Footer from "../Components/Footer"
import CcpaComponent from "../Components/CcpaComponent"

export default function Ccpa() {
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
            <Header />
            <CcpaComponent />
            <Download />
            <Footer />
        </div>
    )
}