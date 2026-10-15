import { Link } from "react-router-dom";

const steps = [
  { label: "Confirmed", done: true },
  { label: "Assembling", done: true },
  { label: "Shipped", done: false },
];

function Account() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-6 md:py-10">
      <h1 className="text-2xl font-bold text-cocoa">Sarah Mitchell</h1>
      <p className="mt-1 text-sm text-cocoa/60">sarah.m@example.com</p>

      {/* Delivery warning */}
      <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4">
        <p className="text-sm font-semibold text-red-800">
          Delivery Target Approaching
        </p>
        <p className="mt-1 text-xs leading-relaxed text-red-700">
          Your custom throw timeline closely matches your requested target
          date of Feb 14. Artisan production is currently in progress.
        </p>
        <Link
          to="/"
          className="mt-3 inline-block text-xs font-semibold text-cocoa transition hover:text-brand"
        >
          Direct message the workshop
        </Link>
      </div>

      <h2 className="mt-8 text-lg font-bold text-cocoa">Your Bag & Orders</h2>

      {/* Order card */}
      <div className="mt-3 rounded-xl border border-line bg-white p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-cocoa">
              ORDER #HM-2026-9481
            </p>
            <p className="mt-0.5 text-xs text-cocoa/60">
              MTO • Placed Jan 15, 2026
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-[#EBE1D5] px-3 py-1 text-[11px] font-medium text-cocoa">
            In Production
          </span>
        </div>

        {/* Progress */}
        <div className="mt-4 border-t border-line pt-4">
          <div className="relative">
            <span className="absolute left-[16.66%] right-[16.66%] top-5px h-px bg-line" />
            <ol className="relative grid grid-cols-3">
              {steps.map((step) => (
                <li
                  key={step.label}
                  className="flex flex-col items-center gap-2"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full border ${
                      step.done
                        ? "border-[#7A5A45] bg-[#7A5A45]"
                        : "border-cocoa/30 bg-white"
                    }`}
                  />
                  <span className="text-[11px] text-cocoa/70">
                    {step.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Account;