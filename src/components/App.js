import React, { useState } from "react";
import Nav from "./Nav";
import AllPigs from "./AllPigs";

import hogs from "../porkers_data";

function App() {

	const [hogsList, setHogsList] = useState(hogs);
	const [isGreased, setIsGreased] = useState(false);

	const filtered = hogsList.filter(h => h.greased === true)



	function handleClick() {
		setIsGreased(isGreased => !isGreased);
	}

	function handleSortByWeight() {
		const sortByWeight = hogsList.sort(function(a,b) {
			return a.weight - b.weight;
		  })
	
		setHogsList(sortByWeight)
	}

	return (
		<div className="App">
			<Nav />
			<AllPigs handleSortByWeight = {handleSortByWeight} filtered = {filtered} isGreased = {isGreased} handleClick = {handleClick} hogsList = {hogsList}/>
		</div>
	);
}

export default App;
