"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Legal Services",
      shortDesc: "Comprehensive Legal Solutions for Your Business",
      fullDesc: "We help businesses navigate complex legal, regulatory, and commercial challenges, providing actionable advice that protects your interests and supports sustainable growth. We serve local and multinational companies across multiple sectors.",
      image: "https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275560/Licensing_Compliance_sjtxrw.png",
      benefits: [
        "Corporate & Commercial Law",
        "Mergers & Acquisitions",
        "Regulatory Compliance",
        "Dispute Resolution",
        "Employment & Compensation",
        "Intellectual Property",
        "Banking & Finance",
        "Real Estate & Property"
      ]
    },
    {
      title: "Tax Services",
      shortDesc: "Tax Solutions that Drive Compliance and Growth",
      fullDesc: "At Serena Consulting, we go beyond advice, we partner with your business to implement practical tax strategies that reduce risk, ensure compliance, and support sustainable growth. Whether you are establishing an operation, managing ongoing obligations, or planning complex transactions, we provide clarity, control, and actionable solutions.",
      image: "https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275560/Tendering_Bid_Support_uhigva.png",
      benefits: [
        "Tax Determination & Advice",
        "Compliance Monitoring",
        "TRA Correspondence Management",
        "Representation at Appeals",
        "Tax Health Check & Due Diligence",
        "Corporate Tax Planning",
        "VAT & Customs Advisory",
        "Tax Audits Support"
      ]
    },
    {
      title: "Immigration Services",
      shortDesc: "Simplifying Cross-Border Mobility and Compliance",
      fullDesc: "We partner with you at every step of the immigration journey, from planning to arrival, ensuring compliance, efficiency, and peace of mind. We offer a full range of immigration and related compliance services.",
      image: "https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275560/Local_Partnership_Structuring_sxki3z.png",
      benefits: [
        "Work and Residence Permit Applications",
        "Special and Dependent Passes",
        "Visa Applications (Business, Tourist, Transit, Temporary)",
        "NIDA Registration and ID Processing",
        "Immigration Return Filings for Non-Citizens",
        "Passport Endorsement Services",
        "Advisory on Work and Residence Permit Matters"
      ]
    },
    {
      title: "Company Secretarial Services",
      shortDesc: "Company Registration and Compliance Support",
      fullDesc: "We provide comprehensive company secretarial services to help you establish and maintain your business presence in Tanzania with full regulatory compliance.",
      image: "https://res.cloudinary.com/ddgzjzd9q/image/upload/v1764275561/Procurement_Logistics_z7v8zo.png",
      benefits: [
        "Company Registration",
        "TRA - TIN & VAT Registrations",
        "VAT Certificate Obtaining",
        "Tax Clearance Certificate",
        "Bank Account Opening Assistance",
        "Financial Statements Filing",
        "Legal Tax Health Check",
        "Registered Business Address"
      ]
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
              className="font-source-serif font-semibold text-[120px] xs:text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] leading-none tracking-[6px] xs:tracking-[8px] sm:tracking-[12px] md:tracking-[16px] lg:tracking-[20px] whitespace-nowrap"
              style={{ color: "rgba(0, 0, 0, 0.44)", opacity: 0.06 }}
            >
              SERVICES
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] text-center">
            <h1 className="font-urbanist font-bold text-[42px] xs:text-[52px] sm:text-[64px] md:text-[76px] lg:text-[88px] text-[#85640e] tracking-[2.1px] xs:tracking-[2.6px] sm:tracking-[3.2px] md:tracking-[3.8px] lg:tracking-[4.4px] leading-[52px] xs:leading-[64px] sm:leading-[76px] md:leading-[88px] lg:leading-[100px] mb-6">
              Our Services
            </h1>
            <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[26px] sm:leading-[30px] md:leading-[34px] lg:leading-[38px] text-[#585858] max-w-[800px] tracking-[0.4px]">
              Comprehensive Legal, Tax & Immigration solutions for businesses operating in Tanzania
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-white w-full pt-0 pb-16 sm:pb-20 lg:pb-28 relative">
        <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Sidebar - Service List */}
            <div className="lg:col-span-4">
              <h2 className="font-urbanist font-semibold text-[22px] sm:text-[24px] md:text-[26px] text-[#1d1d1b] mb-8 tracking-[0.8px]">
                Explore Our Expertise
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-5 rounded-lg transition-all duration-300 border-2 ${
                      activeService === index
                        ? "bg-[#85640e] border-[#85640e] text-white"
                        : "bg-white border-gray-200 text-[#1d1d1b] hover:border-[#85640e]/30"
                    }`}
                  >
                    <h3 className={`font-urbanist font-semibold text-[17px] sm:text-[18px] mb-2 tracking-[0.5px] ${
                      activeService === index ? "text-white" : "text-[#1d1d1b]"
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`font-inter text-[14px] sm:text-[15px] leading-[22px] ${
                      activeService === index ? "text-white/90" : "text-[#585858]"
                    }`}>
                      {service.shortDesc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content - Active Service Details */}
            <div className="lg:col-span-8">
              <div className="relative">
                {/* Service Image */}
                <div className="w-full h-[240px] sm:h-[280px] lg:h-[320px] rounded-2xl overflow-hidden mb-8">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Service Content */}
                <div>
                  <h2 className="font-urbanist font-bold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] text-[#85640e] mb-6 tracking-[1.2px] leading-[38px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px]">
                    {services[activeService].title}
                  </h2>
                  <p className="font-inter text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[28px] sm:leading-[30px] md:leading-[32px] text-[#1d1d1b] mb-10 tracking-[0.4px]">
                    {services[activeService].fullDesc}
                  </p>

                  {/* Benefits List */}
                  <div>
                    <h3 className="font-urbanist font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[#1d1d1b] mb-6 tracking-[0.6px]">
                      What We Provide
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services[activeService].benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                          <svg className="w-6 h-6 text-[#85640e] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
                          </svg>
                          <p className="font-inter text-[15px] sm:text-[16px] leading-[24px] text-[#1d1d1b]">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white w-full py-20 sm:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#85640e] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#85640e] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[120px] relative z-10">
          <div className="text-center max-w-[900px] mx-auto">
            <h2 className="font-urbanist font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[52px] text-[#85640e] mb-6 tracking-[1.6px] leading-[42px] sm:leading-[48px] md:leading-[54px] lg:leading-[62px]">
              Ready to Get Started?
            </h2>
            <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] text-[#585858] mb-10 leading-[28px] sm:leading-[32px] tracking-[0.4px]">
              Contact our Client Services Team to discuss how we can support your business in Tanzania
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#85640e] text-white font-inter font-semibold text-[16px] sm:text-[17px] px-10 py-4 rounded-full hover:bg-[#85640e]/90 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
