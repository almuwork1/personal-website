import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroAssets } from "../assets/hero.js";

gsap.registerPlugin(ScrollTrigger);

import aboutBG from "../assets/images/aboutBG.jpg";
import Parallax from "./sections/Parallax";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Navbar from "./Navbar";

export default function Hero() {
  const containerRef = useRef();

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

useEffect(() => {

  const images = [
    aboutBG,
    ...heroAssets,
  ];

  let loadedCount = 0;

  images.forEach((src) => {

    const img = new Image();

    img.src = src;

    img.onload = () => {

      loadedCount++;

      const percent = Math.round(
        (loadedCount / images.length) * 100
      );

      setProgress(percent);

      if (loadedCount === images.length) {

        setTimeout(() => {
          setLoading(false);
        }, 500);

      }
    };

  });

}, []);

  useEffect(() => {
    if (loading) return;
  const ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".panel");

    const getTotalWidth = () =>
      sections.reduce(
        (total, section) =>
          total + section.offsetWidth,
        0
      );

    gsap.to(".wrapper", {
      x: () => -(getTotalWidth() - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () =>
          "+=" +
          (getTotalWidth() - window.innerWidth),
      },
    });
  }, containerRef);

  window.addEventListener(
    "resize",
    ScrollTrigger.refresh
  );

  return () => {
  window.removeEventListener(
    "resize",
    ScrollTrigger.refresh
  );

  ScrollTrigger.getAll().forEach(trigger => {
    trigger.kill(true);
  });

  gsap.killTweensOf(".wrapper");
  gsap.killTweensOf(".panel");

  ctx.revert();
  };
}, [loading]);

useEffect(() => {
  const scrollToHash = () => {
    const hash = window.location.hash;

    if (!hash || !containerRef.current) return;

    const wrapper =
      containerRef.current.querySelector(".wrapper");

    const target =
      containerRef.current.querySelector(hash);

    if (!wrapper || !target) return;

    const tryCompute = (attempt = 0) => {
      if (attempt > 10) return;

      // FIX
      const offsetLeft = target.offsetLeft;

      const totalWidth = Array.from(
        wrapper.children
      ).reduce(
        (total, section) =>
          total + section.offsetWidth,
        0
      );

      const maxDelta = Math.max(
        0,
        totalWidth - window.innerWidth
      );

      const clampedOffset = Math.min(
        Math.max(0, offsetLeft),
        maxDelta
      );

      const containerTop =
        containerRef.current.getBoundingClientRect()
          .top + window.scrollY;

      const targetScrollY =
        containerTop + clampedOffset;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    };

    requestAnimationFrame(() =>
      tryCompute(0)
    );
  };

  requestAnimationFrame(scrollToHash);

  window.addEventListener(
    "hashchange",
    scrollToHash
  );

  return () =>
    window.removeEventListener(
      "hashchange",
      scrollToHash
    );
}, []);
if (loading) {
  return (
    <div
      className="
        fixed inset-0 z-[99999]
        bg-[#FCF8F5]
        flex flex-col items-center justify-center
        overflow-hidden
      "
      style={{ fontFamily: "Lora, serif" }}
    >


      {/* TITLE */}
      <h1
        className="
          text-[#4B352A]
          text-3xl md:text-5xl
          tracking-[10px]
          uppercase
          mb-10
          z-10
        "
      >
        LOADING
      </h1>

      {/* PROGRESS BAR */}
      <div
        className="
          w-[250px] md:w-[350px]
          h-[3px]
          bg-[#D8CFC3]
          overflow-hidden
          relative
          z-10
        "
      >

        <div
          className="
            h-full
            bg-[#4B352A]
            transition-all duration-300
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* PERCENT */}
      <p
        className="
          mt-4
          text-[#4B352A]
          text-sm
          tracking-[4px]
        "
      >
        {progress}%
      </p>

      {/* TEXT */}
      <p
        className="
          mt-2
          text-[#6B5B52]
          tracking-[6px]
          uppercase
          text-xs md:text-sm
          z-10
        "
      >
        Loading Experience
      </p>

    </div>
  );
}
  return (
    <>
      <Navbar />
      <div ref={containerRef} className="overflow-hidden @container">
        <div className="wrapper flex h-screen">
          <section id="home" className="panel bg-[#FCF8F5] min-w-[768px] md:min-w-[1024px] lg:min-w-[1440px] @min-[1440px]:min-w-[1920px] h-screen overflow-hidden">
            <Parallax />
          </section>

          <section className="panel bg-[#FDFBF9] min-w-[768px] md:min-w-[1024px] lg:min-w-[1440px] @min-[1440px]:min-w-[1920px] h-screen flex items-center justify-center text-5xl font-bold bg-cover bg-center relative px-4 sm:px-6 md:px-0" id="about" style={{ backgroundImage: `url(${aboutBG})` }}>
            <AboutSection />
          </section>

          <section id="contact" className="panel bg-[#FDFBF9] min-w-screen h-screen flex items-center justify-center">
            <ContactSection />
          </section>
        </div>
      </div>
    </>
  );
}