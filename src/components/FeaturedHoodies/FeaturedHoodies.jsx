import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "01",
    name: "Cloudy Hoodie",
    price: "$59",
    image: "/images/hoodie-1.png",
  },
  {
    id: "02",
    name: "Dreamy Hoodie",
    price: "$64",
    image: "/images/hoodie-2.png",
  },
  {
    id: "03",
    name: "Chill Hoodie",
    price: "$59",
    image: "/images/hoodie-3.png",
  },
];



function FeaturedHoodies() {
          const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".featured-header", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".featured-card",
        {
          y: 100,
          opacity: 0,
          scale: 0.94,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
  <section
    ref={sectionRef}
    className="relative min-h-screen w-full overflow-hidden bg-[#9FD7E0] px-4 py-8
      sm:px-6 sm:py-8
      md:px-10
      lg:px-14 lg:py-8"
  >
    {/* =====================================
        HEADER
    ====================================== */}

    <div
      className="featured-header
        mx-auto
        mb-8 sm:mb-7
        flex
        max-w-[1500px]
        items-end
        justify-between
        gap-8
      "
    >
      {/* TITLE */}

      <div>
        <div
          className="mb-2 flex
            items-center
            gap-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#111216]
            "
          />

          Featured Collection
        </div>

        <h2
          className="
            text-4xl
            font-black
            uppercase
            leading-[0.82]
            tracking-[-0.06em]

            sm:text-5xl
            md:text-6xl
            lg:text-[clamp(4rem,6vw,6.5rem)]
          "
        >
          Featured
          <br />
          Hoodies.
        </h2>
      </div>

      {/* DESCRIPTION */}

      <p
        className="
          hidden
          max-w-xs
          pb-1
          text-right
          text-xs
          font-semibold
          leading-relaxed
          text-black/55

          md:block
          lg:text-sm
        "
      >
        The pieces made to match your mood,
        your style, and every version of you.
      </p>
    </div>

    {/* =====================================
        PRODUCTS
    ====================================== */}

    <div
      className="
        mx-auto
        grid
        max-w-[1500px]
        grid-cols-1
        items-end
        gap-6
        sm:grid-cols-2
        md:gap-5
        lg:grid-cols-3
        lg:gap-7
      "
    >
      {products.map((product, index) => (
        <article
          key={product.id}
          className="featured-card
            group
            relative
          "
        >
          {/* IMAGE */}

          <div
            className="
              relative
              aspect-[1/1]
              overflow-hidden
              rounded-[1.5rem]
              bg-white/20

              lg:rounded-[2rem]
            "
          >
            {/* NUMBER */}

            <span
              className="
                absolute
                left-4
                top-4
                z-10
                text-[10px]
                font-bold
                tracking-[0.2em]
                text-black/50

                lg:left-5
                lg:top-5
              "
            >
              {product.id}
            </span>

            {/* IMAGE */}

            <img
              src={product.image}
              alt={product.name}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* HOVER BUTTON */}

            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                translate-y-3
                opacity-0
                transition-all
                duration-500

                group-hover:translate-y-0
                group-hover:opacity-100

                lg:bottom-5
                lg:left-5
                lg:right-5
              "
            >
              <button
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  bg-white
                  px-4
                  py-3
                  text-[10px]
                  font-black
                  uppercase
                  tracking-wide
                  text-[#111216]
                  shadow-xl

                  lg:px-5
                  lg:py-3.5
                  lg:text-xs
                "
              >
                <span>
                  Shop this hoodie
                </span>

                <span className="text-base">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* PRODUCT INFO */}

          <div
            className="
              mt-3
              flex
              items-start
              justify-between
              gap-3
              sm:gap-4
              lg:mt-4
            "
          >
            <div>
              <p
                className="
                  mb-1
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-black/40

                  lg:text-[9px]
                "
              >
                Hoodie / {product.id}
              </p>

              <h3
                className="
                  text-sm
                  font-black
                  uppercase
                  tracking-tight

                  lg:text-base
                "
              >
                {product.name}
              </h3>
            </div>

            <span
              className="
                pt-0.5
                text-xs
                font-bold

                lg:text-sm
              "
            >
              {product.price}
            </span>
          </div>
        </article>
      ))}
    </div>

    {/* =====================================
        BOTTOM
    ====================================== */}

    <div
      className="
        mx-auto
        mt-6
        flex
        max-w-[1500px]
        flex-col
        items-start
        gap-4
        border-t
        border-black/15
        pt-4

        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <span
        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-black/40
        "
      >
        New Season / 2026
      </span>

      <button
        className="
          group
          flex
          items-center
          gap-3
          text-[10px]
          font-black
          uppercase
          lg:text-xs
        "
      >
        View all hoodies

        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-[#111216]
            text-sm
            text-white
            transition-transform
            duration-300
            group-hover:translate-x-1.5
          "
        >
          →
        </span>
      </button>
    </div>
  </section>
);
}

export default FeaturedHoodies;