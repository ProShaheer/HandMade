import { useState } from "react";
import { Link } from "react-router-dom";
import {
  cartItems,
  cartDetails,
  shipping,
  subtotal,
  total,
  money,
} from "../data/cart";

const fields = [
  { name: "name", label: "Full name", type: "text", placeholder: "Sarah Mitchell" },
  { name: "email", label: "Email", type: "email", placeholder: "sarah.m@example.com" },
  { name: "address", label: "Address", type: "text", placeholder: "Street address" },
  { name: "city", label: "City", type: "text", placeholder: "City" },
  { name: "zip", label: "Postal / ZIP code", type: "text", placeholder: "ZIP code" },
];

function Checkout() {
  const [placed, setPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
    window.scrollTo(0, 0);
  };

  if (placed) {
    return (
      <main className="mx-auto max-w-xl px-6 py-16 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl text-green-700">
          ✓
        </div>
        <h1 className="mt-4 text-2xl font-bold text-cocoa">
          Thank you for your order
        </h1>
        <p className="mt-2 text-sm text-cocoa/70">
          Order #HM-2026-9482 is confirmed. The artisan will start working on
          your pieces soon.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/account"
            className="rounded-lg bg-[#7A5A45] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            View my orders
          </Link>
          <Link
            to="/shop"
            className="rounded-lg border border-line bg-white px-6 py-3 text-sm font-semibold text-cocoa transition hover:border-brand"
          >
            Continue shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-6 md:py-10">
      <h1 className="text-lg font-bold text-cocoa md:text-2xl">Checkout</h1>

      <div className="mt-4 grid gap-6 md:grid-cols-[1fr_340px] md:items-start md:gap-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-line bg-white p-4 md:p-6"
        >
          <h2 className="text-sm font-semibold text-cocoa">
            Contact and shipping
          </h2>

          <div className="mt-4 space-y-4">
            {fields.map((field) => (
              <label key={field.name} className="block">
                <span className="text-xs font-medium text-cocoa/70">
                  {field.label}
                </span>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  className="mt-1 w-full rounded-md border border-line bg-cream px-3 py-2 text-sm text-cocoa outline-none placeholder:text-cocoa/40 focus:border-brand"
                />
              </label>
            ))}
          </div>

          <p className="mt-4 text-xs text-cocoa/50">
            Payment details will be added when a payment provider is connected.
          </p>

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-[#7A5A45] py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Place Order ({money(total)})
          </button>
        </form>

        {/* Summary */}
        <div className="rounded-xl border border-line bg-white p-4">
          <h2 className="text-sm font-semibold text-cocoa">Order summary</h2>
          <ul className="mt-3 space-y-3">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-cocoa">
                    {item.name}
                  </p>
                  <p className="text-xs text-cocoa/60">
                    {cartDetails[item.id]}
                  </p>
                </div>
                <p className="text-sm font-semibold text-cocoa">
                  {money(item.price)}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-4 space-y-2 border-t border-line pt-3 text-sm text-cocoa">
            <div className="flex justify-between">
              <span className="text-cocoa/70">Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cocoa/70">Standard Shipping</span>
              <span>{money(shipping)}</span>
            </div>
            <div className="flex justify-between pt-1 font-bold">
              <span>Total</span>
              <span>{money(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;