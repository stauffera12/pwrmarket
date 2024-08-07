import Header from "./Components/Header";
import Menu from "./Components/OutMenu";
import Buy from "./Components/Buy";
import Deals from "./Components/Deals";
import Reward from "./Components/Reward";
import { Download } from "./Components/Download";
import Career from "./Components/Career";
import Footer from "./Components/Footer";
import Carwash from "./Components/Carwash";
import { HomeBannner } from "./Components/HomeBanner";
import { CookieBanner } from "./Components/cookieBanner";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Power Market",
  description: "power market",
  keywords: "powermarket, california, gas station, rest stop, food",
};

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
        <Header />
        <main>
          <HomeBannner />
          <Menu />
          <Buy />
          <Carwash />
          <Deals />
          <Reward />
          <Download />
          <Career />
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
}
