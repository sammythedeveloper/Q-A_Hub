import logoImage from "@/assets/images/sphereal-logo.svg?url";
export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
];

export const Header = () => {
  return (
    <header className=" border-b border-gray-200/20">
      <div className=" container">
        <div className=" h-18 flex justify-between items-center">
          <div className=" flex gap-4 items-center">
            <div
              className=" size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
              style={{
                maskImage: `url(${logoImage.src})`,
                maskSize: "contain",
              }}
            ></div>
            <div className=" front-extrabold text-2xl">Q&A</div>
          </div>
          <div>
            <div>
              <nav>
                {navItems.map(({name,href}) => (
                  <a href={href} key={href} className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase" >
                    {name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex items-center ">
            <button className=" size-10 rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] relative">
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className=" w-4 h-0.5 bg-gray-100 -translate-y-1/2"></div>
              </div>
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <div className=" w-4 h-0.5 bg-gray-100 translate-y-1 "></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
