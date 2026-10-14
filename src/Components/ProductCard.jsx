import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="block">
      <article className="overflow-hidden rounded-xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="aspect-4/3 w-full object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-cream px-3 py-1 text-xs font-medium text-cocoa">
            {item.tag}
          </span>
        </div>
        <div className="p-4">
          <p className="text-xs uppercase text-cocoa/60">{item.maker}</p>
          <h3 className="mt-1 truncate font-semibold text-cocoa">{item.name}</h3>
          <p className="mt-1 font-semibold text-cocoa">${item.price.toFixed(2)}</p>
          <p className="mt-1 text-sm text-cocoa/60">{item.note}</p>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;