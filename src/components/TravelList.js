import { useState } from "react";


export default function TravelList({ items, onDeleteItem, onToggleItem, onClearList }) {
	const [sortBy, setSortBy] = useState('input');

	let allitems;

	if (sortBy === 'input') {
		allitems = items;
	}
	if (sortBy === 'description') {
		allitems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
	}
	if (sortBy === 'packed') {
		allitems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
	}


	return (
		<div className="list">
			<ul>{
				allitems.map(item => <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)
			}
			</ul>

			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">SORT BY INPUT ORDER</option>
					<option value="description">SORT BY DESCRIPTION</option>
					<option value="packed">SORT BY PACKED STATUS</option>
				</select>
				<button onClick={onClearList}>clear the list</button>


			</div>

		</div>
	)
};

function Item({ item, onDeleteItem, onToggleItem }) {
	return <li key={item.id}>
		<input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
		<span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
		<button onClick={() => onDeleteItem(item.id)}>❌</button>
	</li>
};