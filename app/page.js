"use client"
import FeaturedJobs from "@/components/featuredJobs/FeaturedJobs";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import MiniCategory from "@/components/miniCategory/MiniCategory";
import Navbar from "@/components/navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "@/store/Store";



export default function Home() {
  return (
    <div>
      <Provider store={store}>
      <Navbar />
      <Hero />
      <MiniCategory />
      <FeaturedJobs title={"Featured"} />
      <Footer />
      </Provider>
    </div>
  );
}
