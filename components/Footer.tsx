"use client";

export default function Footer() {
  return (
    <footer className="bg-[#85640e] w-full relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px] relative z-10">
        {/* Top Section - Logo and Description */}
        <div className="py-16 sm:py-20 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-source-serif text-[48px] sm:text-[56px] md:text-[64px] leading-tight text-white mb-6">
                Serena <span className="italic">Attorneys</span>
              </p>
              <p className="font-inter text-[16px] sm:text-[18px] leading-relaxed text-white/80 max-w-[500px]">
                Legal, Tax & Immigration Services. We help local enterprises and multinational companies operating in Tanzania navigate complex legal, regulatory, and tax challenges with confidence and clarity.
              </p>
            </div>

            {/* Social Media - Premium Layout */}
            <div className="flex flex-col items-start lg:items-end">
              <p className="font-inter font-semibold text-[18px] sm:text-[20px] text-white mb-6">
                Connect With Us
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-[60px] h-[60px] rounded-full border-2 border-white/20 hover:border-white hover:bg-white transition-all duration-300 flex items-center justify-center group"
                  aria-label="Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" className="group-hover:fill-[#85640e] transition-colors duration-300" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[60px] h-[60px] rounded-full border-2 border-white/20 hover:border-white hover:bg-white transition-all duration-300 flex items-center justify-center group"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" className="group-hover:fill-[#85640e] transition-colors duration-300" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-[60px] h-[60px] rounded-full border-2 border-white/20 hover:border-white hover:bg-white transition-all duration-300 flex items-center justify-center group"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" className="group-hover:fill-[#85640e] transition-colors duration-300" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="py-14 sm:py-16 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {/* Quick Links */}
            <div>
              <h3 className="font-inter font-bold text-[16px] text-white mb-5 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li><a href="/" className="font-rubik text-[15px] text-white/75 hover:text-white transition-colors duration-200">Home Page</a></li>
                <li><a href="/about" className="font-rubik text-[15px] text-white/75 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="/services" className="font-rubik text-[15px] text-white/75 hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="/contact" className="font-rubik text-[15px] text-white/75 hover:text-white transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-inter font-bold text-[16px] text-white mb-5 uppercase tracking-wider">
                Explore
              </h3>
              <ul className="space-y-3">
                <li><a href="#story" className="font-rubik text-[15px] text-white/75 hover:text-white transition-colors duration-200">Our Story</a></li>
                <li><a href="#news" className="font-rubik text-[15px] text-white/75 hover:text-white transition-colors duration-200">News</a></li>
                <li><a href="#blogs" className="font-rubik text-[15px] text-white/75 hover:text-white transition-colors duration-200">Blogs</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-2">
              <h3 className="font-inter font-bold text-[16px] text-white mb-5 uppercase tracking-wider">
                Get In Touch
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:clientservices@serenaattorneys.com" className="font-rubik text-[15px] text-white/75 hover:text-white transition-colors duration-200">clientservices@serenaattorneys.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="font-rubik text-[15px] text-white/75">+000 000 000</p>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-rubik text-[15px] text-white/75">ABC street, abc</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-rubik text-[14px] text-white/60 text-center sm:text-left">
              © 2025 Serena Attorneys. All rights reserved.
            </p>
            <p className="font-rubik text-[14px] text-white/60 text-center sm:text-right">
              Designed and Developed by{" "}
              <a
                href="https://webcraftio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors duration-200 underline underline-offset-2"
              >
                WebCraftio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
