const Demo = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Demo Applications</h1>
			<p className="text-gray-600 mb-6">
				Sample applications to showcase our capabilities.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{["CRM", "E-Commerce", "Analytics"].map((demo, i) => (
					<div
						key={i}
						className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
					>
						<h3 className="font-semibold">{demo}</h3>
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
