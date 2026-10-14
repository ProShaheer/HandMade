import homeLogo from "../assets/icons/homelogo.svg";

const columns = [
  { title: "Shop", links: ["Shop All", "Crochet", "Home Decor"] },
  { title: "Support", links: ["Ready to Ship", "Made to Order", "Contact"] },
];

function Footer() {
  return (
    <footer className="w-full bg-cocoa text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <img src={homeLogo} alt="Handmade logo" className="h-7 w-7" />
              <span className="text-base font-semibold">Handmade</span>
            </a>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/70">
              An artisan marketplace for goods made by independent makers.
              Every piece is crafted by hand — ready to ship or made to order
              just for you.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold">{column.title}</h4>
              <ul className="mt-3 space-y-2 text-xs text-white/70">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>© 2026 Handmade. All rights reserved.</p>
          <p>Made by independent makers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;