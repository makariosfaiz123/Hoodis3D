import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const shopLinks = [
  "All Hoodies",
  "New Arrivals",
  "Best Sellers",
  "Collections",
  "Customize",
];

const helpLinks = [
  "Track Order",
  "Shipping Info",
  "Returns & Exchanges",
  "Size Guide",
  "FAQ",
];

const companyLinks = [
  "About Us",
  "Our Story",
  "Sustainability",
  "Careers",
  "Contact",
];

/* ================= ICONS ================= */

const MailIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m5 7 7 5.5L19 7" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="m4.5 11 6.5-6.5H17l2.5 2.5v6L13 19.5a2 2 0 0 1-2.8 0l-5.7-5.7a2 2 0 0 1 0-2.8Z" />
    <circle cx="14.5" cy="9" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3c.7 5.3 2.7 8.3 8 9-5.3.7-7.3 3.7-8 9-.7-5.3-2.7-8.3-8-9 5.3-.7 7.3-3.7 8-9Z" />
  </svg>
);

const GiftIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="4" y="10" width="16" height="10" rx="1.5" />
    <path d="M3.5 10h17M12 10v10M12 10H8.5a2 2 0 1 1 2-2c0 1 1.5 2 1.5 2Zm0 0h3.5a2 2 0 1 0-2-2c0 1-1.5 2-1.5 2Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.3" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M14.2 4v10.1a4.1 4.1 0 1 1-3.1-4v3.1a1.3 1.3 0 1 0 0-2.5V4h3.1c.3 1.7 1.3 2.8 2.9 3.3V10c-1.1-.2-2.1-.7-2.9-1.4V14" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
    <path d="M10 9.5 15 12l-5 2.5z" fill="currentColor" stroke="none" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M12 4.2a7.8 7.8 0 0 0-2.8 15.1c-.1-1.3 0-2.8.3-4l1-4.1s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.4-.3 1 .5 1.8 1.5 1.8 1.8 0 3.1-1.9 3.1-4.7 0-2.5-1.8-4.3-4.4-4.3-3 0-4.8 2.2-4.8 4.6 0 .9.3 1.9.7 2.4.1.1.1.2.1.4l-.3 1.1c-.1.4-.4.5-.8.3-1.3-.6-2.1-2.5-2.1-4 0-3.2 2.3-6.2 6.7-6.2 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 2-1.2 2.7A7.8 7.8 0 0 0 12 19.8a7.8 7.8 0 0 0 0-15.6Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 5.5 18 18.5M18 5.5 6 18.5" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    className={`footer-chevron ${open ? "is-open" : ""}`}
    viewBox="0 0 24 24"
  >
    <path d="m5 9 7 7 7-7" />
  </svg>
);

/* ================= FOOTER ================= */

export default function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray(".footer-reveal");
      const benefits = gsap.utils.toArray(".footer-benefit");
      const columns = gsap.utils.toArray(".footer-column");
      const bottomItems = gsap.utils.toArray(".footer-bottom-reveal");

      gsap.set(
        [...revealItems, ...benefits, ...columns, ...bottomItems],
        {
          opacity: 0,
          y: 35,
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(revealItems, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      })
        .to(
          benefits,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .to(
          columns,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.15"
        )
        .to(
          bottomItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.15"
        );

      /* Social hover */
      gsap.utils.toArray(".footer-social").forEach((item) => {
        const icon = item.querySelector("svg");

        const enter = () => {
          gsap.to(item, {
            y: -5,
            scale: 1.08,
            duration: 0.25,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 8,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);

        item._cleanup = () => {
          item.removeEventListener("mouseenter", enter);
          item.removeEventListener("mouseleave", leave);
        };
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-background" />

      <div className="footer-content">

        {/* ================= NEWSLETTER ================= */}

        <section className="footer-newsletter">
          <div className="footer-newsletter-content">

            <div className="footer-badge footer-reveal">
              <span className="footer-badge-dot" />
              JOIN THE CREW
            </div>

            <h2 className="footer-title footer-reveal">
              JOIN THE <span>CREW.</span>
            </h2>

            <p className="footer-description footer-reveal">
              Be the first to know about new drops, exclusive
              <br className="desktop-break" />
              collections, and special offers. No spam, just good vibes.
            </p>

            <form
              className="footer-subscribe footer-reveal"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="footer-input-wrapper">
                <MailIcon />

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <button type="submit">
                SUBSCRIBE
                <ArrowIcon />
              </button>
            </form>

            <div className="footer-benefits">

              <div className="footer-benefit">
                <TagIcon />
                <span>Early access</span>
              </div>

              <div className="footer-benefit">
                <SparkleIcon />
                <span>Exclusive drops</span>
              </div>

              <div className="footer-benefit">
                <GiftIcon />
                <span>Special offers</span>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MAIN FOOTER ================= */}

        <section className="footer-main">

          {/* BRAND */}

          <div className="footer-brand footer-column">

            <div className="footer-logo">
              BUDDY<span>24.</span>
            </div>

            <p>
              Hoodies made for your mood,
              <br />
              your style, and every version of you.
            </p>

            <div className="footer-socials">

              <a href="#" className="footer-social">
                <InstagramIcon />
              </a>

              <a href="#" className="footer-social">
                <TikTokIcon />
              </a>

              <a href="#" className="footer-social">
                <YoutubeIcon />
              </a>

              <a href="#" className="footer-social">
                <PinterestIcon />
              </a>

              <a href="#" className="footer-social">
                <XIcon />
              </a>

            </div>
          </div>

          {/* DESKTOP LINKS */}

          <FooterColumn title="SHOP" links={shopLinks} />
          <FooterColumn title="HELP" links={helpLinks} />
          <FooterColumn title="COMPANY" links={companyLinks} />

          {/* MORE */}

          <div className="footer-more footer-column">
            <span>MORE</span>
            <span>THAN</span>
            <span>HOODIES</span>

            <div className="footer-more-line" />
          </div>

          {/* MOBILE ACCORDIONS */}

          <div className="footer-mobile-accordions">

            <MobileAccordion title="SHOP" links={shopLinks} />

            <MobileAccordion title="HELP" links={helpLinks} />

            <MobileAccordion title="COMPANY" links={companyLinks} />

          </div>

        </section>

        {/* ================= BOTTOM ================= */}

        <section className="footer-bottom">

          <p className="footer-bottom-reveal">
            © 2026 BUDDY24. All rights reserved.
          </p>

          <nav className="footer-legal footer-bottom-reveal">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">Cookies</a>
          </nav>

        </section>

      </div>
    </footer>
  );
}

/* ================= DESKTOP COLUMN ================= */

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column footer-links desktop-footer-column">

      <h3>{title}</h3>

      <nav>
        {links.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </nav>

    </div>
  );
}

/* ================= MOBILE ACCORDION ================= */

function MobileAccordion({ title, links }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    const content = contentRef.current;

    if (!content) return;

    if (open) {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    } else {
      gsap.set(content, {
        height: "auto",
      });

      const height = content.offsetHeight;

      gsap.fromTo(
        content,
        {
          height: 0,
          opacity: 0,
        },
        {
          height,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }

    setOpen(!open);
  };

  return (
    <div className="footer-mobile-accordion">

      <button
        className="footer-accordion-header"
        onClick={toggleAccordion}
        type="button"
      >
        <span>{title}</span>

        <ChevronIcon open={open} />
      </button>

      <div
        ref={contentRef}
        className="footer-accordion-content"
      >
        <nav>
          {links.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </div>

    </div>
  );
}