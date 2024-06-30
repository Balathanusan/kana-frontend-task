import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Feature1 from "@/components/home/Feature1";
import Feature2 from "@/components/home/Feature2";
import Feature3 from "@/components/home/Feature3";
import Feature4 from "@/components/home/Feature4";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <Header />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Footer />
    </main>
  );
}
