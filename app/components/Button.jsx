"use client";

export default function Button({
  type,
  children,
  classess,
  onClick = () => {},
}) {
  const primary = () => {
    return (
      <button
        onClick={onClick}
        className={`hover:bg-bg9 rounded-2xl border border-[#0E9384] bg-bg1 px-6 py-4 font-extrabold leading-6 text-primary shadow-[0_10px_8px_0px_#00FFFF1A,_0px_4px_8px_0px_#00000026,_0px_5px_0px_0px_#0E9384] transition-colors ${classess}`}
      >
        {children}
      </button>
    );
  };
  const secondary = () => {
    return (
      <button
        onClick={onClick}
        className="hover:border-color8 hover:text-color8 inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-primary bg-bg4 px-4 py-2 text-xs font-extrabold leading-[18px] text-primary transition-colors"
      >
        {children}
      </button>
    );
  };
  const tertiary = () => {
    return (
      <button
        onClick={onClick}
        className="px-6 py-4 font-extrabold leading-6 text-primary"
      >
        {children}
      </button>
    );
  };

  const gradient = () => {
    return (
      <button
        onClick={onClick}
        className="rounded-[4px] bg-gradient-to-r from-[#4F9DFF] to-[#67FFD1] p-[1px]"
      >
        <p className="rounded-[4px] bg-black px-[46px] py-[10px] text-sm font-extrabold leading-[19px]">
          {children}
        </p>
      </button>
    );
  };

  const gradientIcon = () => {
    return (
      <button
        onClick={onClick}
        className="rounded-[10px] bg-gradient-to-r from-[#4F9DFF] to-[#67FFD1] p-[1px]"
      >
        <p className="bg-bg6 flex size-[50px] items-center justify-center rounded-[10px] text-sm font-extrabold leading-[19px]">
          {children}
        </p>
      </button>
    );
  };

  switch (type) {
    case "primary":
      return primary();
    case "secondary":
      return secondary();
    case "tertiary":
      return tertiary();
    case "gradient":
      return gradient();
    case "gradientIcon":
      return gradientIcon();
    default:
      return secondary();
  }
}
