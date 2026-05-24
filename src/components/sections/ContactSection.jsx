// import smoke from "../../assets/images/smoke.png";

export default function ContactSection() {
  return (
    <>
      <div className="text-center max-w-md md:max-w-xl @min-[1440px]:max-w-2xl text-[#47423B] px-6 relative z-10">
        <h1
          className="text-[2rem] md:text-[3rem] font-bold uppercase @min-[1440px]:text-[4rem]"
          style={{ fontFamily: "Lora, serif" }}
        >
          Contact Me
        </h1>
        <h2
          className="text-[1rem] md:text-[1.5rem] uppercase @min-[1440px]:text-[2rem]"
          style={{ fontFamily: "Lora, serif" }}
        >
          Let's Connect & Collaborate
        </h2>
        <form className="text-xs md:text-sm mt-5 @min-[1440px]:text-base">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#FCF8F5] w-full py-3 px-4 text-[#47423B] placeholder:text-[#948C78] border border-[#948C78] focus:outline-none focus:ring-2 focus:ring-[#47423B]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#FCF8F5] mt-3 w-full py-3 px-4 text-[#47423B] placeholder:text-[#948C78] border border-[#948C78] focus:outline-none focus:ring-2 focus:ring-[#47423B]"
          />
          <textarea
            placeholder="Your Message"
            className="bg-[#FCF8F5] mt-3 w-full py-3 px-4 text-[#47423B] placeholder:text-[#948C78] border border-[#948C78] focus:outline-none focus:ring-2 focus:ring-[#47423B]"
          />
          <button
            type="submit"
            className="mt-4 bg-[#47423B] text-[#FCF8F5] py-3 px-6 uppercase tracking-widest hover:bg-[#948C78] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="flex gap-x-3 md:gap-x-5 gap-y-2 mt-5 justify-center text-xs md:text-[16px] flex-wrap">
          <a
            href="https://www.linkedin.com/in/almuktakin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#47423B] hover:text-[#948C78] transition-colors duration-300 flex items-center gap-x-1"
          >
            <svg className="w-3.75 h-3.75 md:w-4.5 md:h-4.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#47423B"/>
              <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#47423B"/>
              <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#47423B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#47423B"/>
            </svg>
            LinkedIn
          </a>
          <p>|</p>
          <a
            href="https://github.com/almuktakin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#47423B] hover:text-[#948C78] transition-colors duration-300 flex items-center gap-x-1"
          >
            <svg className="w-3.75 h-3.75 md:w-4.5 md:h-4.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" version="1.1">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#47423B">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                        </g>
                    </g>
                </g>
            </svg>
            GitHub
          </a>
          <p>|</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#47423B] hover:text-[#948C78] transition-colors duration-300 flex items-center gap-x-1"
          >
            <svg className="w-3.75 h-3.75 md:w-4.5 md:h-4.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#948C78">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#47423B"/>
              <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#47423B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#47423B"/>
            </svg>
            Instagram
          </a>
          <p>|</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#47423B] hover:text-[#948C78] transition-colors duration-300 flex items-center gap-x-1"
          >
            <svg className="w-3.75 h-3.75 md:w-4.5 md:h-4.5" xmlns="http://www.w3.org/2000/svg" fill="#47423B" viewBox="0 0 16 16"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"/><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
      {/* <img src={smoke} className="w-[150px] absolute bottom-80 z-50 left-10" />
      <img src={smoke} className="w-[200px] absolute bottom-90 z-50 left-60" /> */}

    </>
  );
}
