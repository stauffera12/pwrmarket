import Header from "../Components/Header"
import { Banner } from "../Components/Banner"
import Reward from "../Components/Reward"
import { Download } from "../Components/Download"
import Footer from "../Components/Footer"
import DownloadApp from "../Components/DowloadApp"

export default function Downloads() {
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
            <Header />
            {/* <Download isdownload /> */}
            <DownloadApp />
            <Footer />
        </div>
    )
}
