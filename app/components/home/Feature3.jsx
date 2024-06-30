import Button from "@/components/Button";

export default function Feature3() {
  return (
    <section className="mt-[138px] px-8 sm:px-0">
      <div className="py-6 text-center sm:py-[46px]">
        <span className="text-sm font-bold leading-5 text-color2">ETHOSX</span>
        <h2 className="mb-2 font-urbanist text-4xl font-bold leading-[44px]">
          OPerps - Derivatives Token
        </h2>
        <Button type="secondary">See whats new</Button>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1232px] flex-col gap-14 rounded-3xl bg-bg5 px-4 py-8 sm:flex-row sm:gap-4 sm:px-0 sm:py-0">
        <div className="order-2 flex flex-1 items-center sm:order-none">
          <div className="sm:ml-28 sm:max-w-[476px]">
            <p className="mb-2 text-[24px] leading-[32px] sm:text-[32px] sm:leading-[42px]">
              A derivatives token for trading and hedging.
            </p>
            <Button type="primary">Try OPerps</Button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-end sm:py-8 sm:pr-[112px]">
          <img
            src="/images/feature-3.png"
            className="z-10 hidden w-full sm:block sm:w-[476px]"
            alt=""
          />
          <img
            src="/images/feature-3-mobile.png"
            className="z-10 w-full sm:hidden sm:w-[476px]"
            alt=""
          />
          <img
            src="/images/feature-3-ellipse.png"
            className="absolute -bottom-6 right-0 w-full scale-125 sm:-bottom-16 sm:right-[112px] sm:w-[476px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
