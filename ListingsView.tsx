import { motion } from "motion/react";
import { Bed, Bath, Maximize, ArrowRight } from "lucide-react";
import { ThreeDButton } from "./ThreeDButton";

const properties = [
  {
    title: "The Obsidian Pavilion",
    location: "LOS ANGELES, CA",
    price: "$24,500,000",
    beds: 6,
    baths: 8,
    sqft: "12,400",
    featured: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQuZylRO_GHSJIJY1txT7pz8OU-4Vldh9lLKn48A5wZjYkUrQ1cF8e2W506w9Jb05RzgCzM4UKLCDbP5lc3vMcdzsDBOn8q9-jGx50WDO2icVlnC5vkcFxq7QNIHLHGxmAPDJvEeHypHlsNtJD6ddzD6ebW1g-Qe23GrYdUadSB1FRuVsKqhhDqS8Y_K-4TZA4799ovEO7YXVgZ1uwU_Cu7wIRtVkRAWSUHy_LAeyjAu7jszpJF7BYU9h1QPHLmywLFxpAlQVDGaE9"
  },
  {
    title: "Azure Horizon",
    location: "MALIBU, CA",
    price: "$18,750,000",
    beds: 4,
    baths: 5,
    sqft: "8,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhQlV0v05mOCgPZJq2Fe8QzIOVaIQrG_Os827bb8Y79J8a4P6QVNqhIRknQpuKldIzqUhYIfZQJHJb2QGExsNnl7RWj8fflOB-AGTa0IdukMW8Vft_u0E8QeVUiYHXOV3L9JZpVSzp2T19-T_NAI4TSOKWnBDzmn7QYI4VZlswPIvWM9YuNd-MnX9zu_Nsv05wRAMSYzoCE4GoAV4ZUx8RqHl-LEfF0FlUJPPJm4urEC3WQF_xlhMZ6ZTEa3dpkhYYW7n2s6x6BAIT"
  },
  {
    title: "The Zenith Suite",
    location: "NEW YORK, NY",
    price: "$32,000,000",
    beds: 5,
    baths: 6,
    sqft: "9,500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD25BgJiYIQb5cuU7UEyU2mftOOA6eCW2i9Vsa375xWEvRU-o9V_x1ZFBsxomdYgnAueUpWepEwwgIFHAf_HkeatpMj_tcXacWDVMd9e3KwSfraplHYXySItqDhSJ0zQnFm-xk-THBPstjfwc7gByFkkwQ6nyV9fYb-BsHo_rt7HKUgkYJwPZtg6WsivR24ehQrOjvhQVp_Pla_RzPYSHFnadVBCkSLurttHg6ZBd48wfKWhSCmWtn6JwLRi5asPkJ51AE5ZctHmhHy"
  },
  {
    title: "The Timber Vault",
    location: "ASPEN, CO",
    price: "$12,900,000",
    beds: 4,
    baths: 4,
    sqft: "6,800",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAwyIkF9lF6n5M2G1zGSOODuMtoCNMBVBhs5-pVTy-skGS9dm8kawnfbt9Na3j2Hgy3a5npJkig9VPgZ4vmNHDeel4khWvlVc6DigHqgIXd9UUqkhJ1L3FQnUyMx4pZYOD4RKgeDoLT_P5_OGYGgrobOXAg97Gt9SMYy4REz_qUSlQK6tnrYbuyKbCBNZHBWZpn0O1FA6jclGnuexpZREJPscyZMu-lkygaCQJbhzA1NLS0AbsIQOHwSSEXR-LBrKHWIqOckZllwJz"
  },
  {
    title: "The Copper Dune",
    location: "SCOTTSDALE, AZ",
    price: "$9,400,000",
    beds: 3,
    baths: 4,
    sqft: "5,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxXSCmo0WpWXsnmFrEszjRFxh_84EkapjyRFaegWVV4rT4zaV8vmfW_LiKlTal_lkGVEiieUsfbzyHv4n35vxUCpat5LSu1mNBgbtuHcZXsJpMHBmQ_4Azu4MgW1rXPzLEbf60U0_krf49jKgenzd8DRLaHtGfyCCzYnH977ANdZ0w9adfcRRE4iBCUuelbXMNbIH6ingZMe214qCpyg9yQobPsyJ8c47onklCnJ7407aU1yXypkaNzpUSoGX6rU6YEJfs8ZnKzBiO"
  },
  {
    title: "Glass Sanctuary",
    location: "MIAMI, FL",
    price: "$15,200,000",
    beds: 5,
    baths: 7,
    sqft: "10,100",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPu5plhfFentwyKtNlHdRBwI7x5kgmkC9sa-M3kCeEFuPtsqNFywonYG0YOO7XOFyft82STmfu5JzhWoPGe2Hfb4k00a9TNI2ez3D_95EqrplnPB7ScTLhmfBdbviqTpLxMfll-UIGRko6FIk1mcdfyxNls5SGdrHhRhvhVdddDcTgN19kcxaqA25-FuZhTnOauwI4_PIbga5_b-WQc-I1V_gPrLu3BZCQ_Pk8id-3enNRmkvmnB7lEznIteD-1n23yKHEQeGHhqgp"
  }
];

