import Header from "../Components/Header"
import { Download } from "../Components/Download"
import Footer from "../Components/Footer"
import Team from "../Components/Team"

export default function Teams() {
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
            <Header />
            <Team />
            <Download />
            <Footer />
        </div>
    )
}
