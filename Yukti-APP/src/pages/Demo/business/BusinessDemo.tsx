import React, { useState, useEffect } from 'react';

/* --- INTERNAL ICONS (No external install needed) --- */
const Icons = {
  Building: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
  ),
  Chart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
  ),
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
};

/* --- COMPONENTS --- */

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2";
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 shadow-lg hover:shadow-blue-900/20",
    secondary: "bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
    ghost: "text-slate-600 hover:text-blue-900 hover:bg-blue-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ sub, title, center = true, light = false }) => (
  <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
    <span className={`text-sm font-bold uppercase tracking-wider mb-2 block ${light ? 'text-blue-200' : 'text-blue-600'}`}>
      {sub}
    </span>
    <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    <div className={`h-1 w-20 bg-blue-600 mt-4 rounded-full ${center ? 'mx-auto' : ''}`} />
  </div>
);

const Card = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <Icon />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
    <a href="#" className="inline-flex items-center text-blue-600 font-semibold mt-4 group-hover:translate-x-1 transition-transform">
      Learn More <span className="ml-1"><Icons.ArrowRight /></span>
    </a>
  </div>
);

const Stat = ({ number, label }) => (
  <div className="text-center p-6 border-r border-slate-100 last:border-0">
    <div className="text-4xl font-black text-blue-900 mb-2">{number}</div>
    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{label}</div>
  </div>
);

/* --- MAIN PAGE --- */

export default function CorporateWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'About Us', href: '#about' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <div className="font-sans text-slate-600 bg-white min-h-screen">
      
      {/* 1. NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-2xl text-blue-900 cursor-pointer">
            <div className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center">
              <Icons.Building />
            </div>
            <span>Yukti <span className="text-blue-500">Business</span></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-medium hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex" variant="primary">
              Contact Sales
            </Button>
            <button className="md:hidden p-2 text-slate-800" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-6 shadow-xl flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium py-2 border-b border-slate-100">
                {link.name}
              </a>
            ))}
            <Button className="w-full justify-center mt-4" variant="primary">Contact Sales</Button>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Now Expanding to Asia Pacific
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Future-Proof <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Your Business
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              We provide enterprise-grade digital infrastructure and strategic consulting to help Global 500 companies scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">View Case Studies</Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <span>Trusted by:</span>
              <div className="flex gap-4 opacity-60 grayscale">
                <span className="font-bold text-lg">ACME Corp</span>
                <span className="font-bold text-lg">Stark Ind</span>
                <span className="font-bold text-lg">Wayne Ent</span>
              </div>
            </div>
          </div>

          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
               alt="Corporate Meeting" 
               className="rounded-2xl shadow-2xl relative z-10 w-full"
             />
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-[200px] hidden md:block">
                <div className="text-4xl font-bold text-blue-600 mb-1">98%</div>
                <p className="text-sm text-slate-600 font-medium">Client Retention Rate over 5 years</p>
             </div>
          </div>
        </div>
      </header>

      {/* 3. STATS SECTION */}
      <section className="border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat number="15+" label="Years Experience" />
            <Stat number="2.5k" label="Projects Delivered" />
            <Stat number="500+" label="Global Partners" />
            <Stat number="24/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading sub="Our Expertise" title="Comprehensive Business Solutions" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              icon={Icons.Chart} 
              title="Strategic Consulting" 
              desc="Data-driven insights to optimize your operational efficiency and market positioning." 
            />
            <Card 
              icon={Icons.Globe} 
              title="Global Expansion" 
              desc="Navigating international markets with compliance, logistics, and localization strategies." 
            />
            <Card 
              icon={Icons.Users} 
              title="Talent Acquisition" 
              desc="Building high-performance teams with our proprietary executive search network." 
            />
          </div>
        </div>
      </section>

      {/* 5. ABOUT / FEATURE SPLIT */}
      <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading sub="Why Choose Us" title="We Build Sustainable Growth" center={false} light={true} />
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              In a rapidly evolving digital landscape, stability and innovation must go hand in hand. Yukti Business bridges the gap between traditional business values and modern technological agility.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Enterprise-grade security protocols",
                "Scalable cloud infrastructure architecture",
                "24/7 dedicated support teams",
                "Transparent ROI tracking and reporting"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <span className="text-blue-500"><Icons.Check /></span> {item}
                </li>
              ))}
            </ul>

            <Button variant="primary" className="bg-blue-600 hover:bg-blue-500 border-none">
              Discover Our Mission
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
              alt="Team Collaboration" 
              className="rounded-2xl relative z-10 shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* 6. CONTACT / CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Join over 500+ enterprises that have scaled their operations with Yukti Business. 
            Schedule a free consultation today.
          </p>
          
          <div className="bg-white p-2 rounded-full shadow-lg max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="flex-1 px-6 py-3 rounded-l-full outline-none text-slate-700 bg-transparent"
            />
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors">
              Get Quote
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-4">No credit card required. Free 14-day feasibility study.</p>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-2xl text-white mb-6">
              <Icons.Building />
              <span>Yukti <span className="text-blue-500">Business</span></span>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Empowering global enterprises with next-gen solutions. We are committed to excellence, innovation, and sustainability.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Press & Media</a></li>
              <li><a href="#" className="hover:text-blue-400">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Whitepapers</a></li>
              <li><a href="#" className="hover:text-blue-400">Webinars</a></li>
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-blue-500"><Icons.MapPin /></span>
                <span>123 Business Park, Suite 400<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500"><Icons.Phone /></span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500"><Icons.Mail /></span>
                <span>hello@yuktibusiness.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 text-center text-xs">
          © 2026 Yukti Business Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
