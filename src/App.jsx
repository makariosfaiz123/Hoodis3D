import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedHoodies from "./components/FeaturedHoodies/FeaturedHoodies";
import Hoodie3D from "./components/Hoodie3D/Hoodie3D";
import Footer from "./components/Footer/Footer";
const SMOOTHING = 0.07;

const VIDEO = {
  LEFT: 4.8,
  CENTER: 3.5,
  RIGHT: 2.3,
  UP: 7.0,
  DOWN: 10.0,
};

function App() {
  const videoRef = useRef(null);

  const targetTime = useRef(VIDEO.CENTER);
  const currentTime = useRef(VIDEO.CENTER);

  const animationRef = useRef(null);
  const ready = useRef(false);
  const seeking = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const animate = () => {
      animationRef.current = null;

      if (!ready.current) return;

      if (!seeking.current) {
        const diff =
          targetTime.current -
          currentTime.current;

        if (Math.abs(diff) < 0.001) {
          currentTime.current =
            targetTime.current;

          if (
            Math.abs(
              video.currentTime -
                targetTime.current
            ) > 0.008
          ) {
            video.currentTime =
              targetTime.current;
          }

          return;
        }

        const next =
          currentTime.current +
          diff * SMOOTHING;

        currentTime.current = next;

        if (
          Math.abs(
            video.currentTime - next
          ) > 0.008
        ) {
          video.currentTime = next;
        }
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animationRef.current === null) {
        animationRef.current =
          requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (event) => {
      if (!ready.current) return;

      const x =
        event.clientX / window.innerWidth;

      const y =
        event.clientY / window.innerHeight;

      const dx = x - 0.5;
      const dy = y - 0.5;

      const horizontal = Math.abs(dx);
      const vertical = Math.abs(dy);

      let target;

      if (horizontal > vertical) {
        if (dx < -0.08) {
          target = VIDEO.LEFT;
        } else if (dx > 0.08) {
          target = VIDEO.RIGHT;
        } else {
          target = VIDEO.CENTER;
        }
      } else {
        if (dy < -0.08) {
          target = VIDEO.UP;
        } else if (dy > 0.08) {
          target = VIDEO.DOWN;
        } else {
          target = VIDEO.CENTER;
        }
      }

      targetTime.current = target;

      startAnimation();
    };

    const videoReady = () => {
      if (ready.current) return;

      if (
        !Number.isFinite(video.duration) ||
        video.duration <= 0
      ) {
        return;
      }

      ready.current = true;

      video.pause();

      targetTime.current = 0;
      currentTime.current = 0;
      video.currentTime = 0;
    };

    const handleSeeking = () => {
      seeking.current = true;
    };

    const handleSeeked = () => {
      seeking.current = false;
      startAnimation();
    };

    video.addEventListener(
      "loadedmetadata",
      videoReady
    );

    video.addEventListener(
      "loadeddata",
      videoReady
    );

    video.addEventListener(
      "seeking",
      handleSeeking
    );

    video.addEventListener(
      "seeked",
      handleSeeked
    );

    window.addEventListener(
      "pointermove",
      handleMouseMove
    );

    if (video.readyState >= 1) {
      videoReady();
    }

    return () => {
      video.removeEventListener(
        "loadedmetadata",
        videoReady
      );

      video.removeEventListener(
        "loadeddata",
        videoReady
      );

      video.removeEventListener(
        "seeking",
        handleSeeking
      );

      video.removeEventListener(
        "seeked",
        handleSeeked
      );

      window.removeEventListener(
        "pointermove",
        handleMouseMove
      );

      if (animationRef.current !== null) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#15161b]">

      {/* HERO */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">

        {/* VIDEO */}
        <video
          ref={videoRef}
          src="/videos/new-character.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />

        {/* NAVBAR */}
        <div className="absolute inset-x-0 top-0 z-30">
          <Navbar />
        </div>

        {/* HERO */}
        <div className="absolute inset-0 z-20">
          <Hero />
        </div>

        

      </section>

      <FeaturedHoodies />

      <Hoodie3D />

      <Footer />
    </main>
  );
}

export default App;