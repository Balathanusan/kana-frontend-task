"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Feature1() {
  const router = useRouter();

  const viewSwap = () => {
    router.push(`/swap`);
  };
  return (
    <section className="px-8 md:px-2">
      <div className="py-[60px] text-center">
        <h2 className="mb-2 font-urbanist text-4xl font-bold leading-[44px]">
          Cross-chain swap
        </h2>
        <Button onClick={viewSwap} type="secondary">
          Try Swap
        </Button>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1232px] flex-col items-center gap-14 overflow-hidden rounded-3xl bg-bg5 px-0 py-6 md:flex-row md:px-16 md:py-[134px] lg:px-28">
        <div className="order-2 flex-1 px-4 md:order-none md:max-w-[476px] md:px-0">
          <p className="mb-4 text-[24px] leading-[32px] text-color3 md:text-[32px] md:leading-[42px]">
            Swap tokens natively using across{" "}
            <span className="font-bold text-white">
              Solana, Aptos, Ethereum, zksync, Arbitrum, Sui, Optimism, Polygon
              and more!
            </span>
          </p>
          <Button onClick={viewSwap} classess="md:w-fit w-full" type="primary">
            Swap now
          </Button>
        </div>
        <div className="relative flex flex-1 items-center justify-end px-[10px] md:px-0">
          <img
            src="/images/feature-1.png"
            className="z-10 w-full sm:w-[408px]"
            alt="image"
          />
          <img
            src="/images/feature-1-ellipse.png"
            className="absolute scale-[1.4]"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
