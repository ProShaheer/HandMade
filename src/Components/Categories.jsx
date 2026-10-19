// useState()
// useEffect()



// useMemo
// useCallback
// useReducer
// useContext

// Redux toolkit
// Zustand

const categories = [
  { name: "Crochet", image: "/images/crochet.jpg" },
  { name: "Textiles", image: "/images/textiles.jpg"},
  { name: "Accessories", image: "/images/accessories.jpg" },
  { name: "Plushies", image: "/images/plushies.jpg" },
  { name: "Home Decor", image: "/images/homedecor.jpg"},
  
];

function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-6 md:px-10 py-10">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs lg:text-sm font-medium uppercase tracking-wide text-[#B0713F]">
            Shop by craft
          </p>
          <h2 className="mt-1 text-2xl font-bold text-cocoa md:text-3xl">
            Find your favorite makers
          </h2>
        </div>
        <a href="#" className="text-sm lg:text-base text-cocoa">
          Shop all categories
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {categories.map((item) => (
          <a
            key={item.name}
            href="#"
            className="overflow-hidden rounded-xl border-2 border-[#E8E0D7] bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="aspect-5/6 w-full object-cover"
            />
            <p className="py-3 text-center text-sm lg:text-base font-medium text-cocoa">
              {item.name}
            </p>
         
          </a>
          
        ))}
      </div>
    </section>
  );
}

export default Categories;
