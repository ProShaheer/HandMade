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
    <header className="w-full border-b border-line bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={homeLogo} alt="Handmade logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-cocoa">Handmade</span>
        </Link>

        <ul className="hidden items-center gap-5 text-[16px] text-cocoa md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {icons.map((icon) => (
            <Link
              key={icon.label}
              to={icon.to}
              aria-label={icon.label}
              className="transition hover:opacity-60"
            >
              <img src={icon.src} alt="" className="h-4 w-4" />
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
  );
}

export default Navbar;