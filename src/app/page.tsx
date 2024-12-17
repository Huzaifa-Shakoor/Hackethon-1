import Banner from "@/Components/Banner";
import Nav from "@/Components/Nav";
import Display from "@/Components/Display"; // Fixed the typo here
import Products from "@/Components/Ourproducts"; // Fixed the typo here
import Swiper from "@/Components/Swiper"; // Fixed the typo here
import GalleryComponent from "@/Components/Gallery"; // Fixed the typo here
import Footer from "@/Components/Footer"; // Fixed the typo here
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Display />
      <Products />
      <Swiper />
      <GalleryComponent />
    </div>
  );
}
