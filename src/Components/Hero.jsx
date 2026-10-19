import { Link } from "react-router-dom";
import heroImg from "../assets/icons/Hero.jpg";

function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Knitted blanket on a wooden chair"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="mx-auto flex min-h-75 max-w-6xl flex-col items-start justify-center px-6 py-10 text-left md:min-h-120 md:items-center md:px-10 md:py-16 md:text-center lg:min-h-144">
        <span className="rounded-full border-1 border-1-white/40 px-3 py-1 text-[10px] uppercase tracking-wide text-white md:px-4 md:text-xs lg:text-sm">
          Made by independent makers
        </span>

        <h1 className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-white md:mt-6 md:max-w-3xl md:text-4xl lg:max-w-4xl lg:text-[2.75rem]">
          Beautiful things, made by hand —{" "}
          <br className="hidden md:block" />
          and made for you.
        </h1>

        <p className="mt-3 max-w-lg text-sm lg:text-base text-white/80 md:mt-4 md:text-base">
          Discover ready-to-ship pieces or commission custom goods from
          talented independent artisans.
        </p>

        <div className="mt-5 flex gap-3 md:mt-8">
          <Link
            to="/shop"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm lg:text-base font-medium text-white transition hover:opacity-90 md:px-6 md:py-3"
          >
            Explore Collection
          </Link>
          <Link
            to="/shop?status=made-to-order"
            className="hidden rounded-lg border-1 border-1-white/70 px-6 py-3 text-sm lg:text-base font-medium text-white transition hover:bg-white/10 sm:block"
          >
            Discover Made-to-Order
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;