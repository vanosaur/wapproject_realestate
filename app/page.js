import Image from "next/image";
import HeaderAndHero from "./components/homepage/Herosection";
import Midsection from "./components/homepage/Midsection";
import Howitworks from "./components/homepage/Howitworks";
import Footer from "./components/homepage/Footer";
import Featuredprop from "./components/homepage/Featuredprop";

export default function Home() {
  return (
    <main className="min-h-screen">
    <HeaderAndHero />
    <Midsection />
    <Featuredprop />
    <Howitworks />
    <Footer />
  </main>
  );
}
