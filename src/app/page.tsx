import Header from "./Components/Header";
// import Banner from "./Components/Banner"
import { Banner } from "./Components/Banner";
import Menu from "./Components/OutMenu";
import Buy from "./Components/Buy";
import Deals from "./Components/Deals";
import Reward from "./Components/Reward";
import { Download } from "./Components/Download";
import Career from "./Components/Career";
import Footer from "./Components/Footer";
import { HomeBannner } from "./Components/HomeBanner";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Power Market",
  description: "power market",
  keywords: "powermarket, california, gas station, rest stop, food",
};

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <main>
        <HomeBannner />
        <Menu />
        <Buy />
        <Deals />
        <Reward />
        <Download />
        <Career />
      </main>
      <Footer />
    </div>
  );
}
