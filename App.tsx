import { motion, useScroll, useTransform } from "motion/react";
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Copy, 
  Navigation,
  ExternalLink
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ThreeDButton } from "./components/ThreeDButton";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { CustomCursor } from "./components/CustomCursor";
import { SEO } from "./components/SEO";
import { PrivacyVault } from "./components/PrivacyVault";
import { ListingsView } from "./components/ListingsView";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'listings'>('home');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for hero
  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO title="Luxury Properties" location="The Heights" />
      <CustomCursor />
      <FloatingWhatsApp />
      <PrivacyVault isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-on-surface/10">
        <div className="flex justify-between items-center h-[80px] px-6 md:px-16 max-w-[1440px] mx-auto">
          <button 
            onClick={() => setCurrentView('home')}
            className="font-display text-xl font-bold tracking-tighter text-on-surface uppercase overflow-hidden cursor-pointer"
          >
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              className="block"
            >
              ESTATE ARCHITECT
            </motion.span>
          </button>
          <div className="hidden md:flex items-center space-x-8">
            {['Listings', 'Advisory', 'Architectural', 'Contact'].map((item, idx) => (
              <button 
                key={item}
                onClick={item === 'Advisory' ? () => setCurrentView('listings') : item === 'Listings' ? () => setCurrentView('home') : undefined}
                className={`font-display text-[10px] tracking-widest uppercase transition-colors duration-300 cursor-pointer ${
                  (item === 'Listings' && currentView === 'home') || (item === 'Advisory' && currentView === 'listings')
                    ? 'text-gold border-b border-gold pb-1' 
                    : 'text-on-surface-variant hover:text-gold'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <ThreeDButton className="!px-6 !py-3">
            Inquire Now
          </ThreeDButton>
        </div>
      </nav>

      {currentView === 'home' ? (
        <>
          {/* Hero Section */}
          <section ref={heroRef} className="relative min-h-screen flex items-center pt-[80px] overflow-hidden bg-surface">
            <motion.div 
              style={{ y: yParallax }}
              className="absolute inset-0 z-0 scale-110"
            >
              <img 
                className="w-full h-full object-cover blur-[1px] brightness-[0.3]" 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
                alt="Brutalist luxury villa"
              />
            </motion.div>
            
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl"
              >
                <motion.span variants={itemVariants} className="font-display text-xs tracking-[0.2em] text-gold uppercase mb-4 block">
                  Redefining Local Excellence
                </motion.span>
                <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-[80px] leading-[1.1] font-bold text-on-surface mb-8 tracking-tighter">
                  ESTATE ARCHITECT – <br/>Your Trusted Local Partner
                </motion.h1>
                <motion.p variants={itemVariants} className="font-sans text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
                  Curating the most prestigious real estate opportunities with architectural precision and absolute discretion. Experience a gallery-like approach to property acquisition.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6">
                  <ThreeDButton onClick={() => setCurrentView('listings')} className="!px-12 !py-5">
                    Browse Collection
                  </ThreeDButton>
                  <ThreeDButton variant="outline" className="!px-12 !py-5">
                    Private Consultation
                  </ThreeDButton>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="bg-[#0e0e0e] py-16 border-b border-on-surface/10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  className="flex flex-col gap-2"
                >
                  <span className="font-display text-4xl text-gold font-bold">100+</span>
                  <span className="font-display text-[10px] tracking-widest uppercase text-on-surface-variant">Verified Listings</span>
                </motion.div>
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  className="flex flex-col gap-2 border-y md:border-y-0 md:border-x border-on-surface/10 py-8 md:py-0 md:px-12"
                >
                  <span className="font-display text-4xl text-gold font-bold">10+ Years</span>
                  <span className="font-display text-[10px] tracking-widest uppercase text-on-surface-variant">Industry Experience</span>
                </motion.div>
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#B8860B" color="#B8860B" />)}
                  </div>
                  <span className="font-display text-[10px] tracking-widest uppercase text-on-surface-variant">5-Star Google Reviews</span>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Locality Section */}
          <section className="py-24 bg-surface relative">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/5] overflow-hidden"
                >
                  <img 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                    src="https://images.unsplash.com/photo-1545324418-f1d3ac1ef739?auto=format&fit=crop&q=80&w=1000" 
                    alt="Architecture"
                  />
                  <div className="absolute bottom-0 left-0 bg-surface-container p-8 max-w-[80%] border-l-4 border-gold">
                    <p className="font-display text-xl italic font-semibold">"We don't just sell property; we curate the skyline of your future."</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <span className="font-display text-xs tracking-widest text-gold uppercase">Local Authority</span>
                  <h2 className="font-display text-4xl font-bold">Unrivaled Expertise in the Premium Sector</h2>
                  <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
                    Our deep-rooted presence in the local market allows us access to off-market opportunities that remain invisible to the public. We understand the architectural heritage and the future urban planning of our neighborhoods.
                  </p>
                  <ul className="space-y-6">
                    {[
                      "Exclusive access to off-market luxury estates",
                      "Deep analytical insights on neighborhood appreciation",
                      "Discreet white-glove service for high-net-worth clients"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                        <span className="font-sans text-on-surface transition-colors group-hover:text-gold">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-[#1a1a1a]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
              <div className="flex justify-between items-end mb-16">
                <div>
                  <span className="font-display text-xs tracking-widest text-gold uppercase block mb-4">Client Testimonials</span>
                  <h2 className="font-display text-4xl font-bold">Voices of Discretion</h2>
                </div>
                <div className="hidden md:flex gap-4">
                  <button className="w-12 h-12 border border-on-surface/10 flex items-center justify-center hover:border-gold transition-colors text-on-surface">
                    <ChevronLeft />
                  </button>
                  <button className="w-12 h-12 border border-on-surface/10 flex items-center justify-center hover:border-gold transition-colors text-on-surface">
                    <ChevronRight />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    text: "Estate Architect handled our relocation with absolute professionalism. Their understanding of structural integrity saved us from several costly mistakes.",
                    author: "DR. JULIAN VANCE"
                  },
                  {
                    text: "The gallery-style viewing was a breath of fresh air. They found us an architectural masterpiece that wasn't even listed on the portals.",
                    author: "ELENA RODRIGUEZ"
                  },
                  {
                    text: "If you value your time and privacy, there is no other choice. Their advisory service is unparalleled in the region. Highly recommended.",
                    author: "MARCUS THORNE"
                  }
                ].map((review, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                    className="bg-surface-container p-10 border border-on-surface/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 bg-[#4285F4] flex items-center justify-center font-bold text-white shadow-xl">G</div>
                      <div>
                        <p className="font-display text-[10px] tracking-widest uppercase">Google Review</p>
                        <div className="flex gap-0.5 mt-1">
                          {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#B8860B" color="#B8860B" />)}
                        </div>
                      </div>
                    </div>
                    <p className="font-sans text-on-surface-variant mb-10 italic leading-relaxed">"{review.text}"</p>
                    <p className="font-display text-xs tracking-widest text-on-surface font-bold">{review.author}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Map & Contact */}
          <section className="py-24 bg-surface">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-on-surface/10">
                <div className="md:col-span-4 bg-surface-container p-16 flex flex-col justify-center">
                  <span className="font-display text-xs tracking-widest text-gold uppercase mb-4 block">Our Atelier</span>
                  <h2 className="font-display text-4xl font-bold mb-10 uppercase tracking-tighter">Visit Us</h2>
                  
                  <div className="space-y-12">
                    <div className="group cursor-pointer">
                      <p className="font-display text-[10px] tracking-widest text-on-surface-variant mb-2 uppercase">Headquarters</p>
                      <p className="font-sans text-lg leading-relaxed">1200 Architect Plaza,<br/>The Heights, LX 4402</p>
                      <button 
                        onClick={() => navigator.clipboard.writeText("1200 Architect Plaza, The Heights, LX 4402")}
                        className="mt-4 flex items-center gap-2 text-gold hover:brightness-125 transition-all text-[10px] font-display tracking-widest uppercase"
                      >
                        <Copy size={14} />
                        Copy Address
                      </button>
                    </div>
                    
                    <div className="group">
                      <p className="font-display text-[10px] tracking-widest text-on-surface-variant mb-2 uppercase">Direct Line</p>
                      <a href="tel:+18005550199" className="font-display text-2xl hover:text-gold transition-colors block animate-shake">
                        +1 (800) 555-0199
                      </a>
                    </div>
                    
                    <ThreeDButton 
                      onClick={() => window.open('https://maps.google.com/?q=1200+Architect+Plaza+The+Heights', '_blank')}
                      className="w-full flex items-center justify-center gap-2 group"
                    >
                      <Navigation size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Get Directions
                    </ThreeDButton>
                  </div>
                </div>
                
                <div className="md:col-span-8 min-h-[600px] relative overflow-hidden group">
                  <img 
                    className="w-full h-full object-cover grayscale brightness-[0.4] transition-all duration-1000 group-hover:scale-110" 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Map Background"
                  />
                  <div className="absolute inset-0 bg-gold/5 mix-blend-overlay"></div>
                  
                  {/* Animated Marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="w-24 h-24 bg-gold rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-gold border-2 border-white shadow-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <ListingsView />
      )}

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-on-surface/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-24 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold uppercase tracking-tighter mb-8">ESTATE ARCHITECT</h3>
            <p className="font-sans text-on-surface-variant leading-relaxed mb-8">
              Precision, discretion, and architectural integrity in every transaction.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          {[
            {
              title: "Portfolio",
              links: ["Residential Estates", "Penthouse Collection", "Commercial Spaces", "New Developments"],
              action: () => setCurrentView('listings')
            },
            {
              title: "Advisory",
              links: ["Investment Analysis", "Valuation Services", "Asset Management", "Legal Discretion"],
              action: () => setCurrentView('listings')
            }
          ].map(column => (
            <div key={column.title}>
              <h4 className="font-display text-xs tracking-widest uppercase mb-8 text-on-surface">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map(link => (
                  <li key={link}>
                    <button 
                      onClick={column.action}
                      className="font-sans text-sm text-on-surface-variant hover:text-gold transition-colors cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-xs tracking-widest uppercase mb-8 text-on-surface">Private List</h4>
            <p className="font-sans text-sm text-on-surface-variant mb-6">Join our private list for off-market previews.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-on-surface/20 py-3 text-on-surface focus:outline-none focus:border-gold transition-colors placeholder:text-on-surface-variant/50"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gold group-hover:translate-x-2 transition-transform">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-display text-[9px] tracking-widest text-on-surface-variant uppercase">© 2024 Estate Architect. Precise discretion guaranteed.</p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <button 
                key={item}
                onClick={item === 'Privacy Policy' ? () => setIsPrivacyOpen(true) : undefined}
                className="font-display text-[9px] tracking-widest text-on-surface-variant hover:text-gold uppercase transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