export function ListingsView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-[80px]"
    >
      <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-section-gap pb-16">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-xs text-gold uppercase tracking-[0.2em] mb-4 block"
          >
            Curated Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-on-surface mb-8 tracking-tighter font-bold"
          >
            Architectural Masterpieces
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-on-surface-variant max-w-2xl"
          >
            A strictly vetted collection of ultra-luxury estates, modern penthouses, and private islands. Discretion is our priority; precision is our standard.
          </motion.p>
        </div>
      </header>

      {/* Filter Bar */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter border-b border-outline-variant pb-8">
          <div className="flex gap-8">
            <button className="font-display text-xs text-on-surface border-b-2 border-gold pb-2 tracking-widest uppercase font-bold">ALL PROPERTIES</button>
            <button className="font-display text-xs text-on-surface-variant hover:text-on-surface transition-colors pb-2 tracking-widest uppercase font-bold">BUY</button>
            <button className="font-display text-xs text-on-surface-variant hover:text-on-surface transition-colors pb-2 tracking-widest uppercase font-bold">SELL</button>
            <button className="font-display text-xs text-on-surface-variant hover:text-on-surface transition-colors pb-2 tracking-widest uppercase font-bold">RENT</button>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <span className="font-display text-[10px] tracking-widest uppercase font-bold">SORT BY:</span>
            <select className="bg-transparent border-none font-display text-[10px] tracking-widest uppercase font-bold text-on-surface focus:ring-0 cursor-pointer">
              <option className="bg-surface">NEWEST ENTRIES</option>
              <option className="bg-surface">PRICE: HIGH TO LOW</option>
              <option className="bg-surface">SQUARE FOOTAGE</option>
            </select>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-gutter">
          {properties.map((prop, idx) => (
            <motion.div 
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                <img 
                  alt={prop.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={prop.image}
                />
                {prop.featured && (
                  <div className="absolute top-4 left-4 bg-gold text-surface px-3 py-1 font-display text-[10px] tracking-widest font-bold">FEATURED</div>
                )}
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-xl text-on-surface font-bold tracking-tight">{prop.title}</h3>
                    <p className="font-display text-[10px] tracking-widest text-on-surface-variant mt-1 uppercase font-bold">{prop.location}</p>
                  </div>
                  <span className="font-display text-xl text-gold font-bold">{prop.price}</span>
                </div>
                <div className="flex gap-6 py-4 border-y border-outline-variant/30 font-display text-[10px] tracking-widest text-on-surface-variant uppercase font-bold">
                  <span className="flex items-center gap-2"><Bed size={14} className="text-gold" /> {prop.beds} BEDS</span>
                  <span className="flex items-center gap-2"><Bath size={14} className="text-gold" /> {prop.baths} BATHS</span>
                  <span className="flex items-center gap-2"><Maximize size={14} className="text-gold" /> {prop.sqft} SQFT</span>
                </div>
                <ThreeDButton className="w-full !px-0 flex items-center justify-center">
                  Inquire Now
                </ThreeDButton>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination / Load More */}
        <div className="flex justify-center mt-20">
          <button className="border border-on-surface/20 px-12 py-4 font-display text-[10px] tracking-widest uppercase font-bold hover:bg-surface-container transition-colors text-on-surface">
            Load More Listings
          </button>
        </div>
      </section>

      {/* Advisory CTA Section */}
      <section className="bg-surface-container-lowest py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-6 font-bold tracking-tighter">Bespoke Acquisition Advisory</h2>
            <p className="font-sans text-lg text-on-surface-variant mb-8 max-w-lg leading-relaxed">
              Our partners provide private consultation for global portfolio management, ensuring every acquisition aligns with both aesthetic vision and long-term asset security.
            </p>
            <button className="bg-transparent border-2 border-on-surface text-on-surface px-10 py-4 font-display text-[10px] tracking-widest uppercase font-bold hover:bg-on-surface hover:text-surface transition-all">
              Schedule Consultation
            </button>
          </div>
          <div className="aspect-video relative overflow-hidden">
            <img 
              alt="Advisory Meeting Space" 
              className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700" 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
