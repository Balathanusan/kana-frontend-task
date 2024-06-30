export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#1D1E201A] px-5 py-[22px] sm:px-12 sm:py-[30px]">
      <div>
        <img src="/icons/logo-name.svg" className="h-[23px] sm:h-9" alt="" />
      </div>
      <div>
        <button>
          <img src="/icons/menu.svg" alt="" />
        </button>
      </div>
    </header>
  );
}
