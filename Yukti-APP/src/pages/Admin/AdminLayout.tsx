import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
	MdDashboard,
	MdApps,
	MdWork,
	MdGroup,
	MdPeople,
	MdLogout,
	MdAccountCircle,
} from "react-icons/md";

/**
 * AdminLayout
 * -------------
 * Layout wrapper for all /admin routes
 * Contains:
 * - Left Sidebar (navigation)
 * - Top Navbar (user info)
 * - Main Content Area (Outlet)
 */
const AdminLayout = () => {
	const navigate = useNavigate();

	/**
	 * Sidebar link styles
	 * - Active link highlighted
	 * - Hover styles
	 */
	const navClass = ({ isActive }: { isActive: boolean }) =>
		`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${isActive
			? "bg-white/20 text-white"
			: "text-white/80 hover:bg-white/10 hover:text-white"
		}`;

	return (
		<div className="flex min-h-screen bg-gray-100">
			{/* ================= SIDEBAR ================= */}
			<aside className="w-64 bg-gradient-to-b from-indigo-700 to-indigo-900 text-white flex flex-col">
				{/* Brand */}
				<div className="px-6 py-5 text-xl font-bold border-b border-white/20">
					Yukti Genesis
				</div>

				{/* Navigation */}
				<nav className="flex-1 px-4 py-6 space-y-1">
					{/* IMPORTANT FIX:
              Dashboard links to /admin/dashboard (NOT /admin)
              so it becomes active on default load */}
					<NavLink to="/admin/dashboard" end className={navClass}>
						<MdDashboard className="w-5 h-5" />
						Dashboard
					</NavLink>

					<NavLink to="/admin/demo" className={navClass}>
						<MdApps className="w-5 h-5" />
						Demo
					</NavLink>

					<NavLink to="/admin/projects" className={navClass}>
						<MdWork className="w-5 h-5" />
						Projects
					</NavLink>

					<NavLink to="/admin/team" className={navClass}>
						<MdGroup className="w-5 h-5" />
						Team
					</NavLink>

					<NavLink to="/admin/clients" className={navClass}>
						<MdPeople className="w-5 h-5" />
						Clients
					</NavLink>
				</nav>

				{/* Back to Website */}
				<div className="px-4 py-4 border-t border-white/20">
					<button
						onClick={() => navigate("/")}
						className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
					>
						<MdLogout className="w-5 h-5" />
						Back to Website
					</button>
				</div>
			</aside>

			{/* ================= RIGHT SIDE ================= */}
			<div className="flex-1 flex flex-col">
				{/* TOP NAVBAR */}
				<header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
					<h1 className="text-lg font-semibold text-gray-800">
						Admin Dashboard
					</h1>

					{/* User Profile */}
					<div className="flex items-center gap-2 cursor-pointer">
						<MdAccountCircle className="w-8 h-8 text-gray-600" />
						{/* <span className="text-sm font-medium text-gray-700">
							Admin
						</span> */}
					</div>
				</header>

				{/* PAGE CONTENT */}
				<main className="flex-1 p-8 overflow-y-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
