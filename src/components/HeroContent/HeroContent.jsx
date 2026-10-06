function HeroContent() {
  return (
    <div className="relative h-full w-full">

      {/* Small badge */}
      <div className="absolute bottom-44 left-6 md:left-10">
        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/40
            px-4
            py-2
            text-[9px]
            font-medium
            uppercase
            tracking-wide
            text-white
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />

          Your personal productivity buddy
        </div>
      </div>

      {/* Main heading */}
      <div
        className="
          absolute
          bottom-[-5px]
          left-6
          max-w-[650px]
          md:left-10
        "
      >
        <h1
          className="
            text-5xl
            font-black
            uppercase
            leading-[0.88]
            tracking-[-0.04em]
            text-white
            sm:text-6xl
            md:text-7xl
            lg:text-[92px]
          "
        >
          Your day just
          <br />
          got a little
          <br />
          easier.
        </h1>
      </div>

      {/* Right text */}
      <div
        className="
          absolute
          bottom-8
          right-6
          flex
          max-w-[280px]
          flex-col
          items-start
          gap-5
          md:right-10
        "
      >
        <p
          className="
            text-sm
            font-medium
            leading-relaxed
            text-white
          "
        >
          Plan your day, stay on track,
          and get things done with a
          buddy that's always by your side.
        </p>

        <button
          className="
            rounded-full
            bg-white
            px-6
            py-3
            text-[10px]
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          MEET YOUR BUDDY
        </button>
      </div>

    </div>
  );
}

export default HeroContent;