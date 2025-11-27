import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="about" className="relative py-20 max-w-[1440px] mx-auto">
      {/* Background Text */}
      <div className="absolute left-1/2 top-[72px] -translate-x-1/2 -translate-y-1/2 opacity-5">
        <h2 className="font-source-serif font-semibold text-[246.019px] text-[rgba(0,0,0,0.44)] tracking-[12.3009px] leading-[157.179px]">
          WE ARE
        </h2>
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-urbanist font-extrabold text-[36px] text-primary tracking-[1.8px] leading-[46px] mb-4">
          WHO WE ARE
        </h2>
        <p className="font-urbanist font-semibold text-[28px] text-[#585858] tracking-[0.84px] leading-[35px] max-w-[600px] mx-auto">
          Building Bridges Between Global Investors
          <br />
          & Local Opportunities
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-16 px-20 relative z-10">
        {/* Left Column - Text */}
        <div>
          <p className="font-arial text-[20px] leading-[33px] text-secondary tracking-[0.4px] mb-12">
            WorldShine Mining Company Limited is a Tanzanian liaison and project management firm that simplifies entry into the mining sector. We connect international investors with compliant licences, local partnerships, and supply networks — ensuring every project runs efficiently and responsibly.
          </p>
        </div>

        {/* Right Column - List Items */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0">
              <svg className="w-full h-full text-green-500" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="16" cy="16" r="16" opacity="0.2" />
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm7.707 11.707l-8 8a.999.999 0 0 1-1.414 0l-4-4a.999.999 0 1 1 1.414-1.414L15 19.586l7.293-7.293a.999.999 0 1 1 1.414 1.414z" />
              </svg>
            </div>
            <p className="font-arial text-[20px] leading-[60px] text-secondary tracking-[0.4px]">
              10+ Successful Licence Facilitation Project
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0">
              <svg className="w-full h-full text-green-500" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="16" cy="16" r="16" opacity="0.2" />
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm7.707 11.707l-8 8a.999.999 0 0 1-1.414 0l-4-4a.999.999 0 1 1 1.414-1.414L15 19.586l7.293-7.293a.999.999 0 1 1 1.414 1.414z" />
              </svg>
            </div>
            <p className="font-arial text-[20px] leading-[60px] text-secondary tracking-[0.4px]">
              100% Regulatory Compliance Record
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0">
              <svg className="w-full h-full text-green-500" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="16" cy="16" r="16" opacity="0.2" />
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm7.707 11.707l-8 8a.999.999 0 0 1-1.414 0l-4-4a.999.999 0 1 1 1.414-1.414L15 19.586l7.293-7.293a.999.999 0 1 1 1.414 1.414z" />
              </svg>
            </div>
            <p className="font-arial text-[20px] leading-[60px] text-secondary tracking-[0.4px]">
              Active Partnerships Across East Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
