const Team = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">Team</h1>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				{["James", "Aisha", "Michael", "Sonia"].map((name, i) => (
					<div
						key={i}
						className="bg-white p-6 rounded-xl shadow text-center"
					>
						<div className="w-16 h-16 rounded-full bg-indigo-100 mx-auto mb-3" />
						<h3 className="font-semibold">{name}</h3>
						<p className="text-sm text-gray-500">Developer</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
