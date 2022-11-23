import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

export default function Add(p) {
	const name = useRef();
	const descrip = useRef();
	// useEffect(()=>{

	// }, [])
	function add() {
		var value_name = name.current.value;
		var value_descrip = descrip.current.value;
		var row = { name: value_name, descrip: value_descrip };
		axios.post('http://127.0.0.1:8000/api/todos/',
			row
		).then((res) => {
			console.log(res);
			p.setData((old) => [...old, res.data]);
			name.current.value = "";
			descrip.current.value = "";
			name.current.focus();
		})

	}
	return (
		<div>
			<input type="text" ref={name} />
			<input type="text" ref={descrip} />
			<input type="button" defaultValue="Add" onClick={add} />
		</div>
	);
}