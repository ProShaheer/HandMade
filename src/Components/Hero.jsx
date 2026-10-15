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

      <div className="mx-auto flex min-h-[clamp(480px,calc(100vh-5rem),820px)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <span className="rounded-full border border-white/40 px-4 py-1 text-xs uppercase tracking-wide text-white">
          Made by independent makers
        </span>

        <h1 className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
          Beautiful things, made by hand — and made for you.
        </h1>

        <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">
          Discover ready-to-ship pieces or commission custom goods from
          talented independent artisans.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white">
            Explore Collection
          </button>
          <button className="rounded-lg border border-white/70 px-6 py-3 text-sm font-medium text-white">
            Discover Made-to-Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;