import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="w-full rounded-t-3xl border-b border-line bg-cream">
      <nav className="w-full rounded-t-3xl border-t border-x border-white/20 bg-[#FFFFFF] backdrop-blur-md px-9 py-5 flex items-center justify-between shadow-2xl">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img
              src={homeLogo}
              alt="Handmade logo"
              className="h-7 w-7 md:h-8 md:w-8"
            />
            <span className="text-xl gap-1 font-semibold text-cocoa">Handmade</span>
          </Link>

          <ul className="hidden items-center text-[15px] gap-7 font-black font-stretch-normal text-cocoa md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-6 md:gap-22px">
            {icons.map((icon) => (
              <Link
                key={icon.label}
                to={icon.to}
                aria-label={icon.label}
                className="transition hover:opacity-60"
              >
                <img src={icon.src} alt="" className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
            ))}

            <button
              className="text-cocoa md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <ul className="mx-auto max-w-6xl space-y-4 border-t border-line px-6 py-4 text-cocoa md:hidden">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default Navbar;