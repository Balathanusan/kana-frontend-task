import Button from "@/components/Button";

export default function HomeTab() {
  const tabs = [
    {
      name: "Same-chain",
      icon: "split-arrows.svg",
      active: true,
    },
    {
      name: "Cross-chain",
      icon: "cross-arrows-secondary.svg",
    },
  ];

  const chains = [
    {
      icon: "aptos.svg",
      active: true,
    },
    {
      icon: "zksync.svg",
    },
    {
      icon: "bnb.svg",
    },
    {
      icon: "polygon.svg",
    },
    {
      icon: "arbitrum.svg",
    },
    {
      icon: "avalanche.svg",
    },
    {
      icon: "ethereum.svg",
    },
    {
      icon: "solana.svg",
    },
    {
      icon: "sui.svg",
    },
  ];

  const chainsMobile = [
    {
      icon: "aptos.svg",
      active: true,
    },
    {
      icon: "polygon.svg",
    },
    {
      icon: "bnb.svg",
    },
    {
      icon: "arbitrum.svg",
    },
  ];

  return (
    <div className="mx-auto mt-16 min-h-screen w-full pb-28 md:mt-4 md:min-h-0 md:max-w-[536px] md:pb-0">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center md:flex-none">
          {tabs.map((tab) => {
            return (
              <button
                className={`-mb-[1px] flex flex-1 items-center gap-2 border-b border-line1 px-6 py-4 text-xs font-extrabold md:flex-none md:rounded-t-2xl md:border ${tab.active ? "text-color7 border-b-bg9 bg-bg9 md:border-b-bg4 md:bg-bg4" : "bg-bg5 text-color3"}`}
              >
                <img src={`/icons/${tab.icon}`} alt="image" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
        <div className="hidden md:block">
          <button className="p-2">
            <img src="/icons/grid-primary.svg" alt="image" />
          </button>
        </div>
      </div>
      <div className="bg-bg9 border-line1 p-4 md:rounded-b-2xl md:rounded-tr-2xl md:border md:bg-bg4 md:p-6">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-color7 text-sm font-extrabold">
              Same-chain Swap
            </span>
            <div className="flex items-center gap-2">
              <button className="p-2">
                <img src="/icons/refresh-primary.svg" alt="image" />
              </button>
              <button className="p-2">
                <img src="/icons/filters-primary.svg" alt="image" />
              </button>
            </div>
          </div>
          <div className="mt-4 hidden gap-2 md:flex">
            {chains.map((item) => {
              return (
                <button
                  className={`rounded-lg p-2 ${item.active ? "bg-bg7 border border-line1" : null}`}
                >
                  <img src={`/logos/${item.icon}`} alt="image" />
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex justify-between gap-2 md:hidden">
            <div className="flex gap-2">
              {chainsMobile.map((item) => {
                return (
                  <button
                    className={`rounded-lg p-2 ${item.active ? "bg-bg7 border border-line1" : null}`}
                  >
                    <img src={`/logos/${item.icon}`} alt="image" />
                  </button>
                );
              })}
            </div>
            <div>
              <Button type="secondary">
                <span>Other chains</span>
                <img
                  src="icons/chevron-down-primary.svg"
                  className="translate-x-1"
                  alt="image"
                />
              </Button>
            </div>
          </div>
          <div className="my-4">
            <div className="rounded-2xl border border-line1 bg-bg5 px-6 py-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="order-2 flex flex-1 flex-col border-b border-line1 md:order-none">
                  <div className="flex justify-between gap-2 md:justify-normal">
                    <span className="text-xs text-color3">Pay from</span>{" "}
                    <button className="text-xs font-extrabold text-primary">
                      Connect Wallet
                    </button>
                  </div>
                  <p className="mb-2 mt-4 text-xl font-medium text-color3 md:mt-auto">
                    0.00
                  </p>
                </div>
                <div className="flex min-w-[160px] gap-2 rounded-2xl border border-line1 bg-bg4 p-4">
                  <img src="/icons/placeholder.svg" alt="image" />
                  <div className="text-color7 flex items-center gap-2 md:block">
                    <p className="text-lg font-extrabold">Token</p>
                    <p className="text-[10px]">
                      on <span className="font-bold">Chain</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[10px] flex justify-between text-xs font-medium text-color4">
                <p>
                  USD <span className="ml-2 font-extrabold">0</span>
                </p>
                <p>
                  Balance <span className="ml-2 font-extrabold">-</span>
                </p>
              </div>
            </div>
            <div className="-my-[10px] flex justify-center">
              <button className="rounded-lg border border-line1 bg-bg4 p-2">
                <img src="/icons/switch-arrows-secondary.svg" alt="image" />
              </button>
            </div>
            <div className="rounded-2xl border border-line1 bg-bg5 px-6 py-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="order-2 flex flex-1 flex-col border-b border-line1 md:order-none">
                  <div className="flex justify-between gap-2 md:justify-normal">
                    <span className="text-xs text-color3">Receive to</span>{" "}
                    <button className="text-xs font-extrabold text-primary">
                      Connect Wallet
                    </button>
                  </div>
                  <p className="mb-2 mt-4 text-xl font-medium text-color3 md:mt-auto">
                    0.00
                  </p>
                </div>
                <div className="flex min-w-[160px] gap-2 rounded-2xl border border-line1 bg-bg4 p-4">
                  <img src="/icons/placeholder.svg" alt="image" />
                  <div className="text-color7 flex items-center gap-2 md:block">
                    <p className="text-lg font-extrabold">Token</p>
                    <p className="text-[10px]">
                      on <span className="font-bold">Chain</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[10px] flex justify-between text-xs font-medium text-color4">
                <p>
                  USD <span className="ml-2 font-extrabold">0</span>
                </p>
                <p>
                  Balance <span className="ml-2 font-extrabold">-</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <button className="mx-auto my-4 flex items-center gap-2 text-sm text-color3 md:hidden">
              <span>More routes</span>
              <img src="icons/chevron-down-secondary.svg" alt="image" />
            </button>
            <Button type="primary" classess="w-full">
              Swap now
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-4 px-4 md:px-0">
        <button className="flex w-full items-center justify-between rounded-2xl border border-line1 bg-bg4 p-6">
          <span className="text-sm text-color4">Additional details</span>
          <img src="icons/chevron-down-secondary.svg" alt="image" />
        </button>
      </div>
    </div>
  );
}
