import { Link } from "react-router-dom";
import homeLogo from "../assets/icons/homelogo.svg";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Shop All", to: "/shop" },
      { label: "Crochet", to: "/shop" },
      { label: "Home Decor", to: "/shop" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Ready to Ship", to: "/shop?status=ready-to-ship" },
      { label: "Made to Order", to: "/shop?status=made-to-order" },
      { label: "Contact", to: "/" },
    ],
  },
];

function Footer() {
  return (
    <footer className="w-full bg-[#35261D] text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10">
        <div className="grid gap-25 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={homeLogo} alt="Handmade logo" className="h-7 w-7" />
              <span className="text-base font-semibold">Handmade</span>
            </Link>
            <p className="mt-3 max-w-xs text-xs lg:text-sm leading-relaxed text-white/70">
              An artisan marketplace for goods made by independent makers. Every
              piece is crafted by hand — ready to ship or made to order just for
              you.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm lg:text-base font-semibold">{column.title}</h4>
              <ul className="mt-3 space-y-2 text-xs lg:text-sm text-white/70">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs lg:text-sm text-white/60 sm:flex-row sm:justify-between">
          <p>© 2026 Handmade. All rights reserved.</p>
          <p>Made by independent makers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
