"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      detail: "infoexample@gmail.com",
      link: "mailto:infoexample@gmail.com"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      detail: "+000 000 000",
      link: "tel:+000000000"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      detail: "ABC street, abc, Tanzania",
      link: null
    }
  ];

  return (
    <main className="bg-white relative w-full min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-white min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] w-full mt-[70px] sm:mt-[90px] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto h-full relative px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px]">
          {/* Background Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
            <p
              className="font-source-serif font-semibold text-[100px] xs:text-[130px] sm:text-[180px] md:text-[230px] lg:text-[280px] leading-none tracking-[5px] xs:tracking-[7px] sm:tracking-[10px] md:tracking-[14px] lg:tracking-[18px] whitespace-nowrap"
              style={{ color: "rgba(0, 0, 0, 0.44)", opacity: 0.06 }}
            >
              CONTACT
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] text-center">
            <h1 className="font-urbanist font-bold text-[42px] xs:text-[52px] sm:text-[64px] md:text-[76px] lg:text-[88px] text-[#85640e] tracking-[2.1px] xs:tracking-[2.6px] sm:tracking-[3.2px] md:tracking-[3.8px] lg:tracking-[4.4px] leading-[52px] xs:leading-[64px] sm:leading-[76px] md:leading-[88px] lg:leading-[100px] mb-6">
              Contact Us
            </h1>
            <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[26px] sm:leading-[30px] md:leading-[34px] lg:leading-[38px] text-[#585858] max-w-[800px] tracking-[0.4px]">
              Get in touch with our team to discuss your mining project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white w-full pt-0 pb-16 sm:pb-20 lg:pb-28 relative">
        <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div>
              <h2 className="font-urbanist font-bold text-[28px] sm:text-[32px] md:text-[36px] text-[#85640e] mb-8 tracking-[1.2px]">
                Get In Touch
              </h2>
              <p className="font-inter text-[16px] sm:text-[17px] md:text-[18px] leading-[28px] sm:leading-[30px] text-[#1d1d1b] mb-10 tracking-[0.4px]">
                Have questions about our services or want to discuss a potential project? We'd love to hear from you. Reach out to us using any of the methods below.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
                    <div className="w-12 h-12 flex-shrink-0 text-[#85640e]">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-urbanist font-semibold text-[18px] sm:text-[20px] text-[#1d1d1b] mb-2 tracking-[0.5px]">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-inter text-[15px] sm:text-[16px] text-[#585858] hover:text-[#85640e] transition-colors duration-200"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="font-inter text-[15px] sm:text-[16px] text-[#585858]">
                          {info.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="font-urbanist font-semibold text-[20px] text-[#1d1d1b] mb-5 tracking-[0.5px]">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border-2 border-[#85640e]/20 hover:border-[#85640e] hover:bg-[#85640e] hover:text-white text-[#85640e] transition-all duration-300 flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border-2 border-[#85640e]/20 hover:border-[#85640e] hover:bg-[#85640e] hover:text-white text-[#85640e] transition-all duration-300 flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border-2 border-[#85640e]/20 hover:border-[#85640e] hover:bg-[#85640e] hover:text-white text-[#85640e] transition-all duration-300 flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gray-100">
              <h2 className="font-urbanist font-bold text-[24px] sm:text-[28px] text-[#85640e] mb-8 tracking-[1px]">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="font-inter text-[14px] text-[#1d1d1b] mb-2 block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full h-[50px] bg-gray-50 border border-gray-200 rounded-lg px-4 font-inter text-[15px] text-[#1d1d1b] focus:outline-none focus:border-[#85640e] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="font-inter text-[14px] text-[#1d1d1b] mb-2 block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full h-[50px] bg-gray-50 border border-gray-200 rounded-lg px-4 font-inter text-[15px] text-[#1d1d1b] focus:outline-none focus:border-[#85640e] transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="font-inter text-[14px] text-[#1d1d1b] mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-[50px] bg-gray-50 border border-gray-200 rounded-lg px-4 font-inter text-[15px] text-[#1d1d1b] focus:outline-none focus:border-[#85640e] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-inter text-[14px] text-[#1d1d1b] mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-[50px] bg-gray-50 border border-gray-200 rounded-lg px-4 font-inter text-[15px] text-[#1d1d1b] focus:outline-none focus:border-[#85640e] transition-colors"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="font-inter text-[14px] text-[#1d1d1b] mb-2 block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full h-[50px] bg-gray-50 border border-gray-200 rounded-lg px-4 font-inter text-[15px] text-[#1d1d1b] focus:outline-none focus:border-[#85640e] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="font-inter text-[14px] text-[#1d1d1b] mb-2 block">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-inter text-[15px] text-[#1d1d1b] focus:outline-none focus:border-[#85640e] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#85640e] text-white font-inter font-semibold text-[16px] h-[52px] rounded-lg hover:bg-[#85640e]/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 0.5L9 10M18.5 0.5L12.5 18.5L9 10M18.5 0.5L0.5 6.5L9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
