import { Link } from "react-router-dom";
import {
  cartItems,
  cartDetails,
  shipping,
  subtotal,
  total,
  money,
} from "../data/cart";

function Cart() {
  return (
    <main className="mx-auto max-w-6xl px-6 md:px-10 py-6 md:py-10">
      <h1 className="text-lg font-bold text-cocoa md:text-2xl">
        Your Shopping Bag ({cartItems.length})
      </h1>

      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_340px] md:items-start md:gap-8">
        <div className="space-y-4">
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-lg border border-1-[#E8E0D7] bg-white p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm lg:text-base font-semibold text-cocoa">
                    {item.name}
                  </p>
                  <p className="text-xs lg:text-sm text-cocoa/60">
                    {cartDetails[item.id]}
                  </p>
                  <p className="mt-1 text-sm lg:text-base font-semibold text-cocoa">
                    {money(item.price)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-lg border border-1-red-200 bg-red-50 p-3">
            <p className="text-xs lg:text-sm font-semibold text-red-800">
              Honest Need-by Warning
            </p>
            <p className="mt-1 text-xs lg:text-sm leading-relaxed text-red-700">
              Made-to-Order items require a minimum of 2 weeks slow assembly.
              Please adjust occasion expectations accordingly.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-1-[#E8E0D7] bg-white p-4">
          <div className="space-y-2 text-sm lg:text-base text-cocoa">
            <div className="flex justify-between">
              <span className="text-cocoa/70">Subtotal</span>
              <span className="font-medium">{money(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cocoa/70">Standard Shipping</span>
              <span className="font-medium">{money(shipping)}</span>
            </div>
          </div>
          <div className="mt-3 flex justify-between border-1-t border-1-[#E8E0D7] pt-3 text-sm lg:text-base font-bold text-cocoa">
            <span>Total</span>
            <span>{money(total)}</span>
          </div>
          <Link
            to="/checkout"
            className="mt-4 block w-full rounded-lg bg-[#7A5A45] py-3 text-center text-sm lg:text-base font-semibold text-white transition hover:opacity-90"
          >
            Proceed to Checkout
          </Link>
          <Link
            to="/shop"
            className="mt-3 block text-center text-xs lg:text-sm text-cocoa/70 transition hover:text-[#B0713F]"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Cart;
