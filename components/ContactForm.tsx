"use client";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-white w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto h-full relative px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Contact Form Card */}
        <div className="bg-white rounded-[10px] shadow-[-2px_-2px_31px_1px_rgba(0,0,0,0.09)] w-full max-w-[1047px] p-8 sm:p-10 md:p-12">
          {/* Heading */}
          <h2 className="font-poppins font-medium text-[24px] sm:text-[26px] md:text-[30px] leading-[30px] text-[#85640e] text-center mb-8 sm:mb-10 md:mb-12">
            Contact Us
          </h2>

          {/* Form */}
          <form className="space-y-5 sm:space-y-6">
            {/* Row 1: First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full h-[60px] bg-neutral-100 border border-[#eeeeee] rounded-[5px] px-4 font-poppins text-[16px] text-[#8f8f8f] focus:outline-none focus:border-[#85640e] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-[60px] bg-neutral-100 border border-[#eeeeee] rounded-[5px] px-4 font-poppins text-[16px] text-[#8f8f8f] focus:outline-none focus:border-[#85640e] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[60px] bg-neutral-100 border border-[#eeeeee] rounded-[5px] px-4 font-poppins text-[16px] text-[#8f8f8f] focus:outline-none focus:border-[#85640e] transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-[60px] bg-neutral-100 border border-[#eeeeee] rounded-[5px] px-4 font-poppins text-[16px] text-[#8f8f8f] focus:outline-none focus:border-[#85640e] transition-colors"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                placeholder="Write Your Message"
                rows={5}
                className="w-full h-[146px] bg-neutral-100 border border-[#eeeeee] rounded-[5px] px-4 py-4 font-poppins text-[16px] text-[#8f8f8f] focus:outline-none focus:border-[#85640e] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#85640e] text-white font-poppins font-semibold text-[16px] px-[34px] py-[11px] rounded-[5px] h-[45px] flex items-center gap-[9px] hover:bg-[#85640e]/90 transition-all duration-300 border border-white"
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 0.5L9 10M18.5 0.5L12.5 18.5L9 10M18.5 0.5L0.5 6.5L9 10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
