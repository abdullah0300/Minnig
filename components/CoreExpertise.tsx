"use client";

export default function CoreExpertise() {
  const services = [
    {
      title: "Licensing & Compliance",
      description: "Secure permits and approvals faster.",
      image: "https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275560/Licensing_Compliance_sjtxrw.png",
    },
    {
      title: "Tendering & Bid Support",
      description: "Win tenders with expert documentation.",
      image: "https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275560/Tendering_Bid_Support_uhigva.png",
    },
    {
      title: "Local Partnership Structuring",
      description: "Build strong, compliant JV alliances.",
      image: "https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275560/Local_Partnership_Structuring_sxki3z.png",
    },
    {
      title: "Procurement & Logistics",
      description: "Source, supply, and deliver across Tanzania.",
      image: "https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275561/Procurement_Logistics_z7v8zo.png",
    },
    {
      title: "ESG & Sustainability Advisory",
      description: "Develop ethical and community-aligned operations.",
      image: "https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275560/ESG_Sustainability_Advisory_aei3o0.png",
    },
  ];

  return (
    <section
      id="core-expertise"
      className="bg-white w-full py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto h-full relative px-4 sm:px-6 lg:px-8">
        {/* Background Watermark "SERVICES" */}
        <div className="absolute top-[180px] sm:top-[200px] md:top-[220px] lg:top-[240px] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <p
            className="font-source-serif font-semibold text-[140px] xs:text-[160px] sm:text-[200px] md:text-[250px] lg:text-[300px] leading-none tracking-[7px] xs:tracking-[8px] sm:tracking-[10px] md:tracking-[15px] lg:tracking-[24px] whitespace-nowrap"
            style={{ color: "rgba(0, 0, 0, 0.44)", opacity: 0.05 }}
          >
            SERVICES
          </p>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            {/* Subtitle */}
            <p className="font-urbanist font-normal text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-[#585858] tracking-[0.6px] sm:tracking-[0.72px] md:tracking-[0.84px] lg:tracking-[1.6px] leading-[30px] sm:leading-[36px] md:leading-[40px] lg:leading-[46px] mb-2 sm:mb-3">
              What We Offer
            </p>

            {/* Main Heading */}
            <h2 className="font-urbanist font-bold text-[36px] xs:text-[42px] sm:text-[52px] md:text-[62px] lg:text-[72.52px] text-[#85640e] tracking-[1.8px] xs:tracking-[2.1px] sm:tracking-[2.6px] md:tracking-[3.1px] lg:tracking-[3.626px] leading-[48px] xs:leading-[56px] sm:leading-[68px] md:leading-[86px] lg:leading-[131px]">
              Our Core Expertise
            </h2>
          </div>

          {/* Services - Staggered Masonry Layout matching Figma exactly */}
          <div className="relative w-full max-w-[1300px] mx-auto">
            {/* Mobile/Tablet: Stack vertically */}
            <div className="flex flex-col gap-6 lg:hidden">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-[6px] overflow-hidden">
                  <div className="w-full h-[240px] overflow-hidden rounded-[6px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="py-4 px-2">
                    <h3 className="font-urbanist font-semibold text-[18px] leading-[30px] text-[#1a1a1a] tracking-[0.9px] mb-2">
                      {service.title}
                    </h3>
                    <p className="font-urbanist font-normal text-[14px] leading-[20px] text-[#414141] tracking-[0.42px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Absolute positioned masonry layout matching Figma */}
            <div className="hidden lg:block relative" style={{ minHeight: '2100px' }}>
              {/* Card 1: Licensing & Compliance - Top Left */}
              <div
                className="absolute bg-white rounded-[6px] overflow-hidden"
                style={{
                  left: '113px',
                  top: '0px',
                  width: '551px'
                }}
              >
                <div className="w-full h-[310px] overflow-hidden rounded-[6px]">
                  <img
                    src={services[0].image}
                    alt={services[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-6 px-4">
                  <h3 className="font-urbanist font-semibold text-[23.67px] leading-[54.43px] text-[#1a1a1a] tracking-[1.1833px] mb-2">
                    {services[0].title}
                  </h3>
                  <p className="font-urbanist font-normal text-[18.93px] leading-[26.03px] text-[#414141] tracking-[0.568px]">
                    {services[0].description}
                  </p>
                </div>
              </div>

              {/* Card 2: Tendering & Bid Support - Top Right (offset down) */}
              <div
                className="absolute bg-white rounded-[6px] overflow-hidden"
                style={{
                  left: '798px',
                  top: '243px',
                  width: '489px'
                }}
              >
                <div className="w-full h-[290px] overflow-hidden rounded-[6px]">
                  <img
                    src={services[1].image}
                    alt={services[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-6 px-4">
                  <h3 className="font-urbanist font-semibold text-[22.13px] leading-[50.9px] text-[#1a1a1a] tracking-[1.1064px] mb-2">
                    {services[1].title}
                  </h3>
                  <p className="font-urbanist font-normal text-[17.7px] leading-[24.34px] text-[#414141] tracking-[0.5311px]">
                    {services[1].description}
                  </p>
                </div>
              </div>

              {/* Card 3: Local Partnership - Middle Left */}
              <div
                className="absolute bg-white rounded-[6px] overflow-hidden"
                style={{
                  left: '61px',
                  top: '584px',
                  width: '594px'
                }}
              >
                <div className="w-full h-[369px] overflow-hidden rounded-[6px]">
                  <img
                    src={services[2].image}
                    alt={services[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-6 px-4">
                  <h3 className="font-urbanist font-semibold text-[23.67px] leading-[35.5px] text-[#1a1a1a] tracking-[1.1833px] mb-2">
                    {services[2].title}
                  </h3>
                  <p className="font-urbanist font-normal text-[18.93px] leading-[26.03px] text-[#414141] tracking-[0.568px]">
                    {services[2].description}
                  </p>
                </div>
              </div>

              {/* Card 4: Procurement & Logistics - Large Center-Right */}
              <div
                className="absolute bg-white rounded-[6px] overflow-hidden"
                style={{
                  left: '522px',
                  top: '1050px',
                  width: '735px'
                }}
              >
                <div className="w-full h-[425px] overflow-hidden rounded-[6px]">
                  <img
                    src={services[3].image}
                    alt={services[3].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-6 px-4">
                  <h3 className="font-urbanist font-semibold text-[21.88px] leading-[50.33px] text-[#1a1a1a] tracking-[1.094px] mb-2">
                    {services[3].title}
                  </h3>
                  <p className="font-urbanist font-normal text-[17.5px] leading-[24.07px] text-[#414141] tracking-[0.5251px]">
                    {services[3].description}
                  </p>
                </div>
              </div>

              {/* Card 5: ESG & Sustainability - Bottom Left */}
              <div
                className="absolute bg-white rounded-[6px] overflow-hidden"
                style={{
                  left: '83px',
                  top: '1636px',
                  width: '630px'
                }}
              >
                <div className="w-full h-[354px] overflow-hidden rounded-[6px]">
                  <img
                    src={services[4].image}
                    alt={services[4].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-6 px-4">
                  <h3 className="font-urbanist font-semibold text-[21.88px] leading-[50.33px] text-[#1a1a1a] tracking-[1.094px] mb-2">
                    {services[4].title}
                  </h3>
                  <p className="font-urbanist font-normal text-[17.5px] leading-[24.07px] text-[#414141] tracking-[0.5251px]">
                    {services[4].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
