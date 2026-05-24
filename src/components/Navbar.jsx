import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const target = document.querySelector(id);

    if (!target) return;

    const wrapper = document.querySelector(".wrapper");

    if (!wrapper) return;

    const totalWidth = Array.from(wrapper.children).reduce(
      (total, section) => total + section.offsetWidth,
      0
    );

    const maxDelta = Math.max(
      0,
      totalWidth - window.innerWidth
    );

    const offsetLeft = target.offsetLeft;

    const clampedOffset = Math.min(
      Math.max(0, offsetLeft),
      maxDelta
    );

    const container =
      wrapper.parentElement;

    const containerTop =
      container.getBoundingClientRect().top +
      window.scrollY;

    const targetScrollY =
      containerTop + clampedOffset;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav
      className="
        fixed top-0 left-1/2 -translate-x-1/2
        z-[999]
        w-full
        px-4 sm:px-6 md:px-10
        py-5
      "
      style={{ fontFamily: "Lora, serif" }}
    >
      <div
        className="
          max-w-7xl mx-auto
          flex items-center justify-between
        "
      >

        {/* LOGO */}
        <h1 className="text-[#4B352A] text-lg sm:text-xl md:text-2xl">
          Almutakin
        </h1>

        {/* DESKTOP MENU */}
        <div
          className="
            hidden md:flex
            items-center gap-6 lg:gap-10
            text-[#4B352A]
            text-sm md:text-base
          "
        >

          <button
            onClick={() => scrollToSection("#home")}
            className="
              transition-all duration-300
              hover:-translate-y-1
              hover:opacity-70
            "
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("#about")}
            className="
              transition-all duration-300
              hover:-translate-y-1
              hover:opacity-70
            "
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="
              transition-all duration-300
              hover:-translate-y-1
              hover:opacity-70
            "
          >
            Contact
          </button>

          <Link
            to="/project"
            className="
              px-4 py-2
              border border-[#4B352A]
              hover:bg-[#4B352A]
              hover:text-[#FCF8F5]
              transition-all duration-300
            "
          >
            Projects
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-[#4B352A]
            text-3xl
          "
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          absolute left-1/2 -translate-x-1/2
          mt-4
          w-[90%]
          bg-[#FCF8F5]
          border border-[#C1B5A0]
          shadow-xl
          transition-all duration-300
          overflow-hidden

          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col p-6 gap-5 text-[#4B352A]">

          <button
            onClick={() => scrollToSection("#home")}
            className="text-left"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("#about")}
            className="text-left"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="text-left"
          >
            Contact
          </button>

          <Link
            to="/project"
            onClick={() => setOpen(false)}
            className="
              border border-[#4B352A]
              px-4 py-2
              text-center
            "
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}