export default function Hero() {
  return (
    <div className="lg:min-h-[560px] relative px-4 sm:px-10">
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black to-transparent pointer-events-none"
        style={{ zIndex: "1" }}
      ></div>

      {/* Banner image */}
      <div className="absolute inset-0 bg-banner-image bg-cover bg-center"></div>

      {/* Content */}
      <div className="max-w-7xl w-full mx-auto py-16 relative z-10">
        <div className="grid lg:grid-cols-2 justify-center items-center gap-10">
          <div>
            <h1 className="md:text-5xl text-4xl font-bold mb-6 md:!leading-[55px] text-white">
              Find your next stay
            </h1>
            <p className="text-base leading-relaxed text-white">
              Search deals on hotels, homes, and much more...
            </p>
          </div>
          <div className="max-lg:mt-12 h-full relative">
            <img
              src="/images/hero.jpg"
              alt="banner img"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
