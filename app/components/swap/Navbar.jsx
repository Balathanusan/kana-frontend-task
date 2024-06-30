export default function Navbar() {
  const menuDesktop = [
    {
      tab: 1,
      icon: "coins-switch.svg",
      active: true,
    },
    {
      tab: 2,
      icon: "coins-secondary.svg",
    },
    {
      tab: 3,
      icon: "coins-toss-secondary.svg",
    },
    {
      tab: 4,
      icon: "balance-secondary.svg",
    },
    {
      tab: 5,
      icon: "analytics-secondary.svg",
    },
    {
      tab: 6,
      icon: "grid-secondary.svg",
    },
  ];

  const menuMobile = [
    {
      tab: 1,
      title: "Home",
      icon: "coins-switch-primary.svg",
      active: true,
    },
    {
      tab: 2,
      title: "Balance",
      icon: "piggy-bank-secondary.svg",
    },
    {
      tab: 3,
      title: "Profile",
      icon: "user-circle-secondary.svg",
    },
  ];

  return (
    <div>
      {/* Desktop */}
      <div className="hidden min-h-screen w-[88px] flex-col items-center bg-bg4 p-4 md:flex">
        <div className="mb-10 p-4">
          <img src="/icons/logo.svg" className="w-[25px]" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          {menuDesktop.map((item) => {
            return (
              <button
                className={`rounded-2xl p-5 ${item.active ? "bg-bg7" : null}`}
              >
                <img className="w-4" src={`/icons/${item.icon}`} alt="" />
              </button>
            );
          })}
        </div>

        <div className="mt-auto">
          <button className="rounded-2xl bg-bg5 p-5">
            <img src="/icons/question-mark-secondary.svg" alt="" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="fixed bottom-0 flex w-full bg-bg2 md:hidden">
        {menuMobile.map((item) => {
          return (
            <button
              className={`flex flex-1 flex-col items-center justify-center py-[19px] ${item.active ? "shadow-[inset_0_2px_0_0_#2ED3B7]" : null}`}
            >
              <img src={`/icons/${item.icon}`} alt="" />
              <p
                className={`mt-2 text-[10px] ${item.active ? "text-primary" : "text-color3"}`}
              >
                {item.title}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
