import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import searchIcon from "../assets/icons/search.svg";
import ProductCard from "../Components/ProductCard";
import { products } from "../data/products";

const statuses = [
  { label: "All Items", value: "All" },
  { label: "Ready to Ship (In Stock)", value: "Ready to Ship" },
  { label: "Made to Order (Custom)", value: "Made to Order" },
];

const fromUrl = {
  "made-to-order": "Made to Order",
  "ready-to-ship": "Ready to Ship",
};

function Shop() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState(fromUrl[params.get("status")] || "All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setStatus(fromUrl[params.get("status")] || "All");
  }, [params]);

  const visible = products
    .filter((p) => status === "All" || p.tag === status)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  const clearAll = () => {
    setStatus("All");
    setSearch("");
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-6 md:px-10 md:py-10">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-start">
        <aside className="@container hidden rounded-xl border border-[#E8E0D7] bg-white md:flex md:aspect-[548/512]">
          <div className="flex w-full flex-col justify-evenly px-[9cqw]">
            <div className="flex items-center justify-between">
              <h2 className="text-[length:7.27cqw] font-semibold leading-none text-cocoa">
                Filters
              </h2>
              <button
                onClick={clearAll}
                className="text-[length:5.9cqw] font-semibold leading-none text-[#6B4E3A] transition hover:text-[#B0713F]"
              >
                Clear All
              </button>
            </div>

            <div className="border-b border-[#E8E0D7]" />

            <h3 className="text-[length:6.36cqw] font-semibold leading-none text-cocoa">
              Fulfillment Status
            </h3>

            {statuses.map((item) => (
              <label
                key={item.value}
                className="flex cursor-pointer items-center gap-[3.6cqw] whitespace-nowrap text-[length:5.9cqw] leading-none text-cocoa/70"
              >
                <input
                  type="radio"
                  name="status"
                  checked={status === item.value}
                  onChange={() => setStatus(item.value)}
                  className="peer sr-only"
                />
                <span className="h-[7.27cqw] w-[7.27cqw] shrink-0 rounded border border-[#E8E0D7] bg-white transition peer-checked:border-[#6B4E3A] peer-checked:bg-[#6B4E3A] peer-focus-visible:ring-2 peer-focus-visible:ring-brand" />
                {item.label}
              </label>
            ))}
          </div>
        </aside>

        <section>
          <div className="flex items-center gap-3 rounded-lg border border-[#E8E0D7] bg-white px-4 py-3 transition focus-within:ring-2 focus-within:ring-brand/20 md:gap-2.5 md:rounded-xl md:px-3.5">
            <img src={searchIcon} alt="" className="h-4 w-4 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search artisan crafts..."
              autoFocus={params.get("focus") === "search"}
              className="w-full bg-transparent text-sm text-cocoa outline-none placeholder:text-cocoa/60 lg:text-base"
            />
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] md:hidden">
            {statuses.map((item) => (
              <button
                key={item.value}
                onClick={() => setStatus(item.value)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                  status === item.value
                    ? "border-[#7A5A45] bg-[#7A5A45] text-white"
                    : "border-[#E8E0D7] bg-white text-cocoa"
                }`}
              >
                {item.value === "All" ? "All Items" : item.value}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-cocoa/70 md:mt-5 lg:text-base">
            <p>
              Showing {visible.length} items
              <span className="hidden md:inline">
                {" "}
                in "{status === "All" ? "All Crafts" : status}"
              </span>
            </p>
            <div className="hidden items-center gap-2 md:flex">
              Sort by:
              <span className="inline-flex h-6 min-w-[4.625rem] items-center rounded-lg border border-[#E8E0D7] bg-white px-2.5 text-cocoa">
                Featured
              </span>
            </div>
          </div>

          {visible.length > 0 ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:mt-5 md:gap-[1.125rem]">
              {visible.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-[#E8E0D7] bg-white p-10 text-center text-sm text-cocoa/60">
              No items match your search. Try clearing the filters.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Shop;
