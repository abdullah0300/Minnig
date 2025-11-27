"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Trigger navbar slide-down animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header
        className="bg-white/95 backdrop-blur-md h-[70px] sm:h-[90px] w-full fixed left-0 z-50 border-b border-gray-100 transition-all duration-700 ease-out"
        style={{
          top: isVisible ? "0" : "-90px",
        }}
      >
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="font-source-serif text-[24px] sm:text-[28px] lg:text-[35px] text-[#1d1d1b] leading-normal z-50">
            World<span className="italic">Shine</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <a
              href="/"
              className="font-inter text-[15px] xl:text-[16px] text-black/80 hover:text-primary transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/about"
              className="font-inter text-[15px] xl:text-[16px] text-black/80 hover:text-primary transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/services"
              className="font-inter text-[15px] xl:text-[16px] text-black/80 hover:text-primary transition-all duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/contact"
              className="bg-[#85640e] text-white font-inter text-[13px] px-7 py-2.5 rounded-full hover:bg-[#85640e]/90 transition-all duration-300 hover:scale-105 inline-block"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-black transition-all duration-500 ease-out ${
                  mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`w-full h-[2px] bg-black transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 translate-x-3" : ""
                }`}
              />
              <span
                className={`w-full h-[2px] bg-black transition-all duration-500 ease-out ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Awwwards Style */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-700 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Menu Content */}
        <nav className="h-full flex flex-col items-center justify-center px-8 space-y-2">
          {[
            { name: "Home", href: "/", delay: "100" },
            { name: "About", href: "/about", delay: "200" },
            { name: "Services", href: "/services", delay: "300" },
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-urbanist font-semibold text-[clamp(2rem,8vw,4rem)] text-black/90 hover:text-primary transition-all duration-500 transform ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${item.delay}ms` : "0ms",
              }}
            >
              {item.name}
            </a>
          ))}

          {/* Contact Button - Mobile */}
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`mt-12 bg-[#85640e] text-white font-inter text-[16px] px-12 py-4 rounded-full hover:bg-[#85640e]/90 transition-all duration-500 hover:scale-105 transform ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: mobileMenuOpen ? "400ms" : "0ms",
            }}
          >
            Contact Us
          </a>

          {/* Social Links or Additional Info */}
          <div
            className={`absolute bottom-12 left-0 right-0 flex justify-center gap-8 transition-all duration-500 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: mobileMenuOpen ? "500ms" : "0ms",
            }}
          >
            <a
              href="#"
              className="font-inter text-[13px] text-black/50 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="font-inter text-[13px] text-black/50 hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="font-inter text-[13px] text-black/50 hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
