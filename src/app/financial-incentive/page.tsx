import Header from "../Components/Header";
import { Download } from "../Components/Download";
import Footer from "../Components/Footer";
import FinancialComponent from "../Components/Financial";

export default function Financial() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <main>
        <FinancialComponent />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
