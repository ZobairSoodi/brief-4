import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

export default function Show(p) {

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/todos/').then((res) => {
			console.log(res);
			p.setData(res.data);
		})
	}, []);

	function delete_todo(e) {
		var id = e.target.getAttribute("id-value");
		axios.delete('http://127.0.0.1:8000/api/todos/' + id)
		.then((res)=>{
			console.log(res);
			p.setData(p.data.filter((item) => item.id !== Number(id)));
		})
	}

	function show_modal(e){
		var id = e.target.getAttribute("id-value");
		axios.get('http://127.0.0.1:8000/api/todos/' + id).then((res) => {
			console.log(res);
			p.setEdit(res.data);
			p.setShow(false);
		})
	}

	const myList = p.data.map((item) => <li key={item.id}>
		<span>{item.name}</span> / <span>{item.descrip}</span>
		<input type="button" defaultValue="Delete" onClick={delete_todo} id-value={item.id} />
		<input type="button" defaultValue="Edit" onClick={show_modal} id-value={item.id} />
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