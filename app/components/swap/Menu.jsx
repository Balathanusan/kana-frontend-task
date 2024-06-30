export default function Menu() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden px-4 md:block">
        <div className="flex items-center gap-4 rounded-b-2xl bg-bg5 px-3 py-6 lg:px-6">
          <div className="bg-bg8 flex flex-1 items-center justify-between gap-2 rounded-2xl px-3 py-4 text-sm lg:px-6">
            <span className="font-extrabold text-color3">Your Balance</span>
            <span className="text-color5">Wallet not connected</span>
          </div>
          <div className="bg-bg8 flex flex-1 items-center rounded-2xl px-3 py-4 lg:px-6">
            <img src="/icons/search-secondary.svg" className="w-6" alt="" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent pl-2 text-sm font-extrabold shadow-none outline-none"
            />
          </div>
          <button className="bg-bg8 flex flex-1 items-center gap-2 rounded-2xl px-3 py-4 lg:px-6">
            <img src="/icons/user-circle-primary.svg" alt="" />
            <span className="text-sm font-extrabold text-primary">
              Connect wallet
            </span>
          </button>
          <button className="bg-bg8 rounded-2xl p-4">
            <img
              src="/icons/settings-secondary.svg"
              className="min-w-6"
              alt=""
            />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="fixed top-0 w-full md:hidden">
        <div className="flex items-center justify-between border-b border-line1 bg-bg5 px-4 py-5">
          <div className="flex items-center gap-4">
            <img src="/icons/logo.svg" className="w-[19px]" alt="" />
            <span className="text-color7 text-sm font-extrabold">Swap</span>
          </div>
          <div className="flex gap-2">
            <button>
              <img src="/icons/settings.svg" alt="" />
            </button>
            <button>
              <img src="/icons/menu-2.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
