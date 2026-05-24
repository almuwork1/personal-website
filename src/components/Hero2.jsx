import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import aboutBG from "../assets/images/aboutBG.jpg";
import Parallax from "./sections/Parallax";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Navbar from "./Navbar";

export default function Hero() {
  const containerRef = useRef();

  useEffect(() => {
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
}, []);

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