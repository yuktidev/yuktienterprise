const Projects = () => {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold">Projects</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{["Website Redesign", "CRM Dashboard", "Mobile App"].map(
					(project, i) => (
						<div
							key={i}
							className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
						>
							<h3 className="font-semibold text-lg">{project}</h3>
							<p className="text-sm text-gray-500 mt-2">
								Status: In Progress
							</p>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Projects;
