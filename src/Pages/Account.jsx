import { Link } from "react-router-dom";

function Account() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="text-2xl font-bold text-cocoa">My account</h1>
      <p className="mt-2 text-sm text-cocoa/70">
        Sign in to see your orders and saved items.
      </p>
      <Link
        to="/shop"
        className="mt-6 inline-block rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
      >
        Back to shop
      </Link>
    </main>
  );
}

export default Account;