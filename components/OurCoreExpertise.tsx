export default function OurCoreExpertise() {
  const services = [
    {
      title: "Licensing & Compliance",
      description: "Secure permits and approvals faster.",
      image: "/images/service1.jpg"
    },
    {
      title: "Tendering & Bid Support",
      description: "Win tenders with expert documentation.",
      image: "/images/service2.jpg"
    },
    {
      title: "Local Partnership Structuring",
      description: "Build strong, compliant JV alliances.",
      image: "/images/service3.jpg"
    },
    {
      title: "Procurement & Logistics",
      description: "Source, supply, and deliver across Tanzania.",
      image: "/images/service4.jpg"
    },
    {
      title: "ESG & Sustainability Advisory",
      description: "Develop ethical and community-aligned operations.",
      image: "/images/service5.jpg"
    }
  ];

  return (
    <section id="services" className="relative py-20 max-w-[1440px] mx-auto">
      {/* Background Text */}
      <div className="absolute left-1/2 top-[80px] -translate-x-1/2 -translate-y-1/2 opacity-5">
        <h2 className="font-source-serif font-semibold text-[300.01px] text-[rgba(0,0,0,0.44)] tracking-[24.0008px] leading-[191.673px] whitespace-nowrap">
          SERVICES
        </h2>
      </div>

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        <p className="font-urbanist text-[32px] text-[#585858] tracking-[1.6px] leading-[46px] mb-2">
          What We Offer
        </p>
        <h2 className="font-urbanist font-bold text-[72.52px] text-primary tracking-[3.626px] leading-[131px]">
          Our Core Expertise
        </h2>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 px-16 space-y-32">
        {/* Service 1 - Left aligned */}
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="w-[551px] h-[310px] rounded-[5.917px] bg-gray-200 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Video Placeholder
            </div>
          </div>
          <div>
            <h3 className="font-urbanist font-semibold text-[23.667px] text-secondary tracking-[1.1833px] leading-[54.433px] mb-2">
              {services[0].title}
            </h3>
            <p className="font-urbanist text-[18.933px] text-[#414141] tracking-[0.568px] leading-[26.033px]">
              {services[0].description}
            </p>
          </div>
        </div>

        {/* Service 2 - Right aligned */}
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-urbanist font-semibold text-[22.128px] text-secondary tracking-[1.1064px] leading-[50.895px] mb-2">
              {services[1].title}
            </h3>
            <p className="font-urbanist text-[17.703px] text-[#414141] tracking-[0.5311px] leading-[24.341px]">
              {services[1].description}
            </p>
          </div>
          <div className="w-[489px] h-[290px] rounded-[5.532px] bg-gray-200 overflow-hidden ml-auto">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Video Placeholder
            </div>
          </div>
        </div>

        {/* Service 3 - Left aligned */}
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="w-[594px] h-[369px] rounded-[5.917px] bg-gray-200 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Video Placeholder
            </div>
          </div>
          <div>
            <h3 className="font-urbanist font-semibold text-[23.667px] text-secondary tracking-[1.1833px] leading-[35.5px] mb-2">
              {services[2].title}
            </h3>
            <p className="font-urbanist text-[18.933px] text-[#414141] tracking-[0.568px] leading-[26.033px]">
              {services[2].description}
            </p>
          </div>
        </div>

        {/* Service 4 - Right aligned */}
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-urbanist font-semibold text-[21.88px] text-secondary tracking-[1.094px] leading-[50.325px] mb-2">
              {services[3].title}
            </h3>
            <p className="font-urbanist text-[17.504px] text-[#414141] tracking-[0.5251px] leading-[24.068px]">
              {services[3].description}
            </p>
          </div>
          <div className="w-[735px] h-[425px] rounded-[5.47px] bg-gray-200 overflow-hidden ml-auto">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Video Placeholder
            </div>
          </div>
        </div>

        {/* Service 5 - Left aligned */}
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="w-[630px] h-[354px] rounded-[5.47px] bg-gray-200 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Video Placeholder
            </div>
          </div>
          <div>
            <h3 className="font-urbanist font-semibold text-[21.88px] text-secondary tracking-[1.094px] leading-[50.325px] mb-2">
              {services[4].title}
            </h3>
            <p className="font-urbanist text-[17.504px] text-[#414141] tracking-[0.5251px] leading-[24.068px]">
              {services[4].description}
            </p>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center mt-32 relative z-10">
        <h3 className="font-['Sawarabi_Mincho'] text-[73.719px] text-primary tracking-[3.6859px] leading-[72.261px]">
          Smart. Compliant. Connected.
        </h3>
      </div>
    </section>
  );
}
