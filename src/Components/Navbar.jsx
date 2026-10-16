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
  { label: "Account", src: userIcon, to: "/account" },
  { label: "Shopping cart", src: cartIcon, to: "/cart" },
];

function Navbar() {
  return (
    <div className="bg-black">
      <header className="w-full rounded-t-3xl border-b border-[#E8E0D7] bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-10 md:py-5 lg:py-6">
          <Link to="/" className="flex shrink-0 items-center gap-1.5 md:gap-2">
            <img
              src={homeLogo}
              alt="Handmade logo"
              className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
            />
            <span className="text-base font-bold text-cocoa md:text-lg lg:text-[1.375rem]">
              Handmade
            </span>
          </Link>

          <ul className="hidden items-center gap-7 text-sm font-normal text-cocoa md:flex lg:gap-10 lg:text-base">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-4 md:gap-6">
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
