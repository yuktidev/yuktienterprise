import { MdShoppingCart } from "react-icons/md";

const demos = [
	{
		id: 1,
		title: "E-Commerce Platform",
		description:
			"Full-stack e-commerce demo with products, cart, checkout, and admin features.",
		icon: <MdShoppingCart className="w-8 h-8 text-indigo-600" />,
		path: "/demo/ecommerce",
	},
];

const Demo = () => {
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
						onClick={() => window.open(demo.path, "_blank")}
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
