import Header from "../Components/Header";
import Footer from "../Components/Footer";
import DownloadApp from "../Components/DowloadApp";

export default function Downloads() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <main>
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}
