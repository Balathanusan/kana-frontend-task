import Button from "@/components/Button";

export default function Footer() {
  const footerMenu = [
    {
      title: "COMPANY",
      links: [
        {
          name: "Who we are",
          url: "#",
        },
        {
          name: "FAQs",
          url: "#",
        },
        {
          name: "Blog",
          url: "#",
        },
      ],
    },
    {
      title: "LINKS",
      links: [
        {
          name: "Documentation",
          url: "#",
        },
        {
          name: "SDK Docs",
          url: "#",
        },
        {
          name: "Launch App",
          url: "#",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="mt-10 flex justify-end pr-12">
        <Button type="gradientIcon">
          <img src="/icons/chevron-up.svg" alt="image" />
        </Button>
      </div>
      <footer className="relative mt-[56px] flex flex-col justify-between overflow-hidden border-t border-line2 px-5 pb-[84px] pt-[46px] md:gap-10 md:px-12 md:pb-9 md:pt-[70px] lg:flex-row lg:gap-0">
        <div className="order-2 mx-auto text-center md:order-none md:mx-0 md:text-left">
          <img src="/icons/logo-name.svg" alt="image" />
          <p className="mt-5 text-xs opacity-50">© Copyright 2023 Kana Labs</p>
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
                <a href="#">
                  <img src="/icons/telegram.svg" alt="image" />
                </a>
                <a href="#">
                  <img src="/icons/twitter.svg" alt="image" />
                </a>
                <a href="#">
                  <img src="/icons/medium.svg" alt="image" />
                </a>
                <a href="#">
                  <img src="/icons/discord.svg" alt="image" />
                </a>
              </div>
              <div className="mt-[26px] flex items-center gap-5 md:block">
                <Button type="gradient">Contact us</Button>

                <a
                  href="#"
                  className="flex items-center gap-[10px] text-xs leading-[17px] text-color2 md:hidden"
                >
                  <img src="/icons/mail-secondary.svg" alt="image" />
                  <span>hello@kanalabs.io</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mb-[55px] mt-[50px] flex justify-center md:mb-0 md:mt-[141px] md:justify-normal">
            <div className="text-xs leading-[17px] text-color2">
              <a href="#">Terms & Conditions</a>
              <span> | </span>
              <a href="#">Privacy policy</a>
              <span> | </span>
              <a href="#">Security</a>
            </div>
            <div className="ml-[250px] mr-[42px] hidden md:block">
              <a
                href="#"
                className="flex items-center gap-[10px] text-xs leading-[17px] text-color2"
              >
                <img src="/icons/mail-secondary.svg" alt="image" />
                <span>hello@kanalabs.io</span>
              </a>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 min-w-[600px] max-w-[600px] md:min-w-[900px] md:max-w-[900px]"
          src="/images/footer-gradient.png"
          alt="image"
        />
      </footer>
    </div>
  );
}
