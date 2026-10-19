import { Link } from "react-router-dom";
import homeLogo from "../assets/icons/homelogo.svg";
import searchIcon from "../assets/icons/search.svg";
import cartIcon from "../assets/icons/shopcart.svg";
import userIcon from "../assets/icons/antiuser.svg";

const links = [
  { label: "Shop All", to: "/shop" },
  { label: "Categories", to: "/#categories" },
  { label: "Makers", to: "/#makers" },
  { label: "Journal", to: "/#journal" },
];

const icons = [
  { label: "Search", src: searchIcon, to: "/shop?focus=search" },
  { label: "Account", src: userIcon, to: "/account",  rotate: "rotate-180" },
  { label: "Shopping cart", src: cartIcon, to: "/cart", rotate: "rotate-90" }, 
];

function Navbar() {
  return (
    <div className="bg-black">
      <header className="w-full rounded-t-3xl border-1 border-[#E8E0D7] bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-6 md:px-10 md:py-5 lg:py-6">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-1.5 md:col-start-1 md:row-start-1 md:justify-self-start md:gap-2"
          >
            <img
              src={homeLogo}
              alt="Handmade logo"
              className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
            />
            <span className="text-lg font-bold leading-none text-cocoa md:text-[1.125rem] lg:text-[1.375rem]">
              Handmade
            </span>
          </Link>

          <ul className="hidden items-center gap-[2em] text-sm font-normal text-cocoa md:col-start-2 md:row-start-1 md:-ml-9 md:flex md:justify-self-start lg:text-base xl:text-[1.2rem]">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-4 md:col-start-2 md:row-start-1 md:justify-self-end md:gap-6">
            {icons.map((icon) => (
              <Link
                key={icon.label}
                to={icon.to}
                aria-label={icon.label}
                className="transition hover:opacity-60"
              >
                <img
                  src={icon.src}
                  alt=""
                  className="h-5 w-5 md:h-4.5 md:w-4.5 lg:h-6 lg:w-6"
                />
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
