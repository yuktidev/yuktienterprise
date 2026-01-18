import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
	MdDashboard,
	MdApps,
	MdWork,
	MdGroup,
	MdPeople,
	MdLogout,
	MdAccountCircle,
	MdMenu,
} from "react-icons/md";

const AdminLayout = () => {
	const navigate = useNavigate();
	const [mobileOpen, setMobileOpen] = useState(false);

	const closeMobileSidebar = () => {
		setMobileOpen(false);
	};

	const navClass = ({ isActive }: { isActive: boolean }) =>
		`flex items-center gap-3 px-4 py-3 rounded-lg transition
     ${isActive
			? "bg-white/20 text-white"
			: "text-white/80 hover:bg-white/10 hover:text-white"
		}`;

	return (
		<div className="min-h-screen bg-gray-100">
			{/* ================= MOBILE OVERLAY ================= */}
			{mobileOpen && (
				<div
					className="fixed inset-0 bg-black/40 z-40 md:hidden"
					onClick={closeMobileSidebar}
				/>
			)}

			{/* ================= SIDEBAR ================= */}
			<aside
				className={`
          fixed z-50 h-screen
          bg-gradient-to-b from-indigo-700 to-indigo-900 text-white
          transition-all duration-300

          w-64
          md:w-20
          lg:w-64

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
			>
				{/* Brand */}
				<div className="h-16 flex items-center justify-center border-b border-white/20">
					{/* Full name → Mobile & Desktop */}
					<span className="md:hidden lg:block text-xl font-bold">
						Yukti Genesis
					</span>

					{/* Short name → Tablet only */}
					<span className="hidden md:block lg:hidden text-lg font-bold">
						YG
					</span>
				</div>

				{/* Navigation */}
				<nav className="px-2 py-6 space-y-1">
					<NavLink
						to="/admin/dashboard"
						className={navClass}
						onClick={closeMobileSidebar}
					>
						<MdDashboard className="w-5 h-5" />
						<span className="md:hidden lg:inline">Dashboard</span>
					</NavLink>

					<NavLink
						to="/admin/demo"
						className={navClass}
						onClick={closeMobileSidebar}
					>
						<MdApps className="w-5 h-5" />
						<span className="md:hidden lg:inline">Demo</span>
					</NavLink>

					<NavLink
						to="/admin/projects"
						className={navClass}
						onClick={closeMobileSidebar}
					>
						<MdWork className="w-5 h-5" />
						<span className="md:hidden lg:inline">Projects</span>
					</NavLink>

					<NavLink
						to="/admin/team"
						className={navClass}
						onClick={closeMobileSidebar}
					>
						<MdGroup className="w-5 h-5" />
						<span className="md:hidden lg:inline">Team</span>
					</NavLink>

					<NavLink
						to="/admin/clients"
						className={navClass}
						onClick={closeMobileSidebar}
					>
						<MdPeople className="w-5 h-5" />
						<span className="md:hidden lg:inline">Clients</span>
					</NavLink>
				</nav>

				{/* Back to Website */}
				<div className="absolute bottom-0 w-full px-2 py-4 border-t border-white/20">
					<button
						onClick={() => {
							closeMobileSidebar();
							navigate("/");
						}}
						className="flex items-center gap-3 px-4 text-sm text-white/80 hover:text-white"
					>
						<MdLogout className="w-5 h-5" />
						<span className="md:hidden lg:inline">Back to Website</span>
					</button>
				</div>
			</aside>

			{/* ================= MAIN AREA ================= */}
			<div
				className="
          ml-0
          md:ml-20
          lg:ml-64
          transition-all
          flex flex-col min-h-screen
        "
			>
				{/* ================= TOP NAVBAR ================= */}
				<header className="h-16 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-30">
					<div className="flex items-center gap-3">
						<button
							className="md:hidden"
							onClick={() => setMobileOpen(true)}
						>
							<MdMenu className="w-6 h-6 text-gray-700" />
						</button>

						<h1 className="text-lg font-semibold text-gray-800">
							Admin Dashboard
						</h1>
					</div>

					<MdAccountCircle className="w-8 h-8 text-gray-600" />
				</header>

				{/* ================= PAGE CONTENT ================= */}
				<main className="flex-1 p-6 overflow-y-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;
