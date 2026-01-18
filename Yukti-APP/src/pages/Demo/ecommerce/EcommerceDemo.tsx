import React, { useState, useMemo, useEffect } from "react";

import {
  MdSearch,
  MdLocationPin,
  MdStar,
  MdFavorite,
  MdFavoriteBorder,
  MdShoppingCart,
  MdLightMode,
  MdDarkMode,
  MdClose,
  MdCheckCircle,
  MdSecurity,
  MdLocalOffer,
  MdDelete,
  MdLanguage,
} from "react-icons/md";

/* --- 1. ICONS --- */
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
  MapPin: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Star: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Heart: ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "currentColor" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  Cart: () => (
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  Sun: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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
  Moon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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
  Check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Shield: () => (
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Tag: () => (
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
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  ),
  Trash: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  Language: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

/* --- 2. TRANSLATION DICTIONARY --- */
const TEXT = {
  EN: {
    heroTitle: "Quality home services,",
    heroSub: "on demand.",
    heroDesc:
      "Experienced, hand-picked professionals to serve you at your doorstep.",
    searchPlaceholder: "Search for 'AC', 'Salon', 'Cleaning'...",
    login: "Login",
    logout: "Logout",
    yourCart: "Your Cart",
    cartEmpty: "Your cart is empty.",
    favorites: "Favorites",
    favEmpty: "No favorites yet.",
    remove: "Remove",
    add: "Add",
    added: "Added",
    subtotal: "Subtotal",
    discount: "Discount",
    total: "Total",
    checkout: "Login to Checkout",
    placeOrder: "Place Order",
    address: "Delivery Address",
    addrPlaceholder: "Enter House No, Landmark...",
    coupon: "Coupon Code",
    couponPlaceholder: "Try SAVE50",
    apply: "Apply",
    results: "Results for",
    recommended: "Recommended Services",
    noResults: "No services found.",
    tryChanging: "Try changing the location filter or search term.",
    clearFilters: "Clear Filters",
    safe: "UC Safe",
    transparent: "Transparent",
    verified: "Verified",
    company: "Company",
    partners: "Partners",
    contact: "Contact",
    welcome: "Welcome back",
    partnersReg: "Register as Professional",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    rights: "All rights reserved.",
    locationPrefix: "in",
  },
  TE: {
    heroTitle: "నాణ్యమైన ఇంటి సేవలు,",
    heroSub: "మీ ముంగిట.",
    heroDesc: "అనుభవజ్ఞులైన నిపుణులు మీ ఇంటి వద్దకే వచ్చి సేవలు అందిస్తారు.",
    searchPlaceholder: "'ఏసీ', 'సెలూన్', 'క్లీనింగ్' కోసం వెతకండి...",
    login: "లాగిన్",
    logout: "లాగౌట్",
    yourCart: "మీ కార్ట్",
    cartEmpty: "మీ కార్ట్ ఖాళీగా ఉంది.",
    favorites: "ఇష్టమైనవి",
    favEmpty: "ఇష్టమైనవి ఏవీ లేవు.",
    remove: "తొలగించు",
    add: "జోడించు",
    added: "జోడించబడింది",
    subtotal: "మొత్తం",
    discount: "రాయితీ",
    total: "పూర్తి మొత్తం",
    checkout: "బుక్ చేయడానికి లాగిన్ అవ్వండి",
    placeOrder: "ఆర్డర్ చేయండి",
    address: "డెలివరీ చిరునామా",
    addrPlaceholder: "ఇంటి నంబర్, ల్యాండ్‌మార్క్...",
    coupon: "కూపన్ కోడ్",
    couponPlaceholder: "SAVE50 ప్రయత్నించండి",
    apply: "వర్తించు",
    results: "ఫలితాలు",
    recommended: "మీ కోసం సిఫార్సు చేయబడినవి",
    noResults: "సేవలు దొరకలేదు.",
    tryChanging: "దయచేసి లొకేషన్ లేదా సెర్చ్ పదాన్ని మార్చండి.",
    clearFilters: "ఫిల్టర్లను క్లియర్ చేయండి",
    safe: "సురక్షితం",
    transparent: "పారదర్శక ధరలు",
    verified: "నిర్ధారించబడింది",
    company: "కంపెనీ",
    partners: "భాగస్వాములు",
    contact: "సంప్రదించండి",
    welcome: "స్వాగతం",
    partnersReg: "ప్రొఫెషనల్‌గా చేరండి",
    terms: "నిబంధనలు & షరతులు",
    privacy: "గోప్యతా విధానం",
    rights: "అన్ని హక్కులూ ప్రత్యేకించబడ్డాయి.",
    locationPrefix: "ప్రాంతం:",
  },
};

/* --- 3. BILINGUAL DATA --- */
const LOCALITIES = [
  { id: "All Areas", labelEn: "All Areas", labelTe: "అన్ని ప్రాంతాలు" },
  { id: "Housing Board", labelEn: "Housing Board", labelTe: "హౌసింగ్ బోర్డు" },
  { id: "Bus Stand", labelEn: "Bus Stand", labelTe: "బస్ స్టాండ్" },
  { id: "Rangampalli", labelEn: "Rangampalli", labelTe: "రంగంపల్లి" },
  { id: "Bhagatnagar", labelEn: "Bhagatnagar", labelTe: "భగత్‌నగర్" },
  { id: "Gouthami Nagar", labelEn: "Gouthami Nagar", labelTe: "గౌతమి నగర్" },
];

const CATEGORIES = [
  { id: "all", nameEn: "All", nameTe: "అన్నీ", icon: "🏠" },
  { id: "salon", nameEn: "Salon", nameTe: "సెలూన్", icon: "💇‍♀️" },
  { id: "ac", nameEn: "AC/Cooling", nameTe: "ఏసీ/కూలింగ్", icon: "❄️" },
  { id: "cleaning", nameEn: "Cleaning", nameTe: "క్లీనింగ్", icon: "🧹" },
  {
    id: "electrician",
    nameEn: "Electrician",
    nameTe: "ఎలక్ట్రీషియన్",
    icon: "⚡",
  },
  { id: "plumber", nameEn: "Plumber", nameTe: "ప్లంబర్", icon: "🔧" },
];

const SERVICES = [
  {
    id: 1,
    title: "AC Service & Repair",
    titleTe: "ఏసీ సర్వీస్ & రిపేర్",
    cat: "ac",
    area: "Housing Board",
    price: 499,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
  },
  {
    id: 2,
    title: "Bathroom Deep Clean",
    titleTe: "బాత్రూమ్ డీప్ క్లీన్",
    cat: "cleaning",
    area: "Bhagatnagar",
    price: 399,
    rating: 4.7,
    img: "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Haircut for Men",
    titleTe: "పురుషుల హెయిర్ కట్",
    cat: "salon",
    area: "Bus Stand",
    price: 199,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80",
  },
  {
    id: 4,
    title: "Sofa Cleaning",
    titleTe: "సోఫా క్లీనింగ్",
    cat: "cleaning",
    area: "Rangampalli",
    price: 599,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=500&q=80",
  },
  {
    id: 5,
    title: "Fan Installation",
    titleTe: "ఫ్యాన్ బిగింపు",
    cat: "electrician",
    area: "Housing Board",
    price: 149,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80",
  },
  {
    id: 6,
    title: "Tap Repair",
    titleTe: "ట్యాప్ రిపేర్",
    cat: "plumber",
    area: "Rangampalli",
    price: 99,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=500&q=80",
  },
  {
    id: 7,
    title: "House Painting",
    titleTe: "ఇంటి పెయింటింగ్",
    cat: "painting",
    area: "Gouthami Nagar",
    price: 1999,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80",
  },
  {
    id: 8,
    title: "Refrigerator Checkup",
    titleTe: "ఫ్రిజ్ రిపేర్",
    cat: "ac",
    area: "Bus Stand",
    price: 299,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&q=80",
  },
];

const BANNERS = [
  {
    id: 1,
    title: "Summer Sale",
    titleTe: "సమ్మర్ సేల్",
    sub: "Flat 20% OFF on AC",
    subTe: "ఏసీ పై 20% ఆఫర్",
    color: "bg-gradient-to-r from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Home Spa",
    titleTe: "హోమ్ స్పా",
    sub: "Relax at home",
    subTe: "ఇంటి వద్దే విశ్రాంతి",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
];

/* --- 4. MAIN APP --- */
export default function EcommerceDemo() {
  // --- STATE ---
  const [lang, setLang] = useState("EN"); // 'EN' or 'TE'
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [category, setCategory] = useState("all");

  // Search State
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Areas");
  const [notification, setNotification] = useState("");

  // Modals
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  // Form State
  const [address, setAddress] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // Helper to get text based on Lang
  const t = (key) => TEXT[lang][key] || key;

  // --- EFFECTS ---
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    const savedFavs = localStorage.getItem("favorites");
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // --- HANDLERS ---
  const notify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setUser({ name, phone: e.target.phone.value });
    setShowLogin(false);
    notify(`${t("welcome")}, ${name}!`);
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites((prev) => prev.filter((fid) => fid !== id));
      notify(
        lang === "EN"
          ? "Removed from favorites"
          : "ఇష్టమైన జాబితా నుండి తొలగించబడింది"
      );
    } else {
      setFavorites((prev) => [...prev, id]);
      notify(
        lang === "EN" ? "Added to favorites" : "ఇష్టమైన జాబితాకు జోడించబడింది"
      );
    }
  };

  const updateCart = (id: number, change: number) => {
    setCart((prev) => {
      const qty = (prev[id] ?? 0) + change;
      if (qty <= 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: qty };
    });
  };

  const applyCoupon = () => {
    if (coupon === "SAVE50") {
      setDiscount(50);
      notify(lang === "EN" ? "Coupon Applied!" : "కూపన్ వర్తించబడింది!");
    } else {
      setDiscount(0);
      notify(lang === "EN" ? "Invalid Coupon" : "చెల్లని కూపన్");
    }
  };

  // --- FILTERING ---
  const filteredServices = useMemo(() => {
    return SERVICES.filter((s) => {
      const matchCat = category === "all" || s.cat === category;
      const searchLower = search.toLowerCase();
      const title = (lang === "EN" ? s.title : s.titleTe).toLowerCase();
      const matchSearch =
        title.includes(searchLower) ||
        s.cat.toLowerCase().includes(searchLower);
      const matchLocation =
        selectedLocation === "All Areas" || s.area === selectedLocation;
      return matchCat && matchSearch && matchLocation;
    });
  }, [category, search, selectedLocation, lang]);

  const cartTotal = Object.entries(cart).reduce<number>((acc, [id, qty]) => {
  const serviceId = Number(id);
  const quantity = qty as number;

  const item = SERVICES.find((s) => s.id === serviceId);
  return acc + (item ? item.price * quantity : 0);
}, 0);

  // --- RENDER ---
  return (
    <div
      className={`flex flex-col min-h-screen font-sans transition-colors duration-300 ${
        isDark ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* 1. NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 px-4 py-3 border-b backdrop-blur-md flex items-center justify-between transition-colors ${
          isDark
            ? "bg-slate-900/90 border-slate-800"
            : "bg-white/90 border-gray-200"
        }`}
      >
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            P
          </div>
          <span className="font-bold text-lg tracking-tight hidden md:block">
            Peddapalli<span className="text-indigo-600">Connect</span>
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Lang Toggle */}
          <button
            onClick={() => setLang(lang === "EN" ? "TE" : "EN")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${
              isDark
                ? "bg-slate-800 text-slate-300"
                : "bg-gray-100 text-slate-700"
            }`}
          >
            <Icons.Language /> {lang}
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full ${
              isDark
                ? "bg-slate-800 text-yellow-400"
                : "bg-gray-100 text-slate-600"
            }`}
          >
            {isDark ? <Icons.Sun /> : <Icons.Moon />}
          </button>

          <button
            onClick={() => setShowFavorites(true)}
            className={`hidden md:block p-2 rounded-full relative ${
              isDark ? "bg-slate-800" : "bg-gray-100"
            }`}
          >
            <Icons.Heart filled={favorites.length > 0} />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => setShowCart(true)}
            className={`p-2 rounded-full relative ${
              isDark ? "bg-slate-800" : "bg-gray-100"
            }`}
          >
            <Icons.Cart />
            {Object.keys(cart).length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                {Object.keys(cart).length}
              </span>
            )}
          </button>

          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-gray-300 dark:border-slate-700">
              <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-xs">
                {user.name.charAt(0)}
              </div>
              <button
                onClick={() => setUser(null)}
                className="text-xs font-bold text-red-500 hover:underline"
              >
                {t("logout")}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-indigo-700 transition-all"
            >
              {t("login")}
            </button>
          )}
        </div>
      </nav>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 w-full max-w-7xl mx-auto pt-24 px-4">
        {notification && (
          <div className="fixed top-24 right-4 bg-slate-800 text-white px-4 py-3 rounded-xl shadow-lg z-[100] animate-bounce flex items-center gap-2">
            <Icons.Check /> {notification}
          </div>
        )}

        {/* --- HERO SECTION --- */}
        {!search && (
          <div className="relative w-full h-[400px] mb-10 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
                className="w-full h-full object-cover"
                alt="Background"
              />
              <div
                className={`absolute inset-0 ${
                  isDark ? "bg-slate-900/85" : "bg-white/85"
                }`}
              ></div>
            </div>

            <div className="relative z-10 text-center w-full px-4 mt-10">
              <h1
                className={`text-3xl md:text-5xl font-black mb-4 tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t("heroTitle")} <br />
                <span className="text-indigo-600">{t("heroSub")}</span>
              </h1>
              <p
                className={`font-medium mb-8 max-w-lg mx-auto text-lg ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {t("heroDesc")}
              </p>

              {/* SEARCH & FILTER */}
              <div
                className={`flex flex-col md:flex-row items-center max-w-2xl mx-auto rounded-2xl shadow-xl border overflow-hidden transition-all ${
                  isDark
                    ? "bg-slate-800 border-slate-700 shadow-slate-900/50"
                    : "bg-white border-gray-100 shadow-indigo-100/50"
                }`}
              >
                {/* Location Filter */}
                <div
                  className={`flex items-center w-full md:w-1/3 px-4 py-3 md:py-4 border-b md:border-b-0 md:border-r ${
                    isDark ? "border-slate-700" : "border-gray-100"
                  }`}
                >
                  <div className="text-indigo-500">
                    <Icons.MapPin />
                  </div>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className={`w-full bg-transparent font-bold text-sm outline-none ml-2 cursor-pointer ${
                      isDark ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {LOCALITIES.map((loc) => (
                      <option
                        key={loc.id}
                        value={loc.id}
                        className={isDark ? "bg-slate-800" : "bg-white"}
                      >
                        {lang === "EN" ? loc.labelEn : loc.labelTe}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Search */}
                <div className="flex items-center w-full md:w-2/3 px-4 py-3 md:py-4">
                  <div className="text-slate-400">
                    <MdSearch />
                  </div>
                  <input
                    type="text"
                    placeholder={t("searchPlaceholder")}
                    className={`w-full bg-transparent font-medium text-sm outline-none ml-3 ${
                      isDark
                        ? "text-white placeholder-slate-500"
                        : "text-slate-800 placeholder-slate-400"
                    }`}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start md:justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setCategory(cat.id);
                setSearch("");
              }}
              className={`flex-shrink-0 min-w-[90px] p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${
                category === cat.id
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg scale-105"
                  : isDark
                  ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                  : "bg-white border-gray-200 hover:border-indigo-300 shadow-sm"
              }`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-xs font-bold">
                {lang === "EN" ? cat.nameEn : cat.nameTe}
              </span>
            </button>
          ))}
        </div>

        {/* Banners */}
        {category === "all" && !search && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 animate-pulse-slow">
            {BANNERS.map((b) => (
              <div
                key={b.id}
                className={`h-40 rounded-3xl p-6 relative overflow-hidden text-white shadow-lg ${b.color}`}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-black">
                    {lang === "EN" ? b.title : b.titleTe}
                  </h3>
                  <p className="opacity-90 mb-3 text-sm">
                    {lang === "EN" ? b.sub : b.subTe}
                  </p>
                </div>
                <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
              </div>
            ))}
          </div>
        )}

        {/* Trust Markers */}
        <div
          className={`flex justify-around py-8 mb-12 border-y ${
            isDark
              ? "border-slate-800 bg-slate-800/50"
              : "border-indigo-50 bg-indigo-50/50"
          }`}
        >
          <div className="text-center">
            <div className="text-indigo-500 mb-2 mx-auto w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <Icons.Shield />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-wider">
              {t("safe")}
            </p>
          </div>
          <div className="text-center">
            <div className="text-indigo-500 mb-2 mx-auto w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <Icons.Tag />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-wider">
              {t("transparent")}
            </p>
          </div>
          <div className="text-center">
            <div className="text-indigo-500 mb-2 mx-auto w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <Icons.Check />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-wider">
              {t("verified")}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            {search ? `${t("results")} "${search}"` : t("recommended")}
            {selectedLocation !== "All Areas" && (
              <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md">
                {t("locationPrefix")}{" "}
                {lang === "EN"
                  ? selectedLocation
                  : LOCALITIES.find((l) => l.id === selectedLocation)?.labelTe}
              </span>
            )}
          </h2>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`group rounded-2xl border overflow-hidden hover:shadow-xl transition-all ${
                    isDark
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.img}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={service.title}
                    />

                    <button
                      onClick={() => toggleFavorite(service.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-transform hover:scale-110 shadow-sm ${
                        favorites.includes(service.id)
                          ? "bg-white text-red-500"
                          : "bg-white/80 text-gray-400"
                      }`}
                    >
                      <Icons.Heart filled={favorites.includes(service.id)} />
                    </button>

                    <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 text-slate-900 shadow-sm">
                      <span className="text-amber-500">
                        <Icons.Star />
                      </span>{" "}
                      {service.rating}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg leading-tight">
                        {lang === "EN" ? service.title : service.titleTe}
                      </h3>
                    </div>
                    {/* Display Localized Area Name */}
                    <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                      <Icons.MapPin />{" "}
                      {lang === "EN"
                        ? service.area
                        : LOCALITIES.find((l) => l.id === service.area)
                            ?.labelTe}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-dashed border-gray-200 dark:border-slate-700">
                      <span className="text-lg font-black">
                        ₹{service.price}
                      </span>
                      {cart[service.id] ? (
                        <div className="flex items-center gap-3 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg font-bold text-sm border border-indigo-100">
                          <button onClick={() => updateCart(service.id, -1)}>
                            -
                          </button>
                          <span>{cart[service.id]}</span>
                          <button onClick={() => updateCart(service.id, 1)}>
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => updateCart(service.id, 1)}
                          className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                        >
                          {t("add")}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 opacity-60 bg-gray-50 rounded-3xl dark:bg-slate-800">
              <div className="text-4xl mb-2">🔍</div>
              <p className="text-xl font-bold">{t("noResults")}</p>
              <p className="text-sm">{t("tryChanging")}</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                  setSelectedLocation("All Areas");
                }}
                className="text-indigo-500 underline mt-4 font-bold"
              >
                {t("clearFilters")}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* 3. FOOTER */}
      <footer
        className={`mt-auto py-12 px-6 border-t ${
          isDark
            ? "bg-slate-950 border-slate-800 text-slate-400"
            : "bg-gray-50 border-gray-200 text-slate-600"
        }`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3
              className={`font-black text-xl mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Peddapalli<span className="text-indigo-600">Connect</span>
            </h3>
          </div>
          <div>
            <h4
              className={`font-bold mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {t("company")}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>{t("terms")}</li>
              <li>{t("privacy")}</li>
            </ul>
          </div>
          <div>
            <h4
              className={`font-bold mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {t("partners")}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>{t("partnersReg")}</li>
            </ul>
          </div>
          <div>
            <h4
              className={`font-bold mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {t("contact")}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>help@ucpeddapalli.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-[10px] mt-12 pt-4 border-t border-gray-200 dark:border-slate-800">
          © 2026 UC Peddapalli. {t("rights")}
        </div>
      </footer>

      {/* --- MODALS --- */}

      {/* Login */}
      {showLogin && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-sm p-8 rounded-3xl shadow-2xl ${
              isDark ? "bg-slate-900 border border-slate-700" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black">{t("login")}</h2>
              <button onClick={() => setShowLogin(false)}>
                <Icons.X />
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className={`w-full p-3 rounded-xl border mt-1 outline-none font-bold ${
                    isDark
                      ? "bg-slate-800 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  }`}
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">
                  Mobile
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  className={`w-full p-3 rounded-xl border mt-1 outline-none font-bold ${
                    isDark
                      ? "bg-slate-800 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  }`}
                />
              </div>
              <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg mt-4">
                {t("login")}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Favorites Drawer */}
      {showFavorites && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex justify-end"
          onClick={() => setShowFavorites(false)}
        >
          <div
            className={`w-full max-w-md h-full p-6 shadow-2xl overflow-y-auto flex flex-col ${
              isDark ? "bg-slate-900" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black flex items-center gap-2">
                <Icons.Heart filled={true} /> {t("favorites")}
              </h2>
              <button
                onClick={() => setShowFavorites(false)}
                className="p-2 bg-gray-100 rounded-full dark:bg-slate-800"
              >
                <Icons.X />
              </button>
            </div>

            {favorites.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center opacity-50">
                <div className="text-4xl mb-2">💔</div>
                <p className="font-bold">{t("favEmpty")}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {favorites.map((id) => {
                  const s = SERVICES.find((service) => service.id === id);
                  if (!s) return null;
                  return (
                    <div
                      key={id}
                      className={`flex gap-4 p-3 rounded-xl border ${
                        isDark
                          ? "bg-slate-800 border-slate-700"
                          : "bg-gray-50 border-gray-100"
                      }`}
                    >
                      <img
                        src={s.img}
                        className="w-16 h-16 rounded-lg object-cover"
                        alt={s.title}
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">
                          {lang === "EN" ? s.title : s.titleTe}
                        </h4>
                        <p className="text-xs text-slate-500 mb-2">
                          ₹{s.price}
                        </p>
                        <button
                          onClick={() => toggleFavorite(id)}
                          className="text-xs text-red-500 flex items-center gap-1 font-bold"
                        >
                          <Icons.Trash /> {t("remove")}
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          updateCart(id, 1);
                          setShowFavorites(false);
                        }}
                        className="self-center bg-indigo-600 text-white px-3 py-1 rounded-lg text-xs font-bold"
                      >
                        {t("add")}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {showCart && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex justify-end"
          onClick={() => setShowCart(false)}
        >
          <div
            className={`w-full max-w-md h-full p-6 shadow-2xl overflow-y-auto flex flex-col ${
              isDark ? "bg-slate-900" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black">{t("yourCart")}</h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 bg-gray-100 rounded-full dark:bg-slate-800"
              >
                <Icons.X />
              </button>
            </div>

            {Object.keys(cart).length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center opacity-50">
                <Icons.Cart />
                <p className="mt-4 font-bold">{t("cartEmpty")}</p>
              </div>
            ) : (
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
  {Object.entries(cart).map(([id, qty]) => {
    const serviceId = Number(id);
    const quantity = qty as number;

    const item = SERVICES.find((s) => s.id === serviceId);

    return item ? (
      <div
        key={serviceId}
        className={`flex justify-between items-center p-3 rounded-xl border ${
          isDark
            ? "bg-slate-800 border-slate-700"
            : "bg-gray-50 border-gray-100"
        }`}
      >
        <div>
          <p className="font-bold text-sm">
            {lang === "EN" ? item.title : item.titleTe}
          </p>
          <p className="text-xs opacity-60">
            ₹{item.price} x {quantity}
          </p>
        </div>
        <div className="font-bold">
          ₹{item.price * quantity}
        </div>
      </div>
    ) : null;
  })}
</div>


                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 mb-2">
                    {t("address")}
                  </h4>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t("addrPlaceholder")}
                    className={`w-full p-3 rounded-xl border text-sm ${
                      isDark
                        ? "bg-slate-800 border-slate-700"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  />
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-500 mb-2">
                    {t("coupon")}
                  </h4>
                  <div className="flex gap-2">
                    <input
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder={t("couponPlaceholder")}
                      className={`flex-1 p-3 rounded-xl border text-sm font-bold uppercase ${
                        isDark
                          ? "bg-slate-800 border-slate-700"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    />
                    <button
                      onClick={applyCoupon}
                      className="bg-slate-900 text-white px-4 rounded-xl font-bold text-xs dark:bg-indigo-600"
                    >
                      {t("apply")}
                    </button>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl space-y-2 text-sm ${
                    isDark ? "bg-slate-800" : "bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between">
                    <span>{t("subtotal")}</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-green-500">
                    <span>{t("discount")}</span>
                    <span>- ₹{discount}</span>
                  </div>
                  <div className="flex justify-between font-black text-lg border-t pt-2 mt-2 border-dashed border-gray-300">
                    <span>{t("total")}</span>
                    <span>₹{cartTotal - discount}</span>
                  </div>
                </div>

                <button
                  disabled={!user || !address}
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
                >
                  {user ? t("placeOrder") : t("checkout")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
