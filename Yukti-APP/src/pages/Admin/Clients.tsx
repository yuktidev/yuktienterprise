const Clients = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">Clients</h1>

			<ul className="space-y-4">
				{["Acme Corp", "TechNova", "StartupX"].map((client, i) => (
					<li
						key={i}
						className="bg-white p-4 rounded-lg shadow"
					>
						{client}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Clients;
