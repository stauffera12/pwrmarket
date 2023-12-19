import Header from "../Components/Header"
import { Download } from "../Components/Download"
import Footer from "../Components/Footer"
import Team from "../Components/Team"
import PrivacyComponent from "../Components/Privacy"

export default function Privacy() {
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
            <Header />
            <PrivacyComponent />
            <Download />
            <Footer />
        </div>
    )
}