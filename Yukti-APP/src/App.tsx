import { useState, useEffect, useRef, useCallback } from "react";
import BrochurePromotion from "./components/BrochurePromotion";
import ChatBot from "./components/ChatBot/ChatBot";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FaBolt } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


// ====================================================================
// 2. THEME CONFIGURATION HELPER (NEW)
// ====================================================================

const getThemeConfig = (theme) => {
	const isDark = theme === "dark";
	const gridColor = isDark ? "#fff" : "#000";
	const glow1Color = isDark ? "purple-900/20" : "purple-300/40";
	const glow2Color = isDark ? "indigo-900/20" : "indigo-300/40";

	return {
		isDark,
		textPrimary: isDark ? "text-gray-100" : "text-gray-900",
		textSecondary: isDark ? "text-gray-400" : "text-gray-600",
		sectionBg: isDark ? "bg-gray-900/50" : "bg-white/70",
		cardBg: isDark ? "bg-gray-800/70" : "bg-white/90",
		borderPrimary: isDark ? "border-gray-700" : "border-gray-200",
		accentColor: isDark ? "text-indigo-500" : "text-indigo-600",
		headerBg: isDark
			? "bg-[#0a0a0a]/90 backdrop-blur-md"
			: "bg-white/90 backdrop-blur-md shadow-lg",
		baseBg: isDark ? "bg-[#0a0a0a]" : "bg-gray-50",
		footerBg: isDark
			? "bg-[#0a0a0a] border-t border-gray-800"
			: "bg-white/50 border-t border-gray-200", // NEW: Footer BG
		headerBorder: isDark
			? "border-gray-700 shadow-md shadow-indigo-500/10"
			: "border-gray-200 shadow-lg shadow-indigo-300/40",
		// Background specific
		bgGlow1: `bg-${glow1Color}`,
		bgGlow2: `bg-${glow2Color}`,
		gridOverlayStyle: {
			backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
			backgroundSize: "50px 50px",
		},
		gridOverlayOpacity: isDark ? "opacity-[0.03]" : "opacity-[0.05]",
	};
};

// ====================================================================
// 3. BACKGROUND & NAVIGATION COMPONENTS
// (ThemedBackground, FloatingDock, TerminalDisplay remain unchanged)
// ====================================================================

// NEW: Themed Background (Refactored from GlowingBackground)
const ThemedBackground = ({ config }) => (
	<div
		className={`fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-500 ${config.baseBg}`}
	>
		<div
			className={`absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] ${config.bgGlow1} rounded-full blur-[120px] animate-pulse-slow`}
		></div>
		<div
			className={`absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] ${config.bgGlow2} rounded-full blur-[100px] animate-pulse-slow delay-1000`}
		></div>
		{/* Grid Overlay */}
		<div
			className={`absolute inset-0 ${config.gridOverlayOpacity}`}
			style={config.gridOverlayStyle}
		></div>
	</div>
);

// NEW: Floating Dock Navigation (Uses NeoIcons)
const FloatingDock = ({ activeSection, config }) => {
	const links = [
		{ id: "home", icon: <BsBoxSeam className="w-5 h-5" />, label: "Home" },
		{
			id: "services",
			icon: <FaBolt className="w-5 h-5" />,
			label: "Service",
		},
		{
			id: "contact",
			icon: <FaTerminal className="w-5 h-5" />,
			label: "Book",
		},
	];
	const dockBg = config.isDark
		? "bg-white/10 border-white/10"
		: "bg-gray-900/10 border-gray-900/10";
	const linkBase = config.isDark
		? "text-gray-400 hover:bg-white/20 hover:text-white"
		: "text-gray-500 hover:bg-gray-700/20 hover:text-gray-800";
	const linkActive = config.isDark
		? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50"
		: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50";

	return (
		<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none md:pointer-events-auto">
			<div
				className={`hidden md:flex items-center gap-2 px-4 py-3 backdrop-blur-xl rounded-full shadow-2xl transition-colors duration-500 ${dockBg} border`}
			>
				{links.map((link) => {
					const isActive = activeSection === link.id;
					return (
						<a
							key={link.id}
							href={`#${link.id}`}
							className={`p-2 rounded-full transition-all duration-300 flex items-center gap-2 ${isActive ? linkActive : linkBase
								}`}
						>
							{link.icon}
							{isActive && (
								<span className="text-sm font-medium pr-1">{link.label}</span>
							)}
						</a>
					);
				})}
			</div>
		</div>
	);
};

