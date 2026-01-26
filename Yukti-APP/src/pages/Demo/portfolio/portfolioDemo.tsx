import React, { useState, useEffect } from "react";

/* --- 1. ICONS (Zero-Dependency SVGs) --- */
const Icons = {
  Moon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  Sun: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="M4.22 4.22l1.42 1.42" />
      <path d="M18.36 18.36l1.42 1.42" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="M4.22 19.78l1.42-1.42" />
      <path d="M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  ),
  Menu: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  X: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 18 18" />
    </svg>
  ),
  Instagram: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Twitter: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
};

/* --- 2. DATA: PORTFOLIO ITEMS (With Fixed Image) --- */
const PROJECTS = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Photography",
    // FIXED IMAGE LINK BELOW:
    img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80",
    size: "tall",
  },
  {
    id: 2,
    title: "Apex Branding",
    category: "Branding",
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
    size: "short",
  },
  {
    id: 3,
    title: "Minimal Chair",
    category: "Product",
    img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
    size: "short",
  },
  {
    id: 4,
    title: "Urban Geometry",
    category: "Photography",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    size: "tall",
  },
  {
    id: 5,
    title: "Silk & Stone",
    category: "Fashion",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    size: "tall",
  },
  {
    id: 6,
    title: "Tech Interface",
    category: "UI/UX",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    size: "short",
  },
];

/* --- 3. MAIN APP --- */
export default function PortfolioWebsite() {
  const [isDark, setIsDark] = useState(false);
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const categories = [
    "All",
    "Photography",
    "Branding",
    "Product",
    "UI/UX",
    "Fashion",
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-opacity-80 backdrop-blur-md">
        <div className="text-2xl font-black tracking-tighter cursor-pointer">
          ARTFOLIO<span className="text-pink-500">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
          <a href="#work" className="hover:text-pink-500 transition-colors">
            WORK
          </a>
          <a href="#about" className="hover:text-pink-500 transition-colors">
            ABOUT
          </a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">
            CONTACT
          </a>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
          >
            {isDark ? <Icons.Sun /> : <Icons.Moon />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? <Icons.Sun /> : <Icons.Moon />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 text-4xl font-black ${
            isDark ? "bg-black" : "bg-white"
          }`}
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            WORK
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <Icons.X />
          </button>
        </div>
      )}

      {/* HERO SECTION */}
      <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
          WE CRAFT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
            DIGITAL MAGIC
          </span>
        </h1>
        <p
          className={`max-w-xl text-xl md:text-2xl leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          An award-winning creative studio focusing on branding, art direction,
          and digital experiences that leave a mark.
        </p>
      </header>

      {/* PORTFOLIO GRID */}
      <section id="work" className="px-6 pb-32 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-bold transition-all ${
                filter === cat
                  ? isDark
                    ? "bg-white text-black border-white"
                    : "bg-black text-white border-black"
                  : "border-gray-300 hover:border-pink-500 text-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  project.size === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-pink-400 text-sm font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.category}
                </p>
                <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <h3 className="text-white text-3xl font-bold">
                    {project.title}
                  </h3>
                  <div className="bg-white text-black p-2 rounded-full">
                    <Icons.ArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / TICKER */}
      <section
        id="about"
        className={`py-20 overflow-hidden ${
          isDark ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="whitespace-nowrap flex gap-8 animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-black text-transparent stroke-text opacity-30"
            >
              STRATEGY — DESIGN — DEVELOPMENT —
            </span>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-20 text-center">
          <p className="text-2xl md:text-4xl font-bold leading-tight">
            "We don't just design websites; we construct{" "}
            <span className="text-pink-500">digital ecosystems</span>. We
            believe that good design is obvious, but great design is
            transparent."
          </p>
          <div className="mt-12 flex justify-center gap-12 text-sm font-bold uppercase tracking-widest">
            <div>
              <span className="block text-4xl mb-2 text-pink-500">85+</span>
              Awards Won
            </div>
            <div>
              <span className="block text-4xl mb-2 text-pink-500">200+</span>
              Projects
            </div>
            <div>
              <span className="block text-4xl mb-2 text-pink-500">10y</span>
              Experience
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="px-6 py-32 max-w-7xl mx-auto text-center">
        <p className="text-sm font-bold uppercase tracking-widest mb-6 text-pink-500">
          Available for new projects
        </p>
        <a
          href="mailto:hello@artfolio.com"
          className="text-5xl md:text-8xl font-black hover:text-pink-500 transition-colors break-all"
        >
          hello@artfolio.com
        </a>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 gap-6">
          <p className="text-sm text-gray-500">
            © 2026 Artfolio Studio. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-500 transition-colors">
              <Icons.Instagram />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <Icons.Twitter />
            </a>
          </div>
        </div>
      </footer>

      {/* CSS for Outline Text & Marquee */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px ${
            isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
          };
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
        }
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
