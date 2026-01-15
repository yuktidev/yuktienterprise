const Demo = () => {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold">Demo Applications</h1>
				<p className="text-gray-600 mt-1">
					Sample applications to showcase our capabilities.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{["CRM", "E-Commerce", "Analytics"].map((demo, i) => (
					<div
						key={i}
						className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
					>
						<h3 className="font-semibold text-lg">{demo}</h3>
						<p className="text-sm text-gray-500 mt-2">
							Demo module for client trust.
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Demo;
