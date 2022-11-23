import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Add from './add';
import Show from './show';
import Modal from './modal';

function Parent() {
	const [data, setData] = useState([]);
	const [edit_data, setEdit] = useState("");
	const [show, setShow] = useState(false);
	return (
		<div>
			<Add setData={setData} />
			<Show data={data} setData={setData} setEdit={setEdit} setShow={()=>{setShow(true)}}/>
			<Modal show={show} setShow={()=>setShow(false)} data_e={edit_data} data={data} setData={setData}/>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Parent />
);
