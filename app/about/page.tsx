"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const achievements = [
    {
      number: "10+",
      title: "Successful Licence Facilitation Projects",
      description: "We've successfully guided international investors through Tanzania's complex licensing process."
    },
    {
      number: "100%",
      title: "Regulatory Compliance Record",
      description: "Every project we manage maintains full compliance with local and international standards."
    },
    {
      number: "50+",
      title: "Active Partnerships Across East Africa",
      description: "Strong network of vetted local partners and stakeholders throughout the region."
    }
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Integrity",
      description: "We operate with complete transparency and ethical standards in every engagement."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Expertise",
      description: "Deep knowledge of Tanzania's mining sector and regulatory framework."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Partnership",
      description: "Building lasting relationships with investors and local communities."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Excellence",
      description: "Commitment to delivering exceptional results on every project."
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
              ABOUT US
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] text-center">
            <h1 className="font-urbanist font-bold text-[42px] xs:text-[52px] sm:text-[64px] md:text-[76px] lg:text-[88px] text-[#85640e] tracking-[2.1px] xs:tracking-[2.6px] sm:tracking-[3.2px] md:tracking-[3.8px] lg:tracking-[4.4px] leading-[52px] xs:leading-[64px] sm:leading-[76px] md:leading-[88px] lg:leading-[100px] mb-6">
              About Us
            </h1>
            <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[26px] sm:leading-[30px] md:leading-[34px] lg:leading-[38px] text-[#585858] max-w-[800px] tracking-[0.4px]">
              Your trusted gateway to Tanzania's mining sector
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white w-full pt-0 pb-16 sm:pb-20 lg:pb-24 relative">
        <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="font-urbanist font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] text-[#85640e] mb-6 tracking-[1.6px] leading-[42px] sm:leading-[48px] md:leading-[54px] lg:leading-[58px]">
                Who We Are
              </h2>
              <p className="font-inter text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[28px] sm:leading-[30px] md:leading-[32px] text-[#1d1d1b] mb-6 tracking-[0.4px]">
                WorldShine Mining Company Limited is a Tanzanian liaison and project management firm that simplifies entry into the mining sector. We connect international investors with compliant licences, local partnerships, and supply networks — ensuring every project runs efficiently and responsibly.
              </p>
              <p className="font-inter text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[28px] sm:leading-[30px] md:leading-[32px] text-[#1d1d1b] tracking-[0.4px]">
                With deep regulatory access, proven commercial experience, and trusted local networks, we deliver seamless project execution from planning to operation. Our team combines international best practices with local expertise to help you navigate Tanzania's mining landscape with confidence.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275560/Licensing_Compliance_sjtxrw.png"
                  alt="WorldShine Mining"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-50 w-full py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px]">
          <h2 className="font-urbanist font-bold text-[32px] sm:text-[38px] md:text-[44px] text-[#85640e] mb-12 sm:mb-16 text-center tracking-[1.6px]">
            Our Track Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 sm:p-10 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <p className="font-urbanist font-bold text-[48px] sm:text-[56px] md:text-[64px] text-[#85640e] mb-4">
                  {achievement.number}
                </p>
                <h3 className="font-urbanist font-semibold text-[20px] sm:text-[22px] text-[#1d1d1b] mb-3 tracking-[0.6px]">
                  {achievement.title}
                </h3>
                <p className="font-inter text-[15px] sm:text-[16px] leading-[24px] text-[#585858]">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white w-full py-16 sm:py-20 lg:py-24 relative">
        <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px]">
          <h2 className="font-urbanist font-bold text-[32px] sm:text-[38px] md:text-[44px] text-[#85640e] mb-12 sm:mb-16 text-center tracking-[1.6px]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-[#85640e]">
                  {value.icon}
                </div>
                <h3 className="font-urbanist font-semibold text-[20px] sm:text-[22px] text-[#1d1d1b] mb-3 tracking-[0.6px]">
                  {value.title}
                </h3>
                <p className="font-inter text-[15px] sm:text-[16px] leading-[24px] text-[#585858]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white w-full py-20 sm:py-24 lg:py-28 relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#85640e] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#85640e] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px] relative z-10">
          <div className="text-center max-w-[900px] mx-auto">
            <h2 className="font-urbanist font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[52px] text-[#85640e] mb-6 tracking-[1.6px] leading-[42px] sm:leading-[48px] md:leading-[54px] lg:leading-[62px]">
              Let's Work Together
            </h2>
            <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] text-[#585858] mb-10 leading-[28px] sm:leading-[32px] tracking-[0.4px]">
              Ready to explore opportunities in Tanzania's mining sector? Get in touch with our team today.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#85640e] text-white font-inter font-semibold text-[16px] sm:text-[17px] px-10 py-4 rounded-full hover:bg-[#85640e]/90 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
