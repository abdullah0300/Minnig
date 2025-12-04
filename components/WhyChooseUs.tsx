"use client";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-white w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto h-full relative px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px]">
        {/* Tagline at Top - "Smart. Compliant. Connected." with Background Watermark */}
        <div className="relative z-10 mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
          {/* Background Watermark "The WorldShine Edge" - Behind the tagline text */}
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none" style={{ top: 'calc(50% - 30px)', transform: 'translate(-50%, -50%)', zIndex: -1 }}>
            <p
              className="font-source-serif font-semibold text-[70px] xs:text-[90px] sm:text-[120px] md:text-[150px] lg:text-[180px] leading-none tracking-[3px] xs:tracking-[4px] sm:tracking-[6px] md:tracking-[8px] lg:tracking-[10px] whitespace-nowrap"
              style={{ color: "rgba(0, 0, 0, 0.44)", opacity: 0.08 }}
            >
              The WorldShine Edge
            </p>
          </div>

          <p
            className="font-normal text-[24px] xs:text-[28px] sm:text-[36px] md:text-[48px] lg:text-[66px] leading-[32px] xs:leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[34px] text-[#85640e] tracking-[1.2px] xs:tracking-[1.4px] sm:tracking-[1.8px] md:tracking-[2.4px] lg:tracking-[2.8px] whitespace-nowrap not-italic inline-block mb-20 relative z-10"
            style={{ fontFamily: "Source Serif Pro" }}
          >
            Our Approach
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-[1200px] mx-auto pl-[150px]">
          {/* Left Column - Header and Description */}
          <div className="order-1 flex flex-col items-start text-left">
            <h2 className="font-urbanist font-bold text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] leading-[36px] xs:leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[60px] text-[#85640e] tracking-[1.4px] xs:tracking-[1.6px] sm:tracking-[2px] md:tracking-[2.4px] lg:tracking-[2.6px] mb-4 sm:mb-5 md:mb-6">
              Why <br />
              Choose Us
            </h2>
            <p className="font-inter text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-[22px] xs:leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] text-[#1d1d1b] max-w-[480px]">
              At Serena Attorneys, we believe that lasting client success begins with a deep understanding of the business behind every brief. By combining legal insight with tax and regulatory expertise, we help companies operate responsibly, mitigate risk, and unlock sustainable growth.
            </p>
          </div>

          {/* Right Column - Three Benefits with Icons */}
          <div className="order-2 space-y-6 sm:space-y-7 md:space-y-8 flex flex-col items-start">
            {/* Benefit 1: Regulatory Access */}
            <div className="flex gap-3 sm:gap-4 md:gap-5">
              <div className="flex-shrink-0 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px]">
                {/* Icon: Document/Checklist */}
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="25" cy="25" r="24" stroke="#85640e" strokeWidth="2" fill="none" />
                  <path
                    d="M16 25L22 31L34 19"
                    stroke="#85640e"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-urbanist font-semibold text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px] text-[#1d1d1b] mb-1 sm:mb-2">
                  Integrated Expertise
                </h3>
                <p className="font-inter text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[20px] xs:leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-[#575757]">
                  Our legal and tax teams work seamlessly together. This integrated model ensures that every solution—whether in compliance, structuring, or advisory—is practical, coordinated, and aligned with your broader business strategy.
                </p>
              </div>
            </div>

            {/* Benefit 2: Commercial Delivery */}
            <div className="flex gap-3 sm:gap-4 md:gap-5">
              <div className="flex-shrink-0 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px]">
                {/* Icon: Briefcase */}
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <rect
                    x="10"
                    y="18"
                    width="30"
                    height="20"
                    rx="2"
                    stroke="#85640e"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M18 18V15C18 13.8954 18.8954 13 20 13H30C31.1046 13 32 13.8954 32 15V18"
                    stroke="#85640e"
                    strokeWidth="2"
                    fill="none"
                  />
                  <line
                    x1="10"
                    y1="26"
                    x2="40"
                    y2="26"
                    stroke="#85640e"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-urbanist font-semibold text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px] text-[#1d1d1b] mb-1 sm:mb-2">
                  Client-Centered Collaboration
                </h3>
                <p className="font-inter text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[20px] xs:leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-[#575757]">
                  We prioritize transparent, proactive communication at every stage, so you&apos;re always informed and empowered to make confident decisions.
                </p>
              </div>
            </div>

            {/* Benefit 3: Responsible Compliance */}
            <div className="flex gap-3 sm:gap-4 md:gap-5">
              <div className="flex-shrink-0 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px]">
                {/* Icon: Shield */}
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M25 10L15 15V23C15 29 19 34 25 40C31 34 35 29 35 23V15L25 10Z"
                    stroke="#85640e"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M21 25L24 28L29 22"
                    stroke="#85640e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-urbanist font-semibold text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px] text-[#1d1d1b] mb-1 sm:mb-2">
                  Responsible Compliance
                </h3>
                <p className="font-inter text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[20px] xs:leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-[#575757]">
                  We manage your legal and tax obligations with integrity and foresight, helping you stay compliant today while preparing for tomorrow&apos;s challenges.
                </p>
              </div>
            </div>

            {/* Benefit 4: Local Insight, National Reach */}
            <div className="flex gap-3 sm:gap-4 md:gap-5">
              <div className="flex-shrink-0 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px]">
                {/* Icon: Globe */}
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="25" cy="25" r="15" stroke="#85640e" strokeWidth="2" fill="none" />
                  <path
                    d="M25 10C25 10 20 16 20 25C20 34 25 40 25 40"
                    stroke="#85640e"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M25 10C25 10 30 16 30 25C30 34 25 40 25 40"
                    stroke="#85640e"
                    strokeWidth="2"
                    fill="none"
                  />
                  <line x1="10" y1="25" x2="40" y2="25" stroke="#85640e" strokeWidth="2" />
                  <ellipse cx="25" cy="25" rx="15" ry="7" stroke="#85640e" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div>
                <h3 className="font-urbanist font-semibold text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px] text-[#1d1d1b] mb-1 sm:mb-2">
                  Local Insight, National Reach
                </h3>
                <p className="font-inter text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[20px] xs:leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-[#575757]">
                  Rooted in Tanzania, we bring deep knowledge of the country&apos;s legal, tax, and regulatory landscape. Our understanding of government processes and business culture allows us to support clients across sectors and regions within Tanzania with precision and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
