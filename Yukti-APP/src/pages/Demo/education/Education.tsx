import React, { useState } from "react";

/* --- 1. ICONS (Zero-Dependency SVGs) --- */
const Icons = {
  Search: () => (
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Play: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  Book: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  Star: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Clock: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
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
  User: () => (
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

/* --- 2. DATA: COURSES (With Fixed Images) --- */
const CATEGORIES = [
  "All",
  "Development",
  "Design",
  "Business",
  "Marketing",
  "Photography",
];

const COURSES = [
  {
    id: 1,
    title: "Complete Python Bootcamp: From Zero to Hero",
    instructor: "Jose Portilla",
    rating: 4.8,
    reviews: 1240,
    price: 12.99,
    originalPrice: 84.99,
    category: "Development",
    lessons: 110,
    duration: "22h",
    bestseller: true,
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
  },
  {
    id: 2,
    title: "The Ultimate Graphic Design Masterclass",
    instructor: "Lindsay Marsh",
    rating: 4.7,
    reviews: 890,
    price: 14.99,
    originalPrice: 94.99,
    category: "Design",
    lessons: 85,
    duration: "14h",
    bestseller: false,
    // UPDATED WORKING IMAGE
    img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
  },
  {
    id: 3,
    title: "MBA in a Box: Business Strategy & Management",
    instructor: "365 Careers",
    rating: 4.6,
    reviews: 450,
    price: 11.99,
    originalPrice: 49.99,
    category: "Business",
    lessons: 42,
    duration: "8h",
    bestseller: true,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: 4,
    title: "Digital Marketing Agency: Start a Social Media Business",
    instructor: "Robin & Jesper",
    rating: 4.9,
    reviews: 2100,
    price: 19.99,
    originalPrice: 129.99,
    category: "Marketing",
    lessons: 140,
    duration: "35h",
    bestseller: true,
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  },
  {
    id: 5,
    title: "Photography Masterclass: A Complete Guide to Photography",
    instructor: "Phil Ebiner",
    rating: 4.7,
    reviews: 1500,
    price: 13.99,
    originalPrice: 199.99,
    category: "Photography",
    lessons: 220,
    duration: "25h",
    bestseller: false,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
  },
  {
    id: 6,
    title: "React JS - The Complete Guide (incl Hooks, Redux)",
    instructor: "Academind",
    rating: 4.8,
    reviews: 5600,
    price: 16.99,
    originalPrice: 99.99,
    category: "Development",
    lessons: 450,
    duration: "48h",
    bestseller: true,
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
];

/* --- 3. COMPONENTS --- */

const CourseCard = ({ course }) => (
  <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
    {/* Image Area */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={course.img}
        alt={course.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {course.bestseller && (
        <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
          Bestseller
        </div>
      )}
      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
        <Icons.Clock /> {course.duration}
      </div>
    </div>

    {/* Content Area */}
    <div className="p-5 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
          {course.category}
        </span>
        <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
          <Icons.Book /> {course.lessons} Lessons
        </span>
      </div>

      <h3 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
        {course.title}
      </h3>

      <p className="text-xs text-gray-500 mb-3">{course.instructor}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        <span className="text-yellow-500 font-bold text-sm">
          {course.rating}
        </span>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Icons.Star key={i} />
          ))}
        </div>
        <span className="text-xs text-gray-400">({course.reviews})</span>
      </div>

      {/* Footer / Price */}
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${course.price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${course.originalPrice}
          </span>
        </div>
        <button className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-full transition-colors">
          <Icons.Play />
        </button>
      </div>
    </div>
  </div>
);

export default function EducationalPlatform() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
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
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 hidden md:block">
              Lumina<span className="text-indigo-600">Learning</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg relative hidden md:block">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icons.Search />
            </div>
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-full text-sm outline-none transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium hover:text-indigo-600">
              Teach on Lumina
            </button>
            <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
            <button className="text-sm font-bold text-gray-700 hover:text-indigo-600">
              Log in
            </button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
              Sign up
            </button>
            <button className="md:hidden p-2">
              <Icons.Menu />
            </button>
          </div>
        </div>

        {/* Mobile Search (Visible only on small screens) */}
        <div className="md:hidden px-4 pb-3">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
                True Potential
              </span>
            </h1>
            <p className="text-indigo-100 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Learn from industry experts and get certified. Join 10 million+
              learners around the world mastering new skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-indigo-900 px-8 py-3.5 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                Explore Courses
              </button>
              <button className="border border-indigo-400 text-white px-8 py-3.5 rounded-full font-bold hover:bg-indigo-800 transition-colors">
                View Learning Paths
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-sm font-medium text-indigo-300">
              <span className="flex items-center gap-2">
                <Icons.Check /> 100k+ Online Courses
              </span>
              <span className="flex items-center gap-2">
                <Icons.Check /> Lifetime Access
              </span>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-[80px] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-[80px] opacity-40"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Students learning"
              className="rounded-2xl shadow-2xl relative z-10 border-4 border-white/10"
            />
            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Icons.User />
              </div>
              <div>
                <p className="font-bold text-sm">New Enrollments</p>
                <p className="text-xs text-gray-500">+1,200 today</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. CATEGORY TABS & GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <div className="text-4xl mb-4">🔍</div>
            <p className="font-medium text-gray-500">
              No courses found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="text-indigo-600 font-bold mt-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* 4. LEARNING PATH / FEATURES */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Lumina Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don't just provide courses; we provide a structured path to
              mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-1 bg-indigo-200 -z-0"></div>

            <div className="relative z-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-indigo-600 border-4 border-indigo-100">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose a Path</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">
                Select from our curated learning tracks designed for specific
                careers.
              </p>
            </div>

            <div className="relative z-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-indigo-600 border-4 border-indigo-100">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Learn & Practice</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">
                Watch video lessons and complete hands-on coding exercises and
                quizzes.
              </p>
            </div>

            <div className="relative z-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-indigo-600 border-4 border-indigo-100">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Certified</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">
                Earn a verified certificate to showcase your new skills to
                employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER / CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join our newsletter
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get the latest trends in technology, design, and business
              delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-bold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              We care about your data in our privacy policy.
            </p>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Lumina Learning</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-indigo-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Become an Instructor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Learners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Developers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400">
          © 2026 Lumina Learning Inc. All rights reserved.
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
