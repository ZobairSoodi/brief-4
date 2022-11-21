import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

export default function Show(p) {

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/promotions/').then((res) => {
			console.log(res);
			p.setData(res.data);
		})
	}, []);

	function delete_prom(e) {
		var id_prom = e.target.getAttribute("id-value");
		axios.delete('http://127.0.0.1:8000/api/promotions/' + id_prom)
		.then((res)=>{
			console.log(res);
			p.setData(p.data.filter((item) => item.id_prom !== Number(id_prom)));
		})
	}

	const myList = p.data.map((item) => <li key={item.id_prom}>
		<span>{item.name_prom}</span> / <span>{item.descrip_prom}</span>
		<input type="button" defaultValue="Delete" onClick={delete_prom} id-value={item.id_prom} />
	</li>);

	return (
		<div>
			<h1>my data:</h1>
			<ul>
				{myList}
			</ul>
		</div>
	);
}