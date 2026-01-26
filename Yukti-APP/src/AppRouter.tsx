import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import YuktiGenesisSite from "./App";

import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Demo from "./pages/Admin/Demos";
import Projects from "./pages/Admin/Projects";
import Team from "./pages/Admin/Team";
import Clients from "./pages/Admin/Clients";
import EcommerceDemo from "./pages/Demo/ecommerce/EcommerceDemo";
import BusinessDemo from "./pages/Demo/business/BusinessDemo";
import PortfolioDemo from "./pages/Demo/portfolio/portfolioDemo";
import EducationDemo from "./pages/Demo/education/Education";
import PublicLayout from "./pages/Admin/CommonLayout";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* ================= MAIN WEBSITE ================= */}
				<Route path="/" element={<YuktiGenesisSite />} />
				<Route
					path="/demos"
					element={
						<PublicLayout>
							<Demo />
						</PublicLayout>
					}
				/>

				{/* ================= DEMO APPS (PUBLIC) ================= */}
				<Route path="/demo/ecommerce" element={<EcommerceDemo />} />
				<Route path="/demo/business" element={<BusinessDemo />} />
				<Route path="/demo/portfolio" element={<PortfolioDemo />} />
				<Route path="/demo/education" element={<EducationDemo />} />

				{/* ================= ADMIN MODULE ================= */}
				<Route path="/admin" element={<AdminLayout />}>
					{/* redirect /admin -> /admin/dashboard */}
					<Route index element={<Navigate to="dashboard" replace />} />

					<Route path="dashboard" element={<Dashboard />} />
					<Route path="demo" element={<Demo />} />
					<Route path="projects" element={<Projects />} />
					<Route path="team" element={<Team />} />
					<Route path="clients" element={<Clients />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};


export default AppRouter;
