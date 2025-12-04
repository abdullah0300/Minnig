"use client";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="bg-white min-h-[600px] w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto h-full relative px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="relative">
          {/* Header Section with Background Watermark */}
          <div className="relative mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            {/* Background Watermark "WE ARE" - positioned behind heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
              <p
                className="font-source-serif font-semibold text-[100px] xs:text-[120px] sm:text-[160px] md:text-[200px] lg:text-[246px] leading-[100px] xs:leading-[120px] sm:leading-[140px] md:leading-[157px] tracking-[5px] xs:tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[12.3px] whitespace-nowrap"
                style={{ color: "rgba(0, 0, 0, 0.44)", opacity: 0.08 }}
              >
                WE ARE
              </p>
            </div>

            {/* Section Heading */}
            <h2 className="font-urbanist font-extrabold text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-[#85640e] tracking-[1.1px] xs:tracking-[1.2px] sm:tracking-[1.4px] md:tracking-[1.6px] lg:tracking-[1.8px] leading-[32px] xs:leading-[36px] sm:leading-[40px] md:leading-[43px] lg:leading-[46px] text-center mb-4 sm:mb-5 md:mb-6 relative z-10 uppercase">
              WHO WE ARE
            </h2>

            {/* Subtitle */}
            <p className="font-urbanist font-semibold text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[24px] xs:leading-[28px] sm:leading-[30px] md:leading-[33px] lg:leading-[35px] text-[#585858] tracking-[0.48px] xs:tracking-[0.54px] sm:tracking-[0.6px] md:tracking-[0.72px] lg:tracking-[0.84px] text-center max-w-[280px] xs:max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] mx-auto px-2 relative z-10">
              Legal, Tax & Immigration Services
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-36">
            {/* Left Column - Description */}
            <div className="order-2 lg:order-1">
              <p className="font-arial text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] xs:leading-[24px] sm:leading-[26px] md:leading-[30px] lg:leading-[33px] text-[#1d1d1d] tracking-[0.28px] xs:tracking-[0.3px] sm:tracking-[0.32px] md:tracking-[0.36px] lg:tracking-[0.4px] mb-6">
                At Serena Attorneys, we support local businesses and multinational corporations operating in Tanzania in navigating complex legal, regulatory, and tax environments with clarity and confidence.
              </p>
              <p className="font-arial text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] xs:leading-[24px] sm:leading-[26px] md:leading-[30px] lg:leading-[33px] text-[#1d1d1d] tracking-[0.28px] xs:tracking-[0.3px] sm:tracking-[0.32px] md:tracking-[0.36px] lg:tracking-[0.4px]">
                Founded in 2012, our team of seasoned lawyers and tax professionals delivers strategic guidance and practical solutions tailored to each client&apos;s unique needs. From corporate structuring and regulatory compliance to tax planning and immigration support, we handle the details, so you can focus on achieving your goals.
              </p>
            </div>

            {/* Right Column - Achievements */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6">
              {/* Achievement 1 */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                      fill="#85640e"
                    />
                  </svg>
                </div>
                <p className="font-arial font-normal text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[30px] text-[#1d1d1d] tracking-[0.28px] xs:tracking-[0.3px] sm:tracking-[0.32px] md:tracking-[0.36px] lg:tracking-[0.4px]">
                  150+ Corporate Clients Served
                </p>
              </div>

              {/* Achievement 2 */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                      fill="#85640e"
                    />
                  </svg>
                </div>
                <p className="font-arial font-normal text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[30px] text-[#1d1d1d] tracking-[0.28px] xs:tracking-[0.3px] sm:tracking-[0.32px] md:tracking-[0.36px] lg:tracking-[0.4px]">
                  100% Client Success Rate in Regulatory Compliance
                </p>
              </div>

              {/* Achievement 3 */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                      fill="#85640e"
                    />
                  </svg>
                </div>
                <p className="font-arial font-normal text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] xs:leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[30px] text-[#1d1d1d] tracking-[0.28px] xs:tracking-[0.3px] sm:tracking-[0.32px] md:tracking-[0.36px] lg:tracking-[0.4px]">
                  Trusted by Local and Multinational Companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