// NEW: Terminal Display (Hero Visual) - *Kept Dark for Thematic Consistency*
const TerminalDisplay = () => {
	const [lines, setLines] = useState([
		"> Initializing system...",
		"> Running diagnostics...",
		"> System booting...",
		"> Verifying encryption keys...",
		"> Connection established.",
	]);

	useEffect(() => {
		const commands = [
			"> Optimizing user experience...",
			"> Compiling assets...",
			"> 0 errors found.",
			"> Deployment successful.",
			"> Fetching coffee ☕...",
			"> Hydrating the DOM...",
			"> Minifying CSS bundle...",
			"> Allocating memory blocks...",
			"> Establishing neural link...",
			"> Handshaking with server...",
			"> Warning: Awesome overload detected.",
			"> Installing dependencies...",
			"> Resolving promise chain...",
			"> Pixel shifting in progress...",
			"> Loading 3D textures...",
			"> Pinging satellite...",
			"> Scaling vector graphics...",
			"> Generating seamless transitions...",
			"> Refactoring legacy code...",
			"> Debugging reality...",
			"> Success: Module loaded.",
			"> Encrypting data streams...",
			"> Parsing JSON response...",
			"> Warming up the servers...",
		];
		const interval = setInterval(() => {
			setLines((prevLines) => {
				const newLines = [...prevLines];
				if (newLines.length > 5) newLines.shift(); // Keep only last 5 lines
				newLines.push(commands[Math.floor(Math.random() * commands.length)]);
				return newLines;
			});
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full max-w-md mx-auto bg-[#0F0F0F] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs md:text-sm transform hover:scale-[1.02] transition-transform duration-500">
			<div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
				<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
				<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
				<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
				<div className="ml-auto text-gray-500">bash</div>
			</div>
			<div className="p-4 space-y-2 h-48 overflow-hidden text-green-400/90">
				{lines.map((line, i) => (
					<div key={i} className="animate-typewriter">
						{line}
					</div>
				))}
				<div className="animate-pulse">_</div>
			</div>
		</div>
	);
};

// ====================================================================
// 4. UTILITY COMPONENTS (website.txt & ENHANCEMENTS)
// (SectionSpotlight, ScrambledText, ScrollFadeIn, BentoCard, MagneticServiceCard, RoadmapStep, AuthModal, FAQItem, ContactForm remain unchanged)
// ====================================================================

// NEW: Section Spotlight Wrapper (Enhancement 1)
const SectionSpotlight = ({ children, className = "", config }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = useCallback((e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		// const centerX = rect.left + rect.width / 2;
		// const centerY = rect.top + rect.height / 2;
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setPosition({ x, y });
	}, []);

	// Spotlight color changes with theme
	const spotlightColor = config.isDark
		? "rgba(99, 102, 241, 0.15)"
		: "rgba(99, 102, 241, 0.3)";

	return (
		<div
			ref={ref}
			onMouseMove={handleMouseMove}
			className={`relative group overflow-hidden ${className}`}
		>
			<div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
				style={{
					background: `radial-gradient(400px at ${position.x}px ${position.y}px, ${spotlightColor} 0%, transparent 80%)`,
				}}
			/>
			{children}
		</div>
	);
};

// Scramble/Glitch Reveal
const ScrambledText = ({ text, delay = 0.5, speed = 40, className }) => {
	const [displayText, setDisplayText] = useState("");
	const finalString = text;
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?`~";
	const frameCount = 10;
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		let queue = finalString.split("").map((char, index) => ({
			from: char,
			to: char,
			start: delay * 1000 + index * speed,
			end: delay * 1000 + index * speed + frameCount * speed,
			char: char,
		}));
		let interval;

		const updateText = (now) => {
			let output = "";
			let hasResolved = true;

			for (let i = 0; i < queue.length; i++) {
				const item = queue[i];
				if (now < item.start) {
					output += " ";
					hasResolved = false;
				} else if (now < item.end) {
					output += characters.charAt(
						Math.floor(Math.random() * characters.length)
					);
					hasResolved = false;
				} else {
					output += item.char;
				}
			}

			setDisplayText(output);
			if (hasResolved) {
				clearInterval(interval);
			}
		};
		timerRef.current = setTimeout(() => {
			const startTime = performance.now();
			interval = setInterval(() => {
				updateText(performance.now() - startTime);
			}, speed / frameCount);
		}, delay * 1000);
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
			clearInterval(interval);
		};
	}, [finalString, delay, speed]);

	return <span className={className}>{displayText}</span>;
};

type ScrollFadeInProps = {
	children: React.ReactNode;
	delay?: number;
	once?: boolean;
};

const ScrollFadeIn = ({ children, delay = 0, once = true }: ScrollFadeInProps) => {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (once) {
						observer.unobserve(entry.target);
					}
				} else if (!once) {
					setIsVisible(false);
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [once]);

	return (
		<div
			ref={ref}
			className={`transition-opacity duration-700 transform invisible-pre-scroll ${isVisible ? "visible animate-scroll-fade-in" : ""
				}`}
			style={{ animationDelay: `${delay}s` }}
		>
			{children}
		</div>
	);
};

// NEW: Bento Grid Card (Enhancement 2)
const BentoCard = ({ title, icon, technologies, description, config }) => {
	const bg = config.isDark ? "bg-gray-800/70" : "bg-white/90";
	const border = config.isDark ? "border-gray-700" : "border-gray-200";
	const textTitle = config.isDark ? "text-white" : "text-gray-900";
	const textDesc = config.isDark ? "text-gray-400" : "text-gray-600";
	const techBg = config.isDark ? "bg-gray-700/80" : "bg-gray-100";
	const techText = config.isDark ? "text-gray-200" : "text-gray-700";

	return (
		<div
			className={`relative p-6 rounded-3xl border ${border} ${bg} shadow-xl transition-all duration-500 hover:shadow-indigo-500/20 group cursor-default h-full flex flex-col justify-between`}
		>
			<div>
				<div
					className={`text-4xl mb-4 text-indigo-400 group-hover:scale-105 transition-transform ${config.accentColor}`}
				>
					{icon}
				</div>
				<h3 className={`text-xl font-bold mb-2 ${textTitle}`}>{title}</h3>
				<p className={`text-sm mb-4 ${textDesc}`}>{description}</p>
			</div>
			<div
				className={`flex flex-wrap gap-2 mt-auto pt-4 border-t ${config.borderPrimary}/50`}
			>
				{technologies.slice(0, 4).map((tech) => (
					<span
						key={tech}
						className={`px-3 py-1 ${techBg} ${techText} rounded-lg text-xs font-medium`}
					>
						{tech}
					</span>
				))}
				{technologies.length > 4 && (
					<span className="px-3 py-1 bg-transparent text-gray-500 rounded-lg text-xs font-medium">
						+ {technologies.length - 4} more
					</span>
				)}
			</div>
		</div>
	);
};

// Magnetic Service Card
const useMagneticTilt = () => {
	const cardRef = useRef<HTMLDivElement | null>(null);
	const [tilt, setTilt] = useState({ x: 0, y: 0 });
	const handleMouseMove = useCallback((e) => {
		const card = cardRef.current;
		if (!card) return;
		const rect = card.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const x = (e.clientX - centerX) / (rect.width / 2);
		const y = (e.clientY - centerY) / (rect.height / 2);
		const maxTilt = 5;
		setTilt({
			x: -y * maxTilt,
			y: x * maxTilt,
		});
	}, []);
	const handleMouseLeave = useCallback(() => {
		setTilt({ x: 0, y: 0 });
	}, []);
	return { cardRef, tilt, handleMouseMove, handleMouseLeave };
};

type MagneticServiceCardProps = {
	s: any;
	config: any;
};

const MagneticServiceCard = ({ s, config }: MagneticServiceCardProps) => {
	const { cardRef, tilt, handleMouseMove, handleMouseLeave } =
		useMagneticTilt();
	const shiftX = tilt.y * 0.6;
	const shiftY = tilt.x * 0.6;
	// Aberration style for both themes
	const aberrationStyle = {
		textShadow: `${shiftX}px ${shiftY}px 1px rgba(255, 0, 100, 0.5), 
                 ${-shiftX}px ${-shiftY}px 1px rgba(0, 100, 255, 0.5)`,
		transition: "text-shadow 0.3s ease-out",
	};
	const bg = config.isDark ? "bg-gray-800/70" : "bg-white/90";
	const border = config.isDark ? "border-gray-700" : "border-gray-200";
	const textTitle = config.isDark ? "text-gray-100" : "text-gray-900";
	const textDesc = config.isDark ? "text-gray-400" : "text-gray-600";

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={`relative p-6 rounded-3xl border ${border} ${bg} shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 group cursor-pointer`}
			style={{
				transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
				transition: "transform 0.3s ease-out",
			}}
		>
			<div className="relative z-10">
				<div
					className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-105"
					style={aberrationStyle}
				>
					{s.icon}
				</div>
				<h4
					className={`text-xl font-semibold mb-2 ${textTitle}`}
					style={aberrationStyle}
				>
					{s.title}
				</h4>
				<p className={`text-sm ${textDesc}`}>{s.desc}</p>
			</div>
		</div>
	);
};

// Roadmap Step Component
const RoadmapStep = ({ step, index, totalSteps, config }) => {
	const isLast = index === totalSteps - 1;
	const primaryColorClass = "bg-purple-600/90 text-white shadow-purple-500/50";
	const connectorClass = "bg-purple-500/50";
	const cardBg = config.isDark ? "bg-gray-800/60" : "bg-white/60";
	const cardText = config.isDark ? "text-gray-400" : "text-gray-700";
	const cardBorder = config.isDark ? "border-gray-700" : "border-gray-200";

	return (
		<div className="flex w-full max-w-2xl">
			{/* Timeline Column */}
			<div className="flex flex-col items-center mr-6">
				{/* 1. Node */}
				<div
					className={`relative z-30 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 shadow-xl ${primaryColorClass} transform group-hover:scale-125`}
				>
					<span className="text-xl font-extrabold">{index + 1}</span>
					<div
						className={` absolute inset-0 rounded-full opacity-60 bg-purple-400 animate-pulse-node ${index === 0 ? "delay-500" : ""
							}`}
					></div>
				</div>
				{/* 2. Vertical Connector */}
				{!isLast && (
					<div className={`w-0.5 flex-grow ${connectorClass} z-10 my-1`}></div>
				)}
			</div>

			{/* Content Column */}
			<div className="pb-12 pt-1">
				<div
					className={`mt-0 h-full relative z-20 p-6 rounded-3xl backdrop-blur-md transition-all duration-500 border ${cardBorder} hover:border-purple-500/50 ${cardBg} shadow-xl hover:shadow-2xl hover:shadow-purple-500/10`}
				>
					<h4
						className={`text-xl font-bold mb-2 text-indigo-400 flex items-center gap-3 ${config.accentColor}`}
					>
						{step.icon} {step.title}
					</h4>
					<p className={cardText}>{step.desc}</p>
				</div>
			</div>
		</div>
	);
};

// Auth Modal Component
const AuthModal = ({ formType, setFormType, closeModal, config }) => {
	const isLogin = formType === "login";
	const bg = config.isDark ? "bg-gray-900" : "bg-white";
	const text = config.isDark ? "text-gray-100" : "text-gray-900";
	const inputBg = config.isDark ? "bg-gray-800" : "bg-gray-100";
	const inputBorder = config.isDark ? "border-gray-700" : "border-gray-300";
	const inactiveText = config.isDark
		? "text-gray-500 hover:text-gray-300"
		: "text-gray-400 hover:text-gray-600";

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4 transition-opacity duration-300">
			<div
				className={`w-full max-w-md p-6 rounded-3xl shadow-2xl ${bg} ${text} transition-all duration-500 transform scale-100 opacity-100 border border-indigo-500/50`}
			>
				<div className="flex justify-between items-center mb-6">
					<h3 className="text-2xl font-bold">
						{isLogin ? "Sign In" : "Register"}
					</h3>
					<button
						onClick={closeModal}
						className={`text-xl p-2 rounded-full transition-colors text-indigo-400 ${config.isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
							}`}
					>
						<MdClose className="w-6 h-6" />
					</button>
				</div>
				{/* Tab Switcher */}
				<div className={`flex mb-6 border-b ${config.borderPrimary}`}>
					<button
						onClick={() => setFormType("login")}
						className={`flex-1 py-2 font-semibold transition-colors duration-300 ${isLogin
							? "border-b-2 border-indigo-500 text-indigo-500"
							: inactiveText
							}`}
					>
						Login
					</button>
					<button
						onClick={() => setFormType("signup")}
						className={`flex-1 py-2 font-semibold transition-colors duration-300 ${!isLogin
							? "border-b-2 border-indigo-500 text-indigo-500"
							: inactiveText
							}`}
					>
						Sign Up
					</button>
				</div>

				{/* Form Content */}
				<form className="space-y-4">
					<input
						type="email"
						placeholder="Email Address"
						className={`w-full p-3 rounded-lg border ${inputBorder} focus:ring-2 focus:ring-indigo-500 ${inputBg} ${text} placeholder-gray-500`}
					/>
					{!isLogin && (
						<input
							type="text"
							placeholder="Full Name"
							className={`w-full p-3 rounded-lg border ${inputBorder} focus:ring-2 focus:ring-indigo-500 ${inputBg} ${text} placeholder-gray-500`}
						/>
					)}
					<input
						type="password"
						placeholder="Password"
						className={`w-full p-3 rounded-lg border ${inputBorder} focus:ring-2 focus:ring-indigo-500 ${inputBg} ${text} placeholder-gray-500`}
					/>
					<button
						type="submit"
						className="w-full py-3 mt-6 rounded-lg font-semibold text-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transform hover:scale-[1.01] transition-all duration-300"
					>
						{isLogin ? "Login" : "Create Account"}
					</button>
				</form>
			</div>
		</div>
	);
};

// ====================================================================
// 5. DATA & HOOKS (website.txt)
// (Data remains unchanged)
// ====================================================================

const serviceData = {
	"Content & Platform Focus": [
		{
			title: "Business & Corporate Websites",
			desc: "Elegant, professional platforms that beautifully showcase your brand, build lasting client trust, and attract meaningful connections.",
			icon: "🏢",
		},
		{
			title: "E-commerce & Online Stores",
			desc: "Secure, intuitive online shops complete with seamless product management, trusted payment gateways, and delightful shopping experiences.",
			icon: "🛍️",
		},
		{
			title: "Blogs & Content Platforms",
			desc: "Powerful, easy-to-manage hubs for sharing inspiring articles, guides, and stories that engage and grow your audience effortlessly.",
			icon: "✍️",
		},
		{
			title: "Portfolios & Creative Showcases",
			desc: "Stunning, tailored digital portfolios that highlight your creative work with elegance and help you attract the right opportunities.",
			icon: "🖼️",
		},
		{
			title: "Educational & Resource Platforms",
			desc: "Thoughtfully designed websites rich with knowledge, training materials, and resources that educate and empower your community.",
			icon: "📚",
		},
		{
			title: "High-Conversion Landing Pages",
			desc: "Focused, beautifully crafted single-page experiences with compelling calls-to-action designed to turn visitors into loyal customers.",
			icon: "🎯",
		},
	]
};

const roadmapSteps = [
	{
		icon: "💡",
		title: "Strategy & Planning",
		desc: "Defining objectives, target audience, technical requirements, and creating a detailed project plan.",
	},
	{
		icon: "🎨",
		title: "UX/UI Design",
		desc: "Wireframing, prototyping, and iterating on UX/UI designs to ensure a seamless and engaging user experience.",
	},
	{
		icon: "💻",
		title: "Development & Integration",
		desc: "Agile development using modern stacks (AI, Cloud-Native), CI/CD, and seamless integration with third-party services.",
	},
	{
		icon: "🚀",
		title: "Launch & Optimization",
		desc: "Zero-downtime deployment, post-launch monitoring, performance tuning, and ongoing iterative improvements.",
	},
];

const techData = [
	{
		title: "Frontend Development",
		icon: "⚛️",
		description:
			"Modern, reactive interfaces with a focus on speed and user experience.",
		technologies: [
			"Next.js (React)",
			"TypeScript",
			"Tailwind CSS",
			"Figma/Design Ops",
			"Web Performance",
		],
	},
	{
		title: "Backend & API",
		icon: "⚙️",
		description:
			"Scalable, secure, and maintainable server-side logic and robust API design.",
		technologies: [
			"Node.js (Express)",
			"Python/ML (Django)",
			"GoLang (Microservices)",
			"GraphQL / REST API",
			"Serverless Functions",
		],
	},
	{
		title: "Data & Storage",
		icon: "💾",
		description:
			"Optimized data solutions for both relational and non-relational storage needs.",
		technologies: [
			"PostgreSQL (RDBMS)",
			"MongoDB (NoSQL)",
			"Redis (Caching)",
			"Elasticsearch",
		],
	},
	{
		title: "Cloud & DevOps",
		icon: "☁️",
		description:
			"Automated, reliable, and observable infrastructure for continuous delivery.",
		technologies: [
			"AWS / GCP / Azure",
			"Kubernetes (K8s)",
			"Docker",
			"CI/CD (GitLab/GitHub)",
			"Microservices",
		],
	},
];

// Hook for scroll state and active section (Modified for FloatingDock)
const useScrollState = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const sectionRefs = useRef<Record<string, HTMLElement>>({});

	useEffect(() => {
		const sections = ["home", "services", "tech-stack", "contact"];
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		sections.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
				sectionRefs.current[id] = element;
			}
		});

		const handleScroll = () => {
			const scrollTopThreshold = 50;
			setIsScrolled(window.scrollY > scrollTopThreshold);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			Object.values(sectionRefs.current).forEach((el) =>
				observer.unobserve(el)
			);
		};
	}, []);

	return { isScrolled, activeSection };
};

// ====================================================================
// 6. MAIN COMPONENTS
// (Header remains unchanged)
// ====================================================================

// Header Component (Adapted for Dark/Light Theme)
const Header = ({ isScrolled, openAuthModal, toggleTheme, config }) => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const navItems = ["Home", "Services", "Tech Stack", "Contact"];

	const textPrimary = config.textPrimary;
	const headerBg = isScrolled ? config.headerBg : "bg-transparent";
	const headerBorder = isScrolled ? config.headerBorder : "border-transparent";
	const linkText = config.isDark
		? "text-gray-400 hover:text-white"
		: "text-gray-600 hover:text-gray-900";
	const linkAccent = config.isDark ? "text-gray-400" : "text-gray-500";
	const toggleIcon = config.isDark ? (
		<MdLightMode className="w-5 h-5" />
	) : (
		<MdDarkMode className="w-5 h-5" />
	);
	const toggleButtonClass = config.isDark
		? "text-white hover:bg-gray-700/50"
		: "text-gray-800 hover:bg-gray-200/50";
	const mobileNavBg = config.isDark
		? "bg-[#0a0a0a] bg-opacity-95"
		: "bg-white bg-opacity-95";

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-40 p-2 transition-all duration-400 ${headerBg}`}
		>
			<div
				className={`w-full max-w-6xl mx-auto flex items-center justify-between px-4 transition-all duration-500 ${isScrolled
					? "rounded-2xl border " + headerBorder
					: "rounded-none border-transparent"
					}`}
			>
				{/* Logo/Brand */}
				<div className="flex items-center gap-3 py-2">
					<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center animate-bounce-slow overflow-hidden">
						<img
							src="/logo.JPG"
							alt="Yuktigenesis Logo"
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="leading-tight">
						<div className={`text-lg font-semibold ${textPrimary}`}>
							{" "}
							Yukti Genesis{" "}
						</div>
						<div className={`text-xs ${linkAccent}`}>
							{" "}
							Intelligence Engineered{" "}
						</div>
					</div>
				</div>

				{/* Desktop Navigation & Actions */}
				<nav className="hidden lg:flex items-center space-x-6">
					{navItems.map((item, i) => (
						<a
							key={i}
							href={`#${item.toLowerCase().replace(" ", "-")}`}
							className={`font-medium transition-colors ${linkText}`}
						>
							{item}
						</a>
					))}
					{/* <button
						onClick={() => openAuthModal("login")}
						className="ml-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all transform hover:scale-105"
					>
						Client Login
					</button> */}
					<button
						onClick={toggleTheme}
						aria-label="Toggle Theme"
						className={`p-2 rounded-full transition-colors duration-300 ${toggleButtonClass}`}
					>
						{toggleIcon}
					</button>
				</nav>

				{/* Mobile Menu Button & Toggle */}
				<div className="flex items-center lg:hidden gap-2">
					<button
						onClick={toggleTheme}
						aria-label="Toggle Theme"
						className={`p-2 rounded-full transition-colors duration-300 ${toggleButtonClass}`}
					>
						{toggleIcon}
					</button>
					<button
						className={`${textPrimary} p-2`}
						onClick={() => setMobileNavOpen(true)}
					>
						<MdMenu className="w-6 h-6" />
					</button>
				</div>
			</div>

			{/* Mobile Nav Drawer */}
			{mobileNavOpen && (
				<div
					className={`fixed inset-0 z-50 ${mobileNavBg} backdrop-blur-lg p-6 lg:hidden transition-transform duration-300`}
				>
					<div className="flex justify-end">
						<button
							className={`${textPrimary} text-3xl`}
							onClick={() => setMobileNavOpen(false)}
						>
							<MdClose className="w-8 h-8" />
						</button>
					</div>
					<div className={`flex flex-col space-y-4 px-3 ${headerBg}`}>
						{navItems.map((item, i) => (
							<a
								key={i}
								href={`#${item.toLowerCase().replace(" ", "-")}`}
								onClick={() => setMobileNavOpen(false)}
								className={`py-3 text-2xl font-medium border-b ${config.borderPrimary} ${textPrimary} hover:text-indigo-400 transition-colors`}
							>
								{item}
							</a>
						))}
						{/* <button
							onClick={() => {
								openAuthModal("login");
								setMobileNavOpen(false);
							}}
							className="py-3 bg-indigo-600 text-white rounded-lg text-lg transform hover:scale-[0.99] transition-transform duration-300 mt-4"
						>
							Client Login / Signup
						</button> */}
					</div>
				</div>
			)}
		</header>
	);
};

// ====================================================================
// Dummy Components for completeness (FAQItem, ContactForm)
// ====================================================================

type FAQItemProps = {
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: () => void;
	config: any;
};

const FAQItem = ({
	question,
	answer,
	isOpen,
	onToggle,
	config,
}: FAQItemProps) => {
	const bg = config.isDark ? "bg-gray-800/70" : "bg-gray-100/70";
	const hoverBg = config.isDark
		? "hover:bg-gray-800/50"
		: "hover:bg-gray-100/50";
	const text = config.isDark ? "text-gray-200" : "text-gray-900";
	const descText = config.isDark ? "text-gray-400" : "text-gray-600";
	const border = config.isDark ? "border-gray-700" : "border-gray-200";

	return (
		<div
			className={`
        border ${border} rounded-lg p-4 cursor-pointer
        transition-all duration-300
        ${isOpen ? bg : hoverBg}
      `}
			onClick={onToggle}
		>
			{/* Question Row */}
			<div className={`flex justify-between items-center ${text}`}>
				<p className="font-semibold">{question}</p>
				<span
					className={`
            text-indigo-400 text-xl
            transform transition-transform duration-300
            ${isOpen ? "rotate-45" : "rotate-0"}
          `}
				>
					+
				</span>
			</div>

			{/* Answer */}
			{isOpen && (
				<div className={`mt-3 ${descText} text-sm animate-fadeIn`}>
					<p>{answer}</p>
				</div>
			)}
		</div>
	);
};


const ContactForm = ({ config }) => {
	const [selectedContactType, setSelectedContactType] = useState("form");
	const buttonBg = config.isDark ? "bg-gray-800" : "bg-gray-200";
	const buttonTextInactive = config.isDark
		? "text-gray-400 hover:bg-gray-700"
		: "text-gray-600 hover:bg-gray-300";
	const formBg = config.isDark ? "bg-gray-800/60" : "bg-white/60";
	const formBorder = config.isDark ? "border-gray-700" : "border-gray-200";
	const inputBg = config.isDark ? "bg-gray-700" : "bg-gray-50";
	const inputText = config.isDark ? "text-white" : "text-gray-900";
	const inputBorder = config.isDark ? "border-gray-600" : "border-gray-300";

	return (
		<div className="max-w-4xl mx-auto">
			<div
				className={`flex p-1 ${buttonBg} rounded-full mb-8 max-w-sm mx-auto`}
			>
				<button
					onClick={() => setSelectedContactType("form")}
					className={`flex-1 py-2 px-4 rounded-full font-semibold transition-all duration-300 ${selectedContactType === "form"
						? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/50"
						: buttonTextInactive
						}`}
				>
					Send a Message
				</button>
				<button
					onClick={() => setSelectedContactType("booking")}
					className={`flex-1 py-2 px-4 rounded-full font-semibold transition-all duration-300 ${selectedContactType === "booking"
						? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/50"
						: buttonTextInactive
						}`}
				>
					Book a Call
				</button>
			</div>
			<div className="max-w-3xl mx-auto">
				{selectedContactType === "form" ? (
					<form
						className={`space-y-4 p-8 rounded-2xl shadow-xl border transition-all duration-500 hover:shadow-2xl ${formBg} ${formBorder}`}
					>
						<input
							type="text"
							placeholder="Your Name"
							className={`w-full p-3 rounded-lg border ${inputBorder} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${inputBg} ${inputText} placeholder-gray-400`}
						/>
						<input
							type="email"
							placeholder="Your Email"
							className={`w-full p-3 rounded-lg border ${inputBorder} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${inputBg} ${inputText} placeholder-gray-400`}
						/>
						<textarea
							placeholder="Tell us about your project..."
							rows={4}
							className={`w-full p-3 rounded-lg border ${inputBorder} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${inputBg} ${inputText} placeholder-gray-400`}
						></textarea>
						<button
							type="submit"
							className="w-full py-3 mt-4 rounded-lg font-semibold text-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transform hover:scale-[1.01] transition-all duration-300"
						>
							Send Message
						</button>
					</form>
				) : (
					<div
						className={`p-8 rounded-2xl border border-indigo-500/50 ${config.isDark
							? "bg-gray-800/60 text-white"
							: "bg-white/60 text-gray-900"
							} shadow-2xl text-center space-y-4`}
					>
						<p className="text-xl font-medium">
							Schedule a discovery call to kick off your project.
						</p>
						<a
							href="https://calendar.app.google/XAsWAepWPhYPBvaG8"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block w-full md:w-auto px-10 py-3 rounded-lg font-semibold text-center bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 active:scale-[0.98]"
						>
							Book Now 🗓️
						</a>
						<a
							href="https://wa.me/8886070408?text=Hello%2C%20I%20want%20to%20contact%20you%20regarding%20your%20services."
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block w-full md:w-auto mt-4 ml-4 px-10 py-3 rounded-lg font-semibold text-center bg-green-500 text-white shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-[0.98] shadow-md hover:bg-green-600 text-white shadow-green-400/50"
						>
							<div className="flex items-center justify-center gap-2">
								{" "}
								<FaWhatsapp size={20} /> WhatsApp Chat{" "}
							</div>
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

// Footer (Adapted for Dark/Light Theme)
const Footer = ({ config }) => {
	const textSecondary = config.textSecondary;
	// const linkText = config.isDark ? "hover:text-white" : "hover:text-gray-900";
	// const iconColor = config.isDark
	//   ? "text-gray-400 hover:text-white"
	//   : "text-gray-500 hover:text-gray-900";
	const textTitle = config.isDark ? "text-white" : "text-gray-900";

	// IMPORTANT FIX: Footer wrapper now uses the explicit footerBg and padding
	return (
		<footer
			className={`relative transition-colors duration-500 ${config.footerBg}`}
		>
			<div className="max-w-6xl mx-auto px-6 py-12">
				{/* MAIN GRID */}
				<div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-start">

					{/* LEFT: Illustration */}
					<div className="flex justify-center md:justify-start">
						<img
							src="/footer/communication.png"
							alt="Human communication illustration"
							className="
                w-52
                opacity-90
                transition-transform duration-500
                hover:scale-105
                animate-fadeIn
              "
						/>
					</div>

					{/* RIGHT: CONTENT COLUMNS */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 animate-slideUp">

						{/* COLUMN 1: BRAND */}
						<div className="space-y-4">
							<h3 className={`text-2xl font-extrabold ${textTitle}`}>
								Yukti Genesis
							</h3>

							<p className={`text-sm leading-relaxed ${textSecondary}`}>
								A digital product studio crafting scalable, human-centric
								solutions using modern technology.
							</p>

							{/* Social Icons */}
							<div className="flex items-center gap-4 pt-2">
								{[
									{
										href: "https://www.linkedin.com/in/yukti-genesis-062507393",
										label: "LinkedIn",
										icon: <FaLinkedin size={20} />,
									},
									{
										href: "https://www.instagram.com/yuktigenesis",
										label: "Instagram",
										icon: <FaInstagram size={20} />,
									},
									{
										href: "mailto:yuktideveloper@gmail.com?subject=Request%20a%20call&body=Hello%2CYuktian",
										label: "Email",
										icon: <MdEmail size={20} />,
									},
									{
										href: "https://wa.me/8886070408?text=Hello%2C%20I%20want%20to%20contact%20you%20regarding%20your%20services.",
										label: "WhatsApp",
										icon: <FaWhatsapp size={20} />,
									},
								].map((item, i) => (
									<a
										key={i}
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={item.label}
										className={`
                      p-2 rounded-full transition-all duration-300
                      ${config.isDark
												? "text-gray-400 hover:text-white hover:bg-white/10"
												: "text-gray-600 hover:text-gray-900 hover:bg-gray-200"}
                      hover:scale-110
                    `}
									>
										{item.icon}
									</a>
								))}
							</div>
						</div>

						{/* COLUMN 2: SERVICES */}
						<div>
							<h4 className={`text-sm font-semibold mb-4 ${config.accentColor}`}>
								Services
							</h4>
							<ul className="space-y-3 text-sm">
								{[
									"Custom Web Apps",
									"E-Commerce & SaaS",
									"API Development",
								].map((item, i) => (
									<li key={i}>
										<a
											href="#services"
											className={`
                        relative inline-block transition-colors duration-300
                        ${textSecondary}
                        hover:text-indigo-500
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-indigo-500
                        after:transition-all after:duration-300
                        hover:after:w-full
                      `}
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* COLUMN 3: COMPANY */}
						<div>
							<h4 className={`text-sm font-semibold mb-4 ${config.accentColor}`}>
								Company
							</h4>
							<ul className="space-y-3 text-sm">
								{["About Us", "Blog", "Careers"].map((item, i) => (
									<li key={i}>
										<a
											href="#"
											className={`
                        relative inline-block transition-colors duration-300
                        ${textSecondary}
                        hover:text-indigo-500
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-indigo-500
                        after:transition-all after:duration-300
                        hover:after:w-full
                      `}
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* COLUMN 4: LEGAL */}
						<div>
							<h4 className={`text-sm font-semibold mb-4 ${config.accentColor}`}>
								Legal
							</h4>
							<ul className="space-y-3 text-sm">
								{["Terms of Service", "Privacy Policy", "Sitemap"].map(
									(item, i) => (
										<li key={i}>
											<a
												href="#"
												className={`
                          relative inline-block transition-colors duration-300
                          ${textSecondary}
                          hover:text-indigo-500
                          after:absolute after:left-0 after:-bottom-1
                          after:h-[2px] after:w-0 after:bg-indigo-500
                          after:transition-all after:duration-300
                          hover:after:w-full
                        `}
											>
												{item}
											</a>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>

				{/* BOTTOM LINE (UNCHANGED AS REQUESTED) */}
				<div
					className={`mt-10 pt-4 border-t ${config.borderPrimary}
          flex flex-col md:flex-row justify-between gap-3 text-xs ${textSecondary}`}
				>
					<span>© {new Date().getFullYear()} Yukti Genesis</span>
					<span>Design • Build • Scale</span>
				</div>
			</div>
		</footer>
	);
};

// ====================================================================
// 7. APP COMPONENT (Merged Structure)
// ====================================================================

const YuktiGenesisSite = () => {
	const [theme, setTheme] = useState("dark"); // Start with dark theme
	const { activeSection } = useScrollState();
	// const { isScrolled, activeSection } = useScrollState();
	const [isAuthModalOpen, setIsAuthModal] = useState(false);
	const [authFormType, setAuthFormType] = useState("login");
	const config = getThemeConfig(theme);
	const [showBrochure, setShowBrochure] = useState(false);
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	// useEffect(() => {
	// fetch("http://localhost:8000/api/health/")
	// 	.then(res => res.json())
	// 	.then(data => console.log(data));
	// }, []);

	const toggleTheme = () =>
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));

	const openAuthModal = (type) => {
		setAuthFormType(type);
		setIsAuthModal(true);
	};
	const closeModal = () => setIsAuthModal(false);

	// Common Themed Classes
	const textPrimary = config.textPrimary;
	const textSecondary = config.textSecondary;
	const sectionBg = config.sectionBg;
	const borderPrimary = config.borderPrimary;

	const faqs = [
		{
			question: "What types of projects do you work on?",
			answer:
				"We work on a wide range of digital projects including websites, web applications, SaaS platforms, mobile apps, APIs, dashboards, and innovative custom solutions tailored to business needs.",
		},
		{
			question: "What is your typical delivery timeline?",
			answer:
				"Delivery timelines depend on project scope and complexity. Small projects usually take 1–3 weeks, while larger or custom solutions may take 4–12 weeks with clear milestones.",
		},
		{
			question: "How do you price your projects?",
			answer:
				"We follow flexible pricing models including fixed-price, hourly, and milestone-based pricing. After understanding your requirements, we provide a transparent and detailed cost estimate.",
		},
		{
			question: "Do you provide post-launch support or maintenance?",
			answer:
				"Yes, we offer ongoing maintenance, performance optimization, feature upgrades, and technical support to ensure your product runs smoothly after launch.",
		},
		{
			question: "Can you help with innovative or experimental ideas?",
			answer:
				"Absolutely. We enjoy working on innovative and experimental ideas. From MVPs to proof-of-concepts, we help turn unique ideas into scalable digital products.",
		},
	];


	return (
		<div
			className={`min-h-screen ${textPrimary} overflow-x-hidden relative transition-colors duration-500`}
		>
			{/* NEW: Global Themed Background (Z-0) */}
			<ThemedBackground config={config} />

			{/* Auth Modal (Z-50) */}
			{isAuthModalOpen && (
				<AuthModal
					formType={authFormType}
					setFormType={setAuthFormType}
					closeModal={closeModal}
					config={config}
				/>
			)}

			{/* Header (Z-40) */}
			{/* isScrolled={isScrolled} */}
			<Header
				isScrolled={true}
				openAuthModal={openAuthModal}
				toggleTheme={toggleTheme}
				config={config}
			/>

			<main className="relative z-10 pt-4 pb-16">
				{" "}
				{/* Increased bottom padding */}
				{/* Hero Section */}
				<section
					id="home"
					className={`max-w-6xl mx-auto p-6 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${sectionBg} border ${borderPrimary} mt-20`}
				>
					<div className="relative z-[3] grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[500px]">
						{/* TEXT: New Hero Text from new theme.txt */}
						<div className="space-y-6">
							<ScrollFadeIn delay={0.1}>
								<div
									className={`inline-flex items-center gap-2 text-sm text-indigo-400 font-semibold tracking-wide animate-fadeIn px-3 py-1 rounded-full border transition-colors duration-500 ${config.isDark
										? "bg-indigo-900/50 border-indigo-700/50"
										: "bg-indigo-100/50 border-indigo-300/50"
										}`}
								>
									<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>{" "}
									ACCEPTING NEW PROJECTS FOR {new Date().getFullYear()}
								</div>
							</ScrollFadeIn>
							<ScrollFadeIn delay={0.2}>
								<h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
									We turn{" "}
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
										Chaos
									</span>
									<br /> into{" "}
									<ScrambledText
										text="Code."
										className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
										delay={1.5}
									/>
								</h1>
							</ScrollFadeIn>
							<ScrollFadeIn delay={0.3}>
								<p
									className={`text-lg max-w-lg leading-relaxed ${textSecondary}`}
								>
									We don't just build websites — we craft lasting digital assets.
									Your requirement. Our expertise. Built to endure and excel.
								</p>
							</ScrollFadeIn>
							<ScrollFadeIn delay={0.4}>
								<div className="flex flex-wrap gap-4 pt-4">
									<a
										href="#contact"
										className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/50"
									>
										Start Project
									</a>
									{/* <a
										href="#services"
										className={`px-8 py-4 bg-transparent border-2 font-bold rounded-full transition-all flex items-center gap-2 ${config.isDark
											? "border-white/20 text-white hover:bg-white/5"
											: "border-gray-300 text-gray-800 hover:bg-gray-100"
											}`}
									>
										View Work
									</a> */}
								</div>
							</ScrollFadeIn>
						</div>

						{/* VISUAL: Terminal Display (Kept dark) */}
						<div className="flex items-center justify-center relative w-full h-96 sm:h-80 md:h-full z-[3]">
							<TerminalDisplay />
						</div>
					</div>
				</section>
				{/* Services Section */}
				<SectionSpotlight
					className={`max-w-6xl mx-auto p-6 ${sectionBg} rounded-3xl shadow-2xl transition-colors duration-500 mt-10 border ${borderPrimary}`}
					config={config}
				>
					<section id="services" className="relative z-10">
						<ScrollFadeIn>
							<h2
								className={`text-3xl sm:text-4xl font-bold mb-4 text-center ${textPrimary}`}
							>
								Platforms We <span className="text-indigo-500">Engineer</span>
							</h2>
							<p className={`text-center mb-10 text-lg ${textSecondary}`}>
								Expert development of tailored digital platforms across content, commerce, and informational categories.
							</p>
						</ScrollFadeIn>
						<div className="space-y-12">
							{Object.entries(serviceData).map(([category, items], idx) => (
								<ScrollFadeIn key={idx} delay={idx * 0.1}>
									<div className="mb-6">
										<h3
											className={`text-2xl font-semibold mb-6 border-l-4 border-indigo-500 pl-4 ${textPrimary}`}
										>
											{category}
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
											{items.map((s, i) => (
												<MagneticServiceCard key={i} s={s} config={config} />
											))}
										</div>
									</div>
								</ScrollFadeIn>
							))}
						</div>
					</section>
				</SectionSpotlight>
				{/* Tech Stack Section (Using Bento Grid) */}
				<SectionSpotlight
					className={`max-w-6xl mx-auto p-6 ${sectionBg} rounded-3xl shadow-2xl transition-colors duration-500 mt-10 border ${borderPrimary}`}
					config={config}
				>
					<section id="tech-stack" className="relative z-10">
						<ScrollFadeIn>
							<div className="max-w-4xl mx-auto text-center">
								<h2 className={`text-4xl font-extrabold mb-4 ${textPrimary}`}>
									The <span className="text-indigo-500"> Full-Spectrum </span>{" "}
									Stack
								</h2>
								<p className={`opacity-80 text-lg ${textSecondary}`}>
									A modern, robust stack covering Frontend, Backend, Database,
									and DevOps—built for performance and intelligent scaling.
								</p>
							</div>
						</ScrollFadeIn>

						{/* Bento Grid for Tech Stack */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
							{techData.map((data, i) => (
								<ScrollFadeIn key={i} delay={i * 0.1}>
									<BentoCard {...data} config={config} />
								</ScrollFadeIn>
							))}
						</div>
					</section>
				</SectionSpotlight>
				{/* Success Roadmap Section */}
				<SectionSpotlight
					className={`max-w-6xl mx-auto p-6 rounded-2xl shadow-xl transition-colors duration-500 mt-10 relative overflow-hidden ${config.isDark ? "bg-gray-800/80" : "bg-gray-100/80"
						} border ${borderPrimary}`}
					config={config}
				>
					<section id="roadmap" className="relative z-10">
						<ScrollFadeIn>
							<div className="text-center mb-12">
								<h2 className={`text-3xl font-extrabold mb-4 ${textPrimary}`}>
									Our <span className="text-indigo-500">4-Step</span> Success
									Roadmap
								</h2>
								<p className={`text-lg ${textSecondary}`}>
									A transparent, collaborative process designed for predictable
									results.
								</p>
							</div>
						</ScrollFadeIn>

						<div className="relative flex flex-col items-center">
							{roadmapSteps.map((step, index) => (
								<ScrollFadeIn key={index} delay={index * 0.2}>
									<RoadmapStep
										step={step}
										index={index}
										totalSteps={roadmapSteps.length}
										config={config}
									/>
								</ScrollFadeIn>
							))}
						</div>
					</section>
				</SectionSpotlight>
				{/* Contact Section */}
				<section
					id="contact"
					className={`max-w-6xl mx-auto p-6 ${sectionBg} rounded-3xl shadow-2xl transition-colors duration-500 mt-10 border ${borderPrimary}`}
				>
					<ScrollFadeIn>
						<div className="text-center mb-12">
							<h2 className={`text-3xl font-extrabold mb-4 ${textPrimary}`}>
								Ready to Start Your Project?
							</h2>
							<p className={`text-lg ${textSecondary}`}>
								Let's discuss your vision. Choose your preferred contact method
								below.
							</p>
						</div>

						<ContactForm config={config} />
					</ScrollFadeIn>
				</section>
				{/* FAQ Section */}

				<section
					className={`max-w-6xl mx-auto p-6 ${sectionBg} rounded-2xl shadow transition-colors duration-500 mt-6 border ${borderPrimary}`}
				>
					<ScrollFadeIn>
						<h2 className={`text-2xl font-bold mb-4 ${textPrimary}`}>FAQs</h2>
						<div className="space-y-3">
							{faqs.map((faq, index) => (
								<FAQItem
									key={index}
									question={faq.question}
									answer={faq.answer}
									isOpen={openIndex === index}
									onToggle={() =>
										setOpenIndex(openIndex === index ? null : index)
									}
									config={config}
								/>
							))}
						</div>
					</ScrollFadeIn>
				</section>
			</main>

			{/* Footer (Now outside of main to ensure full width) */}
			<Footer config={config} />

			{showBrochure && (
				<BrochurePromotion
					imageSrc="/promo/brochure.jpeg"
					width={280}
					height={380}
					top={120}
					left={20}
					onClose={() => setShowBrochure(false)}
				/>
			)}

			{/* {showBrochure && (
        <BrochurePromotion
          imageSrc="/promo/brochure.jpeg"
          width={280}
          height={380}
          top={220}
          left={950}
          onClose={() => setShowBrochure(false)}
        />
      )} */}


			{/* NEW: Floating Dock Navigation (Z-50) */}
			<FloatingDock activeSection={activeSection} config={config} />

			<ChatBot />

			{/* --- Global CSS Styles (Combined & Enhanced) --- */}
			<style>{`
        /* -------------------------------------------------- */
        /* website.txt CSS (Retained/Adapted) */
        /* -------------------------------------------------- */
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(-5%);
          }
          50% {
            transform: translateY(5%);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }

        @keyframes scroll-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-scroll-fade-in {
          animation: scroll-fade-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            forwards;
        }
        .visible {
          opacity: 1;
          transform: translateY(0);
        }
        .invisible-pre-scroll {
          opacity: 0;
        }

        /* Roadmap Animations - Note: Color is hardcoded purple for thematic consistency */
        @keyframes pulse-node {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(167, 139, 250, 0.4);
            opacity: 1;
          }
          70% {
            box-shadow: 0 0 0 10px rgba(167, 139, 250, 0);
            opacity: 0.8;
          }
        }
        .animate-pulse-node {
          animation: pulse-node 2s ease-in-out infinite;
        }

        /* -------------------------------------------------- */
        /* new theme.txt CSS (Retained/Adapted) */
        /* -------------------------------------------------- */
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 0.5s steps(30, end);
        }

        /* ENHANCEMENT 3: Header Border Light (Color adjusted for theme) */
        @keyframes border-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.2);
          }
          50% {
            box-shadow: 0 0 10px 0 rgba(99, 102, 241, 0.6);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.2);
          }
        }
        .animate-border-pulse {
          animation: border-pulse 3s infinite ease-in-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out both;
        }

      `}</style>
		</div>
	);
};

export default YuktiGenesisSite;
