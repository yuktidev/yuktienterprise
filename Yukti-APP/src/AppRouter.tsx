import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import YuktiGenesisSite from "./App";

import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Demo from "./pages/Admin/Demos";
import Projects from "./pages/Admin/Projects";
import Team from "./pages/Admin/Team";
import Clients from "./pages/Admin/Clients";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* MAIN WEBSITE */}
				<Route path="/" element={<YuktiGenesisSite />} />

				{/* ADMIN MODULE */}
				<Route path="/admin" element={<AdminLayout />}>
					{/* IMPORTANT: redirect /admin -> /admin/dashboard */}
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
