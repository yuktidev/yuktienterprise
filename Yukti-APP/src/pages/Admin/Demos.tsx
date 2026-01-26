import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdBusinessCenter, MdSchool } from "react-icons/md";
import { RiBriefcase4Line } from "react-icons/ri";

const demos = [
	{
		id: 1,
		title: "E-Commerce Platform",
		description:
			"Full-stack e-commerce demo with products, cart, checkout, and admin features.",
		icon: <MdShoppingCart className="w-8 h-8 text-indigo-600" />,
		path: "/demo/ecommerce",
	},
	{
		id: 2,
		title: "Business",
		description:
			"Featuring the business with best dashboard and analytics tools.",
		icon: <MdBusinessCenter className="w-8 h-8 text-indigo-600" />,
		path: "/demo/business",
	},
	{
		id: 3,
		title: "Portfolio",
		description:
			"Showcase your work and projects with a sleek portfolio demo.",
		icon: <RiBriefcase4Line className="w-8 h-8 text-indigo-600" />,
		path: "/demo/portfolio",
	},
	{
		id: 4,
		title: "Education & Resources",
		description:
			"A demo for educational content, courses, and resource management.",
		icon: <MdSchool className="w-8 h-8 text-indigo-600" />,
		path: "/demo/education",
	},
];

const Demo = () => {

	const navigate = useNavigate();
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold">Demo Applications</h1>
				<p className="text-gray-600 mt-1">
					Sample applications to showcase our real-world capabilities.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{demos.map((demo) => (
					<div
						key={demo.id}
						onClick={() => window.open(`${window.location.origin}${demo.path}`, "_blank")}
						className="
							bg-white p-6 rounded-xl shadow-sm
							hover:shadow-md transition cursor-pointer
							flex gap-4 items-start
						"
					>
						{/* Icon */}
						<div className="flex-shrink-0">{demo.icon}</div>

						{/* Content */}
						<div>
							<h3 className="font-semibold text-lg">
								{demo.title}
							</h3>
							<p className="text-sm text-gray-500 mt-1 line-clamp-2">
								{demo.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Demo;
