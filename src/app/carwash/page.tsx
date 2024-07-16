import Header from "../Components/Header";
import { Banner } from "../Components/Banner";
import Reward from "../Components/Reward";
import { Download } from "../Components/Download";
import Footer from "../Components/Footer";
import CarWashDeals from "../Components/CarwashDeals";

export default function Carwash() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <main>
        <Banner
          title="Power Market Auto Spa"
          name="Auto Spa"
          description="Join PM+ for monthly unlimited washes! 50% off your first two months!"
        />
        <CarWashDeals />
        <Download />
      </main>
      <Footer />
    </div>
  );
}