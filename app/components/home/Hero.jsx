"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const highlights = [
    {
      title: "Trade",
      description: "Lorem ipsum dolor sit amet",
      url: "#",
      icon: "bar-chart.png",
      width: 116,
    },
    {
      title: "Swap",
      description: "Try the new Cross-chain swap",
      url: "swap",
      icon: "coins-swap.png",
      width: 40,
      classes: "text-balance",
    },
    {
      title: "Perps",
      description: "Lorem ipsum dolor sit amet",
      url: "#",
      icon: "scales.png",
      width: 123,
    },
    {
      title: "OPerps",
      description: "Lorem ipsum dolor sit amet",
      url: "#",
      icon: "scales.png",
      width: 123,
    },
  ];

  const viewSwap = () => {
    router.push(`/swap`);
  };

  return (
    <section className="mb-8 pt-12 sm:mb-28">
      <div className="flex justify-between">
        <div className="pointer-events-none absolute sm:pl-12">
          <img
            className="h-[120px] sm:h-[342px]"
            src="/images/hero-1.png"
            alt=""
          />
          <img
            className="absolute left-0 top-0 z-20 h-[150px] min-w-[100px] sm:h-[650px] sm:min-w-[600px]"
            src="/images/hero-ellipse-1.png"
            alt=""
          />
        </div>
        <div className="mx-auto mt-20 max-w-[291px] pt-2 sm:max-w-xl">
          <h1 className="inline-block bg-gradient-to-r from-[#67FFD1] to-[#4F9DFF] bg-clip-text text-center font-urbanist text-[38px] font-bold leading-[38px] -tracking-[1px] text-transparent sm:text-[84px] sm:leading-[84px] sm:-tracking-[2px]">
            Connected and simplified web3
          </h1>
          <p className="mt-8 text-center text-lg leading-[18px]">
            Where Chains & Experiences Unite
          </p>
          <div className="mt-[53px] flex flex-col justify-center gap-4 sm:mt-9 sm:flex-row">
            <Button
              onClick={viewSwap}
              classess="sm:w-fit w-full"
              type="primary"
            >
              Launch App
            </Button>
            <Button type="tertiary">Learn More</Button>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 sm:pr-12">
          <img
            className="h-[120px] sm:h-[350px]"
            src="/images/hero-2.png"
            alt=""
          />
          <img
            className="absolute -top-4 right-0 z-20 h-[250px] min-w-[150px] sm:-top-36 sm:h-[800px] sm:min-w-[600px]"
            src="/images/hero-ellipse-2.png"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto mt-[63px] grid max-w-[240px] grid-cols-1 justify-center gap-4 px-2 sm:mt-[121px] sm:max-w-[1008px] sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => {
          return (
            <a
              href={item.url}
              key={item.title}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-line1 bg-bg1 transition-shadow hover:shadow-[0_20px_9px_-8px_#00FFFF14] ${item.classes}`}
            >
              <div className="relative hidden flex-1 pb-2 pl-[31px] pr-8 pt-8 sm:block">
                <p className="relative z-20 text-xl leading-[28px] text-color4">
                  {item.description}
                </p>
                <img
                  src={`/images/${item.icon}`}
                  className="absolute -right-1 bottom-0 z-10 opacity-50 mix-blend-soft-light"
                  width={item.width}
                  alt=""
                />
                <img
                  src={`/images/hover-background.png`}
                  className="absolute right-0 top-0 h-full w-full opacity-0 transition-opacity group-hover:opacity-80"
                  alt=""
                />
              </div>
              <div className="mt-auto flex justify-between bg-bg2 px-6 py-4">
                <span className="text-lg font-extrabold">{item.title}</span>
                <img src="/icons/redirect-secondary.svg" width={16} alt="" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
