function Navbar() {
  return (
    <nav className="w-full px-4 py-4 sm:px-6 md:px-10 lg:px-12">
      <div
        className="
          flex
          h-[58px]
          items-center
          justify-between
          rounded-[20px]
          border
          border-white/35
          bg-white/[0.04]
          px-5
          backdrop-blur-md
          sm:h-[62px]
          sm:px-6
          lg:px-7
        "
      >

        {/* =========================
            LOGO
        ========================== */}
        <a
          href="#"
          className="
            flex
            items-center
            gap-3
            text-white
            transition-opacity
            duration-300
            hover:opacity-70
          "
        >
          {/* Cloud Logo */}
          <svg
            viewBox="0 0 40 32"
            fill="none"
            className="h-7 w-8 sm:h-8 sm:w-9"
          >
            <path
              d="M11 27H29C33.4183 27 37 23.4183 37 19C37 14.5817 33.4183 11 29 11C28.3938 11 27.8008 11.0675 27.2295 11.1961C25.6617 6.67116 21.3502 3.5 16.3 3.5C10.2013 3.5 5.23147 7.97715 4.46163 13.8658C1.86174 14.9312 0 17.4884 0 20.5C0 24.0899 2.91015 27 6.5 27H11Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span
            className="
              text-[15px]
              font-medium
              uppercase
              tracking-[0.32em]
              sm:text-base
            "
          >
            Cloudy
          </span>
        </a>


        {/* =========================
            NAV LINKS
        ========================== */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">

  <a
    href="#home"
    className="
      group
      relative
      py-2
      text-[10px]
      font-medium
      uppercase
      tracking-[0.18em]
      text-white
    "
  >
    Home

    <span
      className="
        absolute
        bottom-0
        left-0
        h-px
        w-full
        origin-left
        scale-x-0
        bg-white
        transition-transform
        duration-300
        group-hover:scale-x-100
      "
    />
  </a>

  <a
    href="#hoodies"
    className="
      group
      relative
      py-2
      text-[10px]
      font-medium
      uppercase
      tracking-[0.18em]
      text-white
    "
  >
    Hoodies

    <span
      className="
        absolute
        bottom-0
        left-0
        h-px
        w-full
        origin-left
        scale-x-0
        bg-white
        transition-transform
        duration-300
        group-hover:scale-x-100
      "
    />
  </a>

  <a
    href="#vibes"
    className="
      group
      relative
      py-2
      text-[10px]
      font-medium
      uppercase
      tracking-[0.18em]
      text-white
    "
  >
    Vibes

    <span
      className="
        absolute
        bottom-0
        left-0
        h-px
        w-full
        origin-left
        scale-x-0
        bg-white
        transition-transform
        duration-300
        group-hover:scale-x-100
      "
    />
  </a>

  <a
    href="#collection"
    className="
      group
      relative
      py-2
      text-[10px]
      font-medium
      uppercase
      tracking-[0.18em]
      text-white
    "
  >
    Collection

    <span
      className="
        absolute
        bottom-0
        left-0
        h-px
        w-full
        origin-left
        scale-x-0
        bg-white
        transition-transform
        duration-300
        group-hover:scale-x-100
      "
    />
  </a>

</div>


        {/* =========================
            RIGHT SIDE
        ========================== */}
        <div className="flex items-center gap-4 sm:gap-5">

          {/* Search */}
          <button
            aria-label="Search"
            className="
              hidden
              text-white
              transition-opacity
              duration-300
              hover:opacity-60
              md:block
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>


          {/* Cart */}
          <button
            aria-label="Shopping cart"
            className="
              relative
              text-white
              transition-opacity
              duration-300
              hover:opacity-60
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
            >
              <path
                d="M3 4H5L7.2 15.2C7.43 16.35 8.44 17.18 9.61 17.18H17.7C18.77 17.18 19.7 16.47 20.02 15.45L22 9H6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="9.5"
                cy="20"
                r="1.2"
                fill="currentColor"
              />
              <circle
                cx="18"
                cy="20"
                r="1.2"
                fill="currentColor"
              />
            </svg>

            {/* Cart Count */}
            <span
              className="
                absolute
                -right-2
                -top-2
                flex
                h-4
                min-w-4
                items-center
                justify-center
                rounded-full
                bg-black
                px-1
                text-[8px]
                font-bold
                text-white
              "
            >
              3
            </span>
          </button>


          {/* Shop Now */}
          <a
            href="#hoodies"
            className="
              hidden
              items-center
              gap-4
              rounded-full
              bg-black
              px-5
              py-5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:bg-[#111216]
              sm:flex
              lg:px-6
            "
          >
            Shop Now

            <span className="text-sm leading-none">
              →
            </span>
          </a>


          {/* Mobile Menu */}
          <button
            aria-label="Menu"
            className="
              flex
              text-white
              transition-opacity
              duration-300
              hover:opacity-60
              md:hidden
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
            >
              <path
                d="M5 7H19"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M5 17H19"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;