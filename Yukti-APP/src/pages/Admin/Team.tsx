const Team = () => {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold">Team</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{["James", "Aisha", "Michael", "Sonia"].map((name, i) => (
					<div
						key={i}
						className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
					>
						<div className="w-16 h-16 rounded-full bg-indigo-100 mx-auto mb-3 flex items-center justify-center text-indigo-700 font-bold">
							{name[0]}
						</div>

						<h3 className="font-semibold text-lg">{name}</h3>
						<p className="text-sm text-gray-500">Developer</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
