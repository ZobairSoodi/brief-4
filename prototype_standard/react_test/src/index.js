import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Add from './add';
import Show from './show';

function Parent() {
	const [data, setData] = useState([]);
	return (
		<div>
			<Add setData={setData} />
			<Show data={data} setData={setData} />
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Parent />
);
