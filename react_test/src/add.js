import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

export default function Add(p) {
	const name_prom = useRef();
	const descrip_prom = useRef();
	// useEffect(()=>{

	// }, [])
	function add() {
		var value_name = name_prom.current.value;
		var value_descrip = descrip_prom.current.value;
		var row = { name_prom: value_name, descrip_prom: value_descrip };
		axios.post('http://127.0.0.1:8000/api/promotions/',
			row
		).then((res) => {
			console.log(res);
			p.setData((old) => [...old, res.data]);
			name_prom.current.value = "";
			descrip_prom.current.value = "";
			name_prom.current.focus();
		})

	}
	return (
		<div>
			<input type="text" ref={name_prom} />
			<input type="text" ref={descrip_prom} />
			<input type="button" defaultValue="Add" onClick={add} />
		</div>
	);
}