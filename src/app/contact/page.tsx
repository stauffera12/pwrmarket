import Header from "../Components/Header";
import { Banner } from "../Components/Banner";
import { Download } from "../Components/Download";
import Footer from "../Components/Footer";
import ContactComponent from "../Components/ContactComponent";

export default function Contact() {
  return (
    <div className="w-[100vw] h-screen overflow-x-hidden overflow-y-auto ">
      <Header />
      <main>
        <Banner
          isContact
          title="Contact Us!"
          description="Stay connected with us"
        />
        <ContactComponent />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
