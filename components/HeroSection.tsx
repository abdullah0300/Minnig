"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Handle window resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Trigger animation only on desktop (>= 768px)
    const timer = setTimeout(() => {
      if (window.innerWidth >= 768) {
        setIsAnimated(true);
      } else {
        // On mobile, set to animated state immediately (no animation)
        setIsAnimated(true);
      }
    }, window.innerWidth >= 768 ? 500 : 0);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="bg-white  min-h-[550px] sm:min-h-[580px] md:min-h-[620px] lg:h-[650px] w-full mt-[70px] sm:mt-[90px] relative overflow-hidden pb-10 sm:pb-8 md:pb-0"
    >
      <div className="max-w-[1440px] mx-auto h-full relative px-4 sm:px-6 lg:px-8">
        {/* Subtitle - Top */}
        <p
          className={`font-inter font-normal text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] text-[#1d1d1b] capitalize absolute left-[4%] sm:left-[5%] md:left-[62px] top-[70px] sm:top-[80px] md:top-[100px] whitespace-nowrap transition-all duration-1000 ease-out ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          Your trusted gateway to Tanzania&apos;s
        </p>

        {/* Main Heading - MIN (starts next to center, moves to LEFT) */}
        <h1
          className="font-inter font-normal text-[65px] xs:text-[70px] sm:text-[100px] md:text-[140px] lg:text-[180px] leading-none text-[#1d1d1b] absolute top-[100px] xs:top-[105px] sm:top-[120px] md:top-[150px] lg:top-[180px] opacity-100"
          style={{
            transition: "transform 2000ms ease-in-out",
            transitionDelay: "400ms",
            left: "50%",
            transform: isAnimated
              ? windowWidth >= 1024 ? "translateX(calc(-100% - 165px))"
                : windowWidth >= 768 ? "translateX(calc(-100% - 120px))"
                : windowWidth >= 640 ? "translateX(calc(-100% - 80px))"
                : windowWidth >= 475 ? "translateX(calc(-100% - 45px))"
                : "translateX(calc(-100% - 40px))"
              : "translateX(calc(-100% - 1px))",
          }}
        >
          MIN
        </h1>

        {/* Center Video (starts as thin line, expands to full width) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[75px] xs:top-[80px] sm:top-[90px] md:top-[120px] lg:top-[150px] overflow-hidden rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px]"
          style={{
            transition: "width 2000ms ease-in-out",
            transitionDelay: "400ms",
            width: isAnimated
              ? windowWidth >= 1024 ? "330px"
                : windowWidth >= 768 ? "240px"
                : windowWidth >= 640 ? "160px"
                : windowWidth >= 475 ? "90px"
                : "80px"
              : "2px",
            height: windowWidth >= 1024 ? "240px"
              : windowWidth >= 768 ? "180px"
              : windowWidth >= 640 ? "140px"
              : windowWidth >= 475 ? "130px"
              : "120px",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/ddgzjzd9q/video/upload/v1764252334/4474926-uhd_3840_2160_30fps_hbrcos.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Main Heading - ING (starts next to center, moves to RIGHT) */}
        <h1
          className="font-inter font-normal text-[65px] xs:text-[70px] sm:text-[100px] md:text-[140px] lg:text-[180px] leading-none text-black absolute top-[100px] xs:top-[105px] sm:top-[120px] md:top-[150px] lg:top-[180px] opacity-100"
          style={{
            transition: "transform 2000ms ease-in-out",
            transitionDelay: "400ms",
            left: "50%",
            transform: isAnimated
              ? windowWidth >= 1024 ? "translateX(165px)"
                : windowWidth >= 768 ? "translateX(120px)"
                : windowWidth >= 640 ? "translateX(80px)"
                : windowWidth >= 475 ? "translateX(45px)"
                : "translateX(40px)"
              : "translateX(1px)",
          }}
        >
          ING
        </h1>

        {/* Sector text - positioned far right below ING */}
        <p
          className={`font-inter font-normal text-[16px] xs:text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] text-[#1d1d1d] absolute whitespace-nowrap right-[4%] sm:right-[5%] md:right-[6%] lg:right-[257px] top-[220px] xs:top-[230px] sm:top-[260px] md:top-[300px] lg:top-[350px] transition-all duration-1000 ease-out ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Sector
        </p>

        {/* Description */}
        <p
          className={`font-arial text-[14px] xs:text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] leading-[22px] xs:leading-[22px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] text-[#444444] absolute left-[4%] sm:left-[5%] md:left-[70px] lg:left-[70px] bottom-[90px] xs:bottom-[95px] sm:bottom-[95px] md:bottom-[95px] lg:bottom-[100px] w-[92%] sm:w-[85%] md:w-[75%] lg:w-[530px] tracking-[0.4px] transition-all duration-1000 ease-out ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "2200ms" }}
        >
          Enabling global investors with licences, partnerships, and operational
          support to thrive in Tanzania&apos;s resource market.
        </p>

        {/* CTA Button - styled like Figma */}
        <button
          className={`absolute right-[4%] sm:right-[5%] md:right-[8%] lg:right-[100px] bottom-[30px] xs:bottom-[35px] sm:bottom-[35px] md:bottom-[35px] lg:bottom-[100px] bg-[#85640e] text-white font-inter text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal px-5 xs:px-6 sm:px-6 md:px-7 py-2.5 xs:py-2.5 sm:py-2.5 md:py-3 rounded-[5px] hover:bg-[#85640e]/90 transition-all duration-300 ease-out ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "2400ms" }}
        >
          Explore Services
        </button>
      </div>
    </section>
  );
}
