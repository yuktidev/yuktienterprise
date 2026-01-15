const Projects = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">Projects</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{["Website Redesign", "CRM Dashboard", "Mobile App"].map(
					(project, i) => (
						<div
							key={i}
							className="bg-white p-6 rounded-xl shadow"
						>
							<h3 className="font-semibold">{project}</h3>
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
