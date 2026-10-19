import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <Link
      to={`/product/${item.id}`}
      className="block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-xl border-[0.125rem] border-[#E8E0D7] bg-white transition duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="aspect-[4/3] w-full object-cover md:aspect-square"
          />
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-0.5 text-sm font-semibold text-cocoa lg:text-base ${
              item.tag === "Ready to Ship" ? "bg-[#F6E6D2]" : "bg-[#EDE4D8]"
            }`}
          >
            {item.tag}
          </span>
        </div>
        <div className="flex-1 p-4 lg:p-5">
          <p className="truncate text-sm font-medium uppercase text-cocoa/60 lg:text-base">
            {item.maker}
          </p>
          <h3 className="mt-1 truncate text-base font-bold text-cocoa lg:text-lg">
            {item.name}
          </h3>
          <p className="mt-1 text-base font-bold text-cocoa lg:text-lg">
            ${item.price.toFixed(2)}
          </p>
          <p className="mt-1 truncate text-sm text-cocoa/60 lg:text-base">
            {item.note}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
