import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { products } from "../data/products";

const PRODUCTION_DAYS = 21;

const details = [
  { label: "Materials", text: "[Materials provided by maker]" },
  { label: "Dimensions", text: "[Approximate dimensions provided by maker]" },
  { label: "Care Instructions", text: "[Care instructions provided by maker]" },
];

const reviews = [
  {
    tag: "Standard Construction",
    text: "[Delivered-order review text and optional customer photos]",
    photos: 2,
  },
  {
    tag: "Child-Safety Construction",
    text: "[Delivered-order review text]",
    photos: 0,
  },
];

const buttonClass =
  "w-full rounded-lg bg-[#7A5A45] py-3 text-center text-sm font-semibold text-white transition hover:opacity-90 md:bg-[#6B4E3A]";

function ProductView({ item }) {
  const price = `$${item.price.toFixed(2)}`;

  const [option, setOption] = useState("safety");
  const [dateType, setDateType] = useState("text");
  const [date, setDate] = useState("");
  const [timeline, setTimeline] = useState(null);
  const [zip, setZip] = useState("");
  const [zipOk, setZipOk] = useState(true);
  const [coords, setCoords] = useState(null);
  const [place, setPlace] = useState("");
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState("");

  const checkTimeline = () => {
    if (!date) {
      setTimeline({ ok: false, text: "Please choose a date first." });
      return;
    }
    const earliest = new Date();
    earliest.setDate(earliest.getDate() + PRODUCTION_DAYS);
    earliest.setHours(0, 0, 0, 0);
    const wanted = new Date(`${date}T00:00:00`);
    const earliestText = earliest.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    if (wanted >= earliest) {
      setTimeline({
        ok: true,
        text: `Good news, this date works. Production takes about ${PRODUCTION_DAYS} days.`,
      });
    } else {
      setTimeline({
        ok: false,
        text: `That date is too soon. The earliest estimate is ${earliestText}.`,
      });
    }
  };

  const verifyZip = () => setZipOk(zip.trim().length >= 4);

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocError("Your browser does not support location.");
      return;
    }

    setLocating(true);
    setLocError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
          );
          const data = await res.json();
          setPlace(
            data.display_name ||
              `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,
          );
          if (data.address && data.address.postcode) {
            setZip(data.address.postcode);
            setZipOk(true);
          }
        } catch {
          setPlace(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        }

        setLocating(false);
      },
      (error) => {
        setLocating(false);
        setLocError(
          error.code === 1
            ? "Location permission was denied. Allow it in the address bar and try again."
            : "Could not find your location. Please try again.",
        );
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  const mapSrc = coords
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${coords.longitude - 0.004}%2C${coords.latitude - 0.002}%2C${coords.longitude + 0.004}%2C${coords.latitude + 0.002}&layer=mapnik&marker=${coords.latitude}%2C${coords.longitude}`
    : "";

  const optionBox = (active) =>
    `flex w-full items-start gap-3 rounded-lg border-2 bg-white px-4 py-3 text-left transition md:items-center md:gap-[1.45cqw] md:px-[2.03cqw] md:py-[1.45cqw] lg:border-[3px] ${
      active ? "border-[#6B4E3A]" : "border-[#E8E0D7] hover:border-[#6B4E3A]/50"
    }`;

  const optionDot = (active) =>
    `mt-1 h-3 w-3 shrink-0 rounded-full md:h-[2.03cqw] md:w-[2.03cqw] ${active ? "bg-[#6B4E3A]" : "border border-cocoa/30"}`;

  return (
    <main className="mx-auto max-w-6xl px-6 py-6 md:px-10 md:py-8">
      <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] md:grid-rows-[auto_1fr] md:items-start md:gap-x-[4.65%] md:gap-y-0 md:[container-type:inline-size]">
        <div className="md:col-start-1 md:row-start-1">
          <img
            src={item.image}
            alt={item.name}
            className="aspect-4/3 w-full rounded-xl object-cover md:aspect-[8/7]"
          />
          <div className="mt-2 grid grid-cols-4 gap-2 md:mt-[2.33cqw] md:grid-cols-3 md:gap-[1.74cqw]">
            {[1, 2, 3, 4].map((n) => (
              <img
                key={n}
                src={item.image}
                alt={`${item.name} view ${n}`}
                className={`aspect-4/3 w-full rounded-lg object-cover md:aspect-[7/5] ${n === 4 ? "md:hidden" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="md:col-start-2 md:row-span-2 md:row-start-1">
          <p className="text-xs font-medium uppercase tracking-wide text-brand md:tracking-normal">
            {item.maker}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-cocoa md:mt-1.5 md:max-w-[10rem] md:text-3xl">
            {item.name}
          </h1>
          <p className="mt-2 text-xl font-semibold text-cocoa md:mt-1.5">
            {price}
          </p>

          <div className="mt-5 rounded-lg bg-[#EBE1D5] p-4 md:mt-[3.2cqw] md:p-[2.03cqw]">
            <p className="text-sm font-semibold text-cocoa md:text-[2.03cqw]">
              <span className="md:hidden">Produced after you order</span>
              <span className="hidden md:inline">
                Made to Order Production Commitment
              </span>
            </p>
            <p className="mt-1 text-sm text-cocoa/70 md:mt-[0.58cqw] md:text-[1.74cqw] md:leading-normal">
              <span className="md:hidden">
                Handmade after ordering. Queue takes 2-3 weeks. Slow craft means
                zero waste.
              </span>
              <span className="hidden md:inline">
                Produced sustainably after purchase. Expect 2-3 weeks slow-craft
                assembly.
              </span>
            </p>
          </div>

          <p className="mt-5 text-sm font-semibold text-cocoa md:mt-[2.33cqw] md:text-[2.03cqw]">
            Construction Option
          </p>

          <div className="mt-2 space-y-2 md:mt-[1.16cqw]">
            <button
              type="button"
              onClick={() => setOption("standard")}
              className={`${optionBox(option === "standard")} md:hidden`}
            >
              <span className={optionDot(option === "standard")} />
              <span>
                <span className="block text-sm text-cocoa">
                  Standard Decorative Weave
                </span>
                <span className="mt-0.5 block text-xs text-cocoa/60">
                  Default loose, heavy weave ideal for adult spaces and styling.
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setOption("safety")}
              className={optionBox(option === "safety")}
            >
              <span className={`${optionDot(option === "safety")} md:mt-0`} />
              <span className="flex-1 text-sm text-cocoa md:text-[1.89cqw] md:leading-[2.33cqw]">
                Child-Safety Reinforced Option
              </span>
              <span className="shrink-0 rounded bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700 md:hidden">
                Recommended for Ages 0-3
              </span>
            </button>
          </div>

          <div className="mt-4 rounded-lg border border-[#E8E0D7] bg-white p-4 md:hidden">
            <p className="text-sm font-semibold text-cocoa">
              Child-safety information
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cocoa/60">
              [Child-safety construction details and standard age range provided
              by maker]
            </p>
            <p className="mt-2 text-xs font-medium text-brand">
              [Material and supervision disclosures provided by maker]
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-[#E8E0D7] bg-white p-4 md:mt-[3.49cqw] md:border-[1.5px] md:p-[2.03cqw] lg:border-[2.5px]">
            <p className="text-sm font-semibold text-cocoa md:text-[1.89cqw] md:leading-[2.33cqw]">
              <span className="md:hidden">Need this for an occasion?</span>
              <span className="hidden md:inline">
                Need this for a specific occasion?
              </span>
            </p>
            <div className="mt-3 flex gap-2 md:mt-[1.16cqw] md:gap-[1.45cqw]">
              <input
                type={dateType}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onFocus={() => setDateType("date")}
                onBlur={() => {
                  if (!date) setDateType("text");
                }}
                placeholder="Enter date..."
                className="w-full rounded-md border border-[#E8E0D7] bg-cream px-3 py-2 text-sm text-cocoa outline-none placeholder:text-cocoa/50 focus:border-brand md:h-[4.36cqw] md:border-[1.5px] md:px-[1.45cqw] md:py-0 md:text-[1.6cqw] lg:border-[2.5px]"
              />
              <button
                type="button"
                onClick={checkTimeline}
                className="whitespace-nowrap rounded-md bg-[#7A5A45] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 md:h-[4.36cqw] md:bg-[#6B4E3A] md:px-[2.03cqw] md:py-0 md:text-[1.6cqw] md:font-semibold"
              >
                <span className="md:hidden">Verify</span>
                <span className="hidden md:inline">Check Timeline</span>
              </button>
            </div>

            {timeline && (
              <p
                className={`mt-3 text-xs font-medium md:mt-[1.74cqw] md:text-[1.74cqw] ${timeline.ok ? "text-green-700" : "text-red-700"}`}
              >
                {timeline.text}
              </p>
            )}

            <p className="mt-3 flex gap-2 text-xs text-cocoa/60 md:hidden">
              <span className="text-brand">▲</span>
              Made-to-Order timeline requires approximately {
                PRODUCTION_DAYS
              }{" "}
              days for production before transit.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-[#E8E0D7] bg-white p-4 md:hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-cocoa">
                Delivery Serviceability
              </p>
              <button
                type="button"
                onClick={detectLocation}
                disabled={locating}
                className="flex items-center gap-1 text-xs font-medium text-cocoa transition hover:text-brand disabled:opacity-60"
              >
                <MapPin size={12} />
                {locating ? "Detecting..." : "Detect Location"}
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter Postal / ZIP Code..."
                className="w-full rounded-md border border-[#E8E0D7] bg-cream px-3 py-2 text-sm text-cocoa outline-none placeholder:text-cocoa/50 focus:border-brand"
              />
              <button
                type="button"
                onClick={verifyZip}
                className="rounded-md border border-[#7A5A45] bg-white px-4 py-2 text-sm font-medium text-cocoa transition hover:bg-cream"
              >
                Verify
              </button>
            </div>

            {locError && (
              <p className="mt-3 text-xs font-medium text-red-700">
                {locError}
              </p>
            )}

            {coords && (
              <div className="mt-3">
                <p className="text-xs text-cocoa/60">Your location</p>
                <p className="mt-0.5 text-sm font-medium text-cocoa">{place}</p>
                <iframe
                  title="Your location on the map"
                  src={mapSrc}
                  loading="lazy"
                  className="mt-3 h-40 w-full rounded-lg border border-[#E8E0D7]"
                />
                <a
                  href={`https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs font-medium text-brand"
                >
                  Open in Maps
                </a>
              </div>
            )}

            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between text-cocoa">
                <span className="text-cocoa/60">Standard Courier Ground:</span>
                <span className="font-medium">$12.00</span>
              </div>
              <div className="flex items-center justify-between text-cocoa">
                <span className="text-cocoa/60">Serviceability</span>
                {zipOk ? (
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-medium text-green-700">
                    Eligible
                  </span>
                ) : (
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-medium text-red-700">
                    Enter a valid code
                  </span>
                )}
              </div>
            </div>
          </div>

          <Link
            to="/cart"
            className={`mt-4 hidden items-center justify-center md:mt-[2.91cqw] md:flex md:h-[6.83cqw] md:py-0 md:text-[1.89cqw] ${buttonClass}`}
          >
            Commission This Piece ({price})
          </Link>

          <div className="mt-6 space-y-4 md:hidden">
            {details.map((row) => (
              <div key={row.label}>
                <p className="text-sm font-semibold text-cocoa">{row.label}</p>
                <p className="mt-1 text-sm text-cocoa/60">{row.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#E8E0D7] bg-white p-4 md:col-start-1 md:row-start-2 md:mt-[2.33cqw] md:border-[1.5px] md:p-[2.33cqw] lg:border-[2.5px]">
          <p className="text-xs font-medium uppercase tracking-wide text-brand md:text-[1.6cqw] md:tracking-normal">
            <span className="md:hidden">The artisan</span>
            <span className="hidden md:inline">
              The artisan behind the craft
            </span>
          </p>
          <div className="mt-3 flex items-center gap-3 md:mt-[1.45cqw] md:gap-[1.74cqw]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white md:h-[4.65cqw] md:w-[4.65cqw] md:text-[2.03cqw]">
              {item.maker[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-cocoa md:text-[1.89cqw]">
                {item.maker}
              </p>
              <p className="text-xs text-cocoa/60 md:text-[1.6cqw]">
                Portland, Oregon
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-cocoa/70 md:hidden">
            Every piece on Handmade is created by an independent artisan or
            small craft business. No factories, no mass production — just
            skilled hands, quality materials, and a story behind each stitch.
          </p>
        </div>
      </div>

      <div className="mt-8 md:hidden">
        <h2 className="text-xl font-bold text-cocoa">
          Delivered-Order Reviews
        </h2>

        <div className="mt-4 divide-y divide-[#E8E0D7]">
          {reviews.map((review) => (
            <div key={review.tag} className="py-4 first:pt-0">
              <p className="text-sm font-semibold text-cocoa">
                Verified delivered customer
              </p>
              <p className="mt-0.5 text-xs text-cocoa/60">[Review date]</p>
              <span className="mt-2 inline-block rounded bg-[#F1E9DD] px-2 py-1 text-[11px] text-cocoa/70">
                {review.tag}
              </span>
              <p className="mt-2 text-sm text-cocoa/70">{review.text}</p>
              {review.photos > 0 && (
                <div className="mt-3 flex gap-2">
                  {Array.from({ length: review.photos }).map((_, index) => (
                    <img
                      key={index}
                      src={item.image}
                      alt="Customer photo"
                      className="h-20 w-24 rounded-md object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link to="/cart" className={`mt-2 block ${buttonClass}`}>
          Add to Cart ({price})
        </Link>
      </div>
    </main>
  );
}

function Product() {
  const { id } = useParams();
  const item = products.find((p) => p.id === Number(id)) || products[0];

  return <ProductView key={item.id} item={item} />;
}

export default Product;
