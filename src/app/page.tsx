import Sales from "@/components/Sales";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Categories from "@/components/Categories";
import Banner from "@/components/Banner";
import Exclusive from "@/components/Exclusive";
import Footer from "@/components/Footer";
import Popular from "@/components/Popular";

export default function Home() {
  return (
    <div className="max-w-[1280px] w-full flex flex-col items-center mx-auto">
      <Sales />
      <Navbar />
      <Slider />
      <Categories />
      <Popular />
      <Banner />
      <Exclusive />
      <Footer />
    </div>
  );
}
