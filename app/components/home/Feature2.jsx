import Button from "@/components/Button";

export default function Feature2() {
  return (
    <section className="mt-[138px] px-8 sm:px-0">
      <div className="py-[46px] text-center">
        <span className="text-sm font-bold leading-5 text-color2">ECONIA</span>
        <h2 className="mb-2 font-urbanist text-4xl font-bold leading-[44px]">
          Trade
        </h2>
        <Button type="secondary">See whats new</Button>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1232px] flex-col gap-4 sm:flex-row">
        <div className="order-2 flex flex-1 items-center rounded-3xl bg-gradient-to-br from-[#033B4C] to-[#0E9384] px-6 py-8 sm:order-none sm:px-0 sm:py-0">
          <div className="sm:ml-28 sm:max-w-[384px]">
            <p className="mb-2 text-[24px] leading-[32px] sm:text-[32px] sm:leading-[42px]">
              Spot Trading. Buy and Sell with limit and market order-books.
              Built on Aptos.
            </p>
            <Button type="primary">Trade now</Button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-end rounded-3xl bg-bg5 py-12 sm:py-[71px] sm:pr-[103px]">
          <img
            src="/images/feature-2a.png"
            className="z-10 w-full scale-110 sm:w-[400px]"
            alt=""
          />
          <img
            src="/images/feature-2a-ellipse.png"
            className="absolute -bottom-12 w-[400px] sm:-bottom-2 sm:right-[103px]"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1232px] flex-col gap-14 rounded-3xl bg-bg5 py-8 sm:flex-row sm:gap-0 sm:py-0">
        <div className="order-2 flex flex-1 items-center px-4 sm:order-none sm:px-0">
          <div className="sm:ml-28 sm:max-w-[476px]">
            <p className="mb-2 text-[24px] leading-[32px] sm:text-[32px] sm:leading-[42px]">
              Trade with leverage
            </p>
            <Button type="primary">Try Perps</Button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-end px-4 sm:px-0 sm:py-8 sm:pr-[112px]">
          <img
            src="/images/feature-2b.png"
            className="z-10 hidden w-full sm:block sm:w-[476px]"
            alt=""
          />
          <img
            src="/images/feature-2b-mobile.png"
            className="z-10 w-full sm:hidden sm:w-[476px]"
            alt=""
          />
          <img
            src="/images/feature-2b-ellipse.png"
            className="absolute -bottom-14 w-full sm:-bottom-12 sm:right-[112px] sm:w-[476px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
