import Button from "@/components/Button";

export default function Feature3() {
  return (
    <section className="mt-[138px] px-8 md:px-2">
      <div className="py-6 text-center md:py-[46px]">
        <span className="text-sm font-bold leading-5 text-color2">ETHOSX</span>
        <h2 className="mb-2 font-urbanist text-4xl font-bold leading-[44px]">
          OPerps - Derivatives Token
        </h2>
        <Button type="secondary">See whats new</Button>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1232px] flex-col gap-14 rounded-3xl bg-bg5 px-4 py-8 md:flex-row md:gap-4 md:px-16 md:py-0 lg:px-28">
        <div className="order-2 flex flex-1 items-center md:order-none">
          <div className="md:max-w-[476px]">
            <p className="mb-2 text-[24px] leading-[32px] md:text-[32px] md:leading-[42px]">
              A derivatives token for trading and hedging.
            </p>
            <Button type="primary">Try OPerps</Button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center md:py-8">
          <img
            src="/images/feature-3.png"
            className="z-10 hidden w-full sm:block sm:w-[476px]"
            alt=""
          />
          <img
            src="/images/feature-3-mobile.png"
            className="z-10 max-h-[420px] sm:hidden sm:max-w-[476px]"
            alt=""
          />
          <img
            src="/images/feature-3-ellipse.png"
            className="absolute -bottom-20 right-0 w-full sm:-bottom-32 md:-bottom-10 md:w-[476px] md:scale-125"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
