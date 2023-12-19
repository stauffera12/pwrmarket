
import Header from "../Components/Header"
import { Banner } from "../Components/Banner"
import Reward from "../Components/Reward"
import { Download } from "../Components/Download"
import Footer from "../Components/Footer"
import CurrentDeals from "../Components/CurrentDeald"

export default function Rewards() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <Banner title="Power Market Rewards" name="Rewards" description="Power through your life with Power Market where you will always find something to keep you going!" />
      <Reward />
      <CurrentDeals />
      <Download />
      <Footer />
    </div>
  )
}
