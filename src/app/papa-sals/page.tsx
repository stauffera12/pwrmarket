import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PaPaComponent from "../Components/Papa";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Papa Sal’s Deli",
  description: "papa-sals",
  keywords: "powermarket, california, gas station, rest stop, food",
};

export default function Rewards() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <main>
        <PaPaComponent />
      </main>
      <Footer />
    </div>
  );
}
