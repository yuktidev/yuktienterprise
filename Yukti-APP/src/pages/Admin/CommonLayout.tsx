import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Top bar */}
			<div className="sticky top-0 z-20 bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2">
					<button
						onClick={() => navigate(-1)}
						className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-600"
					>
						<MdArrowBack />
						Back
					</button>
				</div>
			</div>

			{/* Page content */}
			<main className="max-w-7xl mx-auto px-4 py-6">
				{children}
			</main>
		</div>
	);
};

export default PublicLayout;
