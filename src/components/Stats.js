export default function Stats({ item }) {
	if (!item.length) {
		return (
			<p className="stats">
				<em>Start adding item to list 🛩️🚀</em>
			</p>
		)
	}


	const itemLeagth = item.length;
	const numPacked = item.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked / itemLeagth) * 100);

	return (<footer className="stats">
		<em>{
			percentage === 100 ? "you already got everything ✈️" : `
			💼 You have ${itemLeagth} items on your list,and you already packed ${numPacked} (${percentage})%`
		}
		</em>
	</footer>
	)
};