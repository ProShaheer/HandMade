import { useState } from "react";
import { Link } from "react-router-dom";

const fields = [
  { name: "name", label: "Your name", type: "text", placeholder: "Sarah Mitchell" },
  { name: "email", label: "Email", type: "email", placeholder: "sarah.m@example.com" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <main className="mx-auto max-w-xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-cocoa">Message sent</h1>
        <p className="mt-2 text-sm lg:text-base text-cocoa/70">
          Thank you for reaching out. We will reply within 2 business days.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-lg bg-[#7A5A45] px-6 py-3 text-sm lg:text-base font-semibold text-white transition hover:opacity-90"
        >
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <h1 className="text-2xl font-bold text-cocoa">Contact us</h1>
      <p className="mt-1 text-sm lg:text-base text-cocoa/70">
        Questions about an order or a custom piece? Send us a message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4 rounded-xl border-1 border-1-[#E8E0D7] bg-white p-5"
      >
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="text-xs lg:text-sm font-medium text-cocoa/70">
              {field.label}
            </span>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
              className="mt-1 w-full rounded-md border-1 border-1-[#E8E0D7] bg-cream px-3 py-2 text-sm lg:text-base text-cocoa outline-none placeholder:text-cocoa/40 focus:border-1-brand"
            />
          </label>
        ))}

        <label className="block">
          <span className="text-xs lg:text-sm font-medium text-cocoa/70">Message</span>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="How can we help?"
            className="mt-1 w-full rounded-md border-1 border-1-[#E8E0D7] bg-cream px-3 py-2 text-sm lg:text-base text-cocoa outline-none placeholder:text-cocoa/40 focus:border-1-brand"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#7A5A45] py-3 text-sm lg:text-base font-semibold text-white transition hover:opacity-90"
        >
          Send message
        </button>
      </form>
    </main>
  );
}

export default Contact;