import { useParams } from "react-router-dom";
import { products } from "../data/products";

function Product() {
  const { id } = useParams();
  const item = products.find((p) => p.id === Number(id)) || products[0];

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid gap-8 md:grid-cols-2">
     
        <div>
          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-xl object-cover"
          />

          <div className="mt-3 grid grid-cols-3 gap-3">
            <img
              src={item.image}
              alt={`${item.name} view 1`}
              className="aspect-4/3 w-full rounded-lg object-cover"
            />
            <img
              src={item.image}
              alt={`${item.name} view 2`}
              className="aspect-4/3 w-full rounded-lg object-cover"
            />
            <img
              src={item.image}
              alt={`${item.name} view 3`}
              className="aspect-4/3 w-full rounded-lg object-cover"
            />
          </div>

          <div className="mt-4 rounded-xl border border-line bg-white p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-brand">
              The artisan behind the craft
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                {item.maker[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-cocoa">{item.maker}</p>
                <p className="text-xs text-cocoa/60">Portland, Oregon</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-brand">
            {item.maker}
          </p>
          <h1 className="mt-2 max-w-xs text-3xl font-bold leading-tight text-cocoa">
            {item.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-cocoa">
            ${item.price.toFixed(2)}
          </p>

          <div className="mt-6 rounded-lg bg-[#EBE1D5] p-4">
            <p className="text-sm font-semibold text-cocoa">
              Made to Order Production Commitment
            </p>
            <p className="mt-1 text-sm text-cocoa/70">
              Produced sustainably after purchase. Expect 2-3 weeks slow-craft
              assembly.
            </p>
          </div>

          <p className="mt-6 text-sm font-semibold text-cocoa">
            Construction Option
          </p>
          <div className="mt-2 flex items-center gap-3 rounded-lg border-2 border-[#7A5A45] bg-white px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#7A5A45]" />
            <span className="text-sm text-cocoa">
              Child-Safety Reinforced Option
            </span>
          </div>

          <div className="mt-4 rounded-xl border border-line bg-white p-4">
            <p className="text-sm font-semibold text-cocoa">
              Need this for a specific occasion?
            </p>
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder="Enter date..."
                className="w-full rounded-md border border-line bg-cream px-3 py-2 text-sm text-cocoa outline-none placeholder:text-cocoa/50 focus:border-brand"
              />
              <button className="whitespace-nowrap rounded-md bg-[#7A5A45] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
                Check Timeline
              </button>
            </div>
          </div>

          <button className="mt-4 w-full rounded-lg bg-[#7A5A45] py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Commission This Piece (${item.price.toFixed(2)})
          </button>
        </div>
      </div>
    </main>
  );
}

export default Product;