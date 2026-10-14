import ProductCard from "./ProductCard";
import { products } from "../data/products";

function Trending() {
  return (
    <section id="makers" className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-brand">
            Trending now
          </p>
          <h2 className="mt-1 text-2xl font-bold text-cocoa md:text-3xl">
            What everyone is loving
          </h2>
        </div>
        <a href="#" className="text-sm text-cocoa">
          View all trending
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Trending;