import Button from "@/components/Button";

export default function Feature4() {
  return (
    <section className="mt-[138px] px-8 md:px-2">
      <div className="py-[58px] text-center">
        <h2 className="mb-2 font-urbanist text-4xl font-bold leading-[44px]">
          For Developers
        </h2>
        <Button type="secondary">Explore Documentation</Button>
      </div>
      <div className="mx-auto mt-4 flex max-w-[1232px] flex-col gap-4 md:flex-row">
        <div className="relative flex-1 overflow-hidden rounded-3xl bg-bg5 px-4 py-6 md:px-10 md:py-16 lg:px-28 lg:py-24">
          <p className="mb-2 font-urbanist text-4xl font-bold leading-[44px]">
            Mirai SDK
          </p>
          <p className="mb-4 text-[15px] leading-[26px]">
            integrate with other dApps
          </p>
          <Button type="secondary">Read Documentation</Button>
          <div className="relative z-10 mt-14 rounded-2xl border border-line1 bg-bg4 p-4">
            <div className="flex justify-between gap-2 rounded-2xl border border-line1 bg-bg5 p-4">
              <p className="font-sourcecodepro leading-6 text-color6">
                npm install @kanalabs/ paymaster-sdk
              </p>
              <img src="/icons/copy-secondary.svg" alt="image" />
            </div>
            <p className="my-4">or</p>
            <div className="flex justify-between gap-2 rounded-2xl border border-line1 bg-bg5 p-4">
              <p className="font-sourcecodepro leading-6 text-color6">
                yarn add @kanalabs/paymaster-sdk
              </p>
              <img src="/icons/copy-secondary.svg" alt="image" />
            </div>
          </div>

          <img
            src="/images/feature-4-ellipse.png"
            className="absolute -bottom-14 left-0 right-0"
            alt="image"
          />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-3xl bg-bg5 px-4 py-6 md:px-10 md:py-16 lg:px-28 lg:py-24">
          <p className="mb-2 font-urbanist text-4xl font-bold leading-[44px]">
            Cross-chain Swap
          </p>
          <p className="mb-4 text-[15px] leading-[26px]">
            integrate with other dApps
          </p>
          <Button type="secondary">Read Documentation</Button>
          <div className="relative z-10 mt-14 rounded-2xl border border-line1 bg-bg4 p-4">
            <div className="flex justify-between gap-2 rounded-2xl border border-line1 bg-bg5 p-4">
              <p className="font-sourcecodepro leading-6 text-color6">
                npm install @kanalabs/ paymaster-sdk
              </p>
              <img src="/icons/copy-secondary.svg" alt="image" />
            </div>
            <p className="my-4">or</p>
            <div className="flex justify-between gap-2 rounded-2xl border border-line1 bg-bg5 p-4">
              <p className="font-sourcecodepro leading-6 text-color6">
                yarn add @kanalabs/paymaster-sdk
              </p>
              <img src="/icons/copy-secondary.svg" alt="image" />
            </div>
          </div>
          <img
            src="/images/feature-4-ellipse.png"
            className="absolute -bottom-14 left-0 right-0"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
