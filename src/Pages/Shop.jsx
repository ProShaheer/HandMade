import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
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
  const [sort, setSort] = useState("Featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setStatus(fromUrl[params.get("status")] || "All");
  }, [params]);

  const visible = products
    .filter((p) => status === "All" || p.tag === status)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "Price: Low to High") return a.price - b.price;
      if (sort === "Price: High to Low") return b.price - a.price;
      return 0;
    });

  const clearAll = () => {
    setStatus("All");
    setSearch("");
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <button
        onClick={() => setFiltersOpen(!filtersOpen)}
        className="mb-4 flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-cocoa transition hover:border-brand md:hidden"
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>

      <div className="grid gap-6 md:grid-cols-[230px_1fr]">
        <aside
          className={`h-fit rounded-xl border border-line bg-white p-5 ${
            filtersOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex items-center justify-between border-b border-line pb-3">
            <h2 className="font-semibold text-cocoa">Filters</h2>
            <button
              onClick={clearAll}
              className="text-sm font-medium text-cocoa/70 transition hover:text-brand"
            >
              Clear All
            </button>
          </div>

          <h3 className="mt-4 text-sm font-semibold text-cocoa">
            Fulfillment Status
          </h3>
          <div className="mt-3 space-y-3">
            {statuses.map((item) => (
              <label
                key={item.value}
                className="flex cursor-pointer items-center gap-3 text-sm text-cocoa"
              >
                <input
                  type="radio"
                  name="status"
                  checked={status === item.value}
                  onChange={() => setStatus(item.value)}
                  className="peer sr-only"
                />
                <span className="h-4 w-4 rounded-4px border border-cocoa/30 bg-white transition peer-checked:border-[#7A5A45] peer-checked:bg-[#7A5A45] peer-focus-visible:ring-2 peer-focus-visible:ring-brand" />
                {item.label}
              </label>
            ))}
          </div>
        </aside>

        <section>
          <div className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 transition focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
            <img src={searchIcon} alt="" className="h-4 w-4" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search artisan crafts..."
              className="w-full bg-transparent text-sm text-cocoa outline-none placeholder:text-cocoa/50"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-cocoa/70">
            <p>
              Showing {visible.length} items in "
              {status === "All" ? "All Crafts" : status}"
            </p>
            <label className="flex items-center gap-2">
              Sort by:
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-md border border-line bg-white px-2 py-1 text-cocoa outline-none focus:border-brand"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </label>
          </div>

          {visible.length > 0 ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {visible.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-line bg-white p-10 text-center text-sm text-cocoa/60">
              No items match your search. Try clearing the filters.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Shop;