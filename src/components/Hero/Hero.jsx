function Hero() {
  return (
    <section className="relative h-full w-full">

      {/* ==============================
          LEFT CONTENT
      =============================== */}
      <div className="absolute bottom-10 left-8 z-20 max-w-[650px]">

        {/* Small Label */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-white" />
          Your new favorite hoodie
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
          Wear
          <br />
          Your
          <br />
          Vibe.
        </h1>

      </div>

      {/* ==============================
          RIGHT CONTENT
      =============================== */}
      <div className="absolute bottom-10 right-8 z-20 max-w-[300px] text-right">

        <p className="mb-6 text-sm font-medium leading-relaxed text-white/90 md:text-base">
          Hoodies made for your mood,
          your style, and every version
          of you.
        </p>

        <button
          type="button"
          className="
            rounded-full
            bg-white
            px-7
            py-3
            text-sm
            font-bold
            uppercase
            tracking-wide
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:bg-black
            hover:text-white
          "
        >
          Shop Now
        </button>

      </div>

      {/* ==============================
          SCROLL INDICATOR
      =============================== */}
      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex">

        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="h-8 w-px bg-white/50" />

      </div>

    </section>
  );
}

export default Hero;