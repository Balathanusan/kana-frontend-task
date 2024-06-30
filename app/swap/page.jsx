import Menu from "@/components/swap/Menu";
import Navbar from "@/components/swap/Navbar";
import HomeTab from "@/components/swap/HomeTab";

export default function Swap() {
  return (
    <section className="mx-auto flex max-w-[1440px] bg-bg9">
      <Navbar />
      <div className="flex-1">
        <Menu />
        <HomeTab />
      </div>
    </section>
  );
}
