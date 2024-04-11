import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import Form from "./Form";
import TravelList from "./TravelList";
// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: false },
// 	{ id: 3, description: "camera", quantity: 1, packed: false },
// 	{ id: 4, description: "charger", quantity: 1, packed: false },
// ];


export default function App() {
	const [item, setItem] = useState([]);


	function handleAddItems(items) {
		setItem((item) => [...item, items]);
	}

	function handleDeleteItem(id) {
		setItem(item => item.filter((i) => i.id !== id));
	}

	function handleToggleItem(id) {
		setItem(item => item.map((it) => it.id === id ? { ...it, packed: !it.packed } : it))
	}

	function handleClearList() {
		setItem([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onHandleItem={handleAddItems} />
			<TravelList items={item} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats item={item} />
		</div>
	)
}




