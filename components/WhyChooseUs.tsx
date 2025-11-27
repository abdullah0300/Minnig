export default function WhyChooseUs() {
  return (
    <section className="relative py-20 max-w-[1440px] mx-auto">
      {/* Background Text */}
      <div className="absolute left-1/2 top-[100px] -translate-x-1/2 -translate-y-1/2 opacity-5">
        <h2 className="font-source-serif font-semibold text-[178.91px] text-[rgba(0,0,0,0.44)] tracking-[14.3128px] leading-[95.138px] whitespace-nowrap">
          The WorldShine Edge
        </h2>
      </div>

      {/* Section Title */}
      <div className="px-16 mb-16 relative z-10">
        <h2 className="font-urbanist font-bold text-[65px] text-primary tracking-[3.25px] leading-[76px]">
          Why <br />
          Choose Us
        </h2>
      </div>

      {/* Description */}
      <div className="px-16 mb-16 relative z-10">
        <p className="font-inter text-[22px] text-secondary leading-[36px] max-w-[525px]">
          With deep regulatory access, proven commercial experience, and trusted local networks, we deliver seamless project execution from planning to operation.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-2 gap-16 px-16 relative z-10">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Benefit 1 */}
          <div className="flex gap-6">
            <div className="w-[50px] h-[50px] flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-urbanist font-semibold text-[32px] text-secondary leading-[42.114px] mb-2">
                Regulatory Access
              </h3>
              <p className="font-inter text-[22px] text-[#575757] leading-[33.181px]">
                Navigate approvals with confidence.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex gap-6">
            <div className="w-[50px] h-[50px] flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-urbanist font-semibold text-[32px] text-secondary leading-[33px] mb-2">
                Commercial Delivery
              </h3>
              <p className="font-inter text-[22px] text-[#575757] leading-[26px]">
                Optimise tenders and contracts.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex gap-6">
            <div className="w-[50px] h-[50px] flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-urbanist font-semibold text-[32px] text-secondary leading-[33px] mb-2">
                Sustainable Impact
              </h3>
              <p className="font-inter text-[22px] text-[#575757] leading-[26px]">
                Align with global ESG standards.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image placeholder or additional content */}
        <div className="flex items-center justify-center">
          <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
