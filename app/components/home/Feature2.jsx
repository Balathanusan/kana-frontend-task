"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Feature2() {
  const router = useRouter();

  const viewSwap = () => {
    router.push(`/swap`);
  };

  return (
    <section className="mt-[138px] px-8 md:px-2">
      <div className="py-[46px] text-center">
        <span className="text-sm font-bold leading-5 text-color2">ECONIA</span>
        <h2 className="mb-2 font-urbanist text-4xl font-bold leading-[44px]">
          Trade
        </h2>
        <Button onClick={viewSwap} type="secondary">
          See whats new
        </Button>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1232px] flex-col gap-4 md:flex-row">
        <div className="order-2 flex flex-1 items-center rounded-3xl bg-gradient-to-br from-[#033B4C] to-[#0E9384] px-6 py-8 md:order-none md:px-16 md:py-0 lg:px-28">
          <div className="md:max-w-[384px]">
            <p className="mb-2 text-[24px] leading-[32px] md:text-[32px] md:leading-[42px]">
              Spot Trading. Buy and Sell with limit and market order-books.
              Built on Aptos.
            </p>
            <Button onClick={viewSwap} type="primary">
              Trade now
            </Button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center rounded-3xl bg-bg5 py-12 md:px-16 md:py-[71px] lg:px-[103px]">
          <img
            src="/images/feature-2a.png"
            className="z-10 w-full scale-110 sm:w-[400px]"
            alt="image"
          />
          <img
            src="/images/feature-2a-ellipse.png"
            className="absolute -bottom-12 w-[400px] sm:-bottom-6"
            alt="image"
          />
        </div>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1232px] flex-col gap-14 rounded-3xl bg-bg5 py-8 md:flex-row md:gap-0 md:px-28 md:py-0">
        <div className="order-2 flex flex-1 items-center px-4 md:order-none md:px-0">
          <div className="md:max-w-[476px]">
            <p className="mb-2 text-[24px] leading-[32px] md:text-[32px] md:leading-[42px]">
              Trade with leverage
            </p>
            <Button onClick={viewSwap} type="primary">
              Try Perps
            </Button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center px-4 md:px-0 md:py-8">
          <img
            src="/images/feature-2b.png"
            className="z-10 hidden w-full sm:block sm:w-[476px]"
            alt="image"
          />
          <img
            src="/images/feature-2b-mobile.png"
            className="z-10 max-h-[420px] sm:hidden sm:w-[476px]"
            alt="image"
          />
          <img
            src="/images/feature-2b-ellipse.png"
            className="absolute -bottom-14 w-full sm:-bottom-12 sm:w-[476px]"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
