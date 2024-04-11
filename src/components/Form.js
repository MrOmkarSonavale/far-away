import { useState } from "react";

export default function Form({ onHandleItem }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);


	// console.log(item);

	function handleSubmit(evt) {
		evt.preventDefault();

		if (!description) return;

		const itemList = { description, quantity, packed: false, id: Date.now() };
		// console.log(itemList);
		onHandleItem(itemList);
		setDescription('');
		setQuantity(1);
	}

	return (
		<form onSubmit={(evt) => handleSubmit(evt)} className="add-form">
			<h3>what do you for you 😎 trip?</h3>

			<select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
				{
					Array.from({ length: 20 }, (_, i) => i + 1)
						.map((index) => (
							<option value={index} key={index}>{index}</option>)
						)
				}
			</select>

			<input type="text" placeholder="items...." value={description} onChange={(e) => setDescription(e.target.value)} />
			<button>ADD</button>
		</form>

	)
};
