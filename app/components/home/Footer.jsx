"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const viewSwap = () => {
    router.push(`/swap`);
  };

  const footerMenu = [
    {
      title: "COMPANY",
      links: [
        {
          name: "Who we are",
          url: "swap",
        },
        {
          name: "FAQs",
          url: "swap",
        },
        {
          name: "Blog",
          url: "swap",
        },
      ],
    },
    {
      title: "LINKS",
      links: [
        {
          name: "Documentation",
          url: "swap",
        },
        {
          name: "SDK Docs",
          url: "swap",
        },
        {
          name: "Launch App",
          url: "swap",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="mt-10 flex justify-end pr-12">
        <Button onClick={viewSwap} type="gradientIcon">
          <img src="/icons/chevron-up.svg" alt="image" />
        </Button>
      </div>
      <footer className="relative mt-[56px] flex flex-col justify-between overflow-hidden border-t border-line2 px-5 pb-[84px] pt-[46px] md:gap-10 md:px-12 md:pb-9 md:pt-[70px] lg:flex-row lg:gap-0">
        <div className="order-2 mx-auto text-center md:order-none md:mx-0 md:text-left">
          <img src="/icons/logo-name.svg" alt="image" />
          <p className="mt-5 text-xs opacity-50">© Copyright 2023 ********</p>
        </div>
        <div>
          <div className="mx-auto w-fit justify-end md:flex">
            <div className="flex md:gap-7">
              {footerMenu.map((menu) => {
                return (
                  <div key={menu.title} className="min-w-[190px]">
                    <p className="text-sm leading-[19px] opacity-50">
                      {menu.title}
                    </p>
                    <div className="mt-3 space-y-3">
                      {menu.links.map((link) => {
                        return (
                          <a
                            className="block leading-[27px]"
                            href={link.url}
                            key={menu.name}
                          >
                            {link.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-[50px] md:ml-[86px] md:mt-0">
              <p className="text-sm leading-[19px] opacity-50">FOLLOW US</p>
              <div className="mt-3 flex gap-6">
                <a href="/swap">
                  <img src="/icons/telegram.svg" alt="image" />
                </a>
                <a href="/swap">
                  <img src="/icons/twitter.svg" alt="image" />
                </a>
                <a href="/swap">
                  <img src="/icons/medium.svg" alt="image" />
                </a>
                <a href="/swap">
                  <img src="/icons/discord.svg" alt="image" />
                </a>
              </div>
              <div className="mt-[26px] flex items-center gap-5 md:block">
                <Button type="gradient">Contact us</Button>

                <a
                  href="/swap"
                  className="flex items-center gap-[10px] text-xs leading-[17px] text-color2 md:hidden"
                >
                  <img src="/icons/mail-secondary.svg" alt="image" />
                  <span>hello@********.io</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mb-[55px] mt-[50px] flex justify-center md:mb-0 md:mt-[141px] md:justify-normal">
            <div className="text-xs leading-[17px] text-color2">
              <a href="/swap">Terms & Conditions</a>
              <span> | </span>
              <a href="/swap">Privacy policy</a>
              <span> | </span>
              <a href="/swap">Security</a>
            </div>
            <div className="ml-[250px] mr-[42px] hidden md:block">
              <a
                href="/swap"
                className="flex items-center gap-[10px] text-xs leading-[17px] text-color2"
              >
                <img src="/icons/mail-secondary.svg" alt="image" />
                <span>hello@********.io</span>
              </a>
            </div>
          </div>
        </div>
        <img
          className="pointer-events-none absolute bottom-0 left-0 min-w-[600px] max-w-[600px] md:min-w-[900px] md:max-w-[900px]"
          src="/images/footer-gradient.png"
          alt="image"
        />
      </footer>
    </div>
  );
}
