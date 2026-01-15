const Dashboard = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">Overview Dashboard</h1>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				{[
					{ label: "Active Projects", value: 12 },
					{ label: "Pending Proposals", value: 5 },
					{ label: "Completed Deliveries", value: 84 },
					{ label: "Upcoming Deadlines", value: 3 },
				].map((item, i) => (
					<div
						key={i}
						className="bg-white rounded-xl p-6 shadow"
					>
						<p className="text-sm text-gray-500">{item.label}</p>
						<p className="text-3xl font-bold mt-2">{item.value}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
