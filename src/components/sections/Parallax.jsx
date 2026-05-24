import dirt from "../../assets/images/dirt.png";
import mount1 from "../../assets/images/mount1.png";
import mount2 from "../../assets/images/mount2.png";
import mount3 from "../../assets/images/mount3.png";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
import fence from "../../assets/images/fence.png";
import people from "../../assets/images/people.png";
import cloude from "../../assets/images/cloude.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Parallax() {
  const containerRef = useRef();

useEffect(() => {

  const ctx = gsap.context(() => {

    gsap.to(".cloud-1", {
      x: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
      },
    });

    gsap.to(".cloud-2", {
      x: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
      },
    });

    gsap.to(".cloud-3", {
      x: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
      },
    });

    gsap.to(".mount-1", {
      x: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
      },
    });
    gsap.to(".mount-2", {
      x: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
      },
    });
    gsap.to(".mount-3", {
      x: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
      },
    });

    gsap.to(".people", {
      x: -40,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
      },
    });

  }, containerRef);

  return () => ctx.revert();

}, []);
  return (
    <>
      <div   ref={containerRef}
 className="relative h-screen w-[768px] md:w-[1024px] lg:w-[1440px] @min-[1440px]:w-[1920px] shrink-0 mx-auto">
                <img src={dirt} className="absolute z-0 h-[300px] bottom-0 md:h-[400px]" />

                <div className="w-[150px] h-[150px] rounded-full border-2 border-[#29241d] absolute bottom-[400px] left-[300px] md:left-[400px] lg:w-[200px] lg:h-[200px] lg:left-[600px] @min-[1440px]:w-[250px] @min-[1440px]:h-[250px] @min-[1440px]:left-[800px]" />

                <img
                src={cloude}
                className="cloud-1 absolute z-10 w-[300px] bottom-[350px] right-10 md:w-[400px] md:bottom-[430px] md:right-20 lg:w-[500px] lg:bottom-[460px] @min-[1440px]:w-[600px] @min-[1440px]:bottom-[520px] @min-[1440px]:right-50"
                />
                <img
                src={cloude}
                className="cloud-2 absolute z-10 w-[200px] bottom-[330px] left-20 md:bottom-[400px] md:left-30 lg:w-[300px] lg:left-60 lg:bottom-[440px] @min-[1440px]:w-[400px] @min-[1440px]:left-96 @min-[1440px]:bottom-[500px]"
                />
                <img
                src={cloude}
                className="cloud-3 absolute z-10 w-[100px] bottom-[300px] left-64 md:bottom-[370px] md:left-84 lg:w-[200px] lg:bottom-[400px] lg:left-[500px] @min-[1440px]:left-[780px] @min-[1440px]:bottom-[440px]"
                />

                <img
                src={mount1}
                className="mount-1 absolute z-10 w-[400px] bottom-14 left-64 md:bottom-30 md:left-80 lg:w-[500px] lg:left-[500px] lg:bottom-28 @min-[1440px]:w-[700px] @min-[1440px]:bottom-5 @min-[1440px]:left-[600px]"
                />
                <img
                src={mount2}
                className="mount-2 absolute z-20 w-[500px] bottom-1 -left-20 md:w-[600px] md:bottom-5 lg:w-[900px] lg:bottom-[-125px] @min-[1440px]:w-[1200px] @min-[1440px]:bottom-[-250px]"
                />
                <img
                src={mount3}
                className="mount-3 absolute z-30 w-[1000px] bottom-10 scale-150 lg:scale-200 lg:left-54 @min-[1440px]:scale-125 @min-[1440px]:w-[1900px] @min-[1440px]:bottom-[-190px] @min-[1440px]:left-0"
                />

                <img
                src={house1}
                className="absolute z-40 w-[300px] bottom-40 right-40 md:w-[400px] lg:w-[500px] lg:right-70 @min-[1440px]:w-[600px] @min-[1440px]:right-90 @min-[1440px]:bottom-50"
                />
                <img
                src={house2}
                className="absolute z-50 w-[300px] bottom-20 right-0 md:right-10 lg:right-0 md:w-[400px] lg:w-[530px] @min-[1440px]:w-[650px]"
                />
                <img
                src={house3}
                className="absolute z-60 w-[280px] bottom-24 left-0 md:w-[380px] lg:w-[480px] @min-[1440px]:w-[600px]"
                />

                <img  src={fence} className="absolute bottom-0 z-70 left-[-15px] lg:left-[-30px]" />
                <img
                src={people}
                className="people absolute z-40 w-[100px] bottom-50 left-55 md:w-[200px] md:left-70 lg:w-[300px] lg:left-90 @min-[1440px]:w-[400px] @min-[1440px]:left-150"
                />
      </div>
    </>
  );
}