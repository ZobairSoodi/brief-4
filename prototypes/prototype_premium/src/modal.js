import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

export default function Modal(p) {
    const name_e = useRef();
    const descrip_e = useRef();

    if (!p.show) {
        return null;
    }
    const save_data_e = () => {
        var name_value = name_e.current.value;
        var descrip_value = descrip_e.current.value;
        var row = { name: name_value, descrip: descrip_value };
        axios.put('http://127.0.0.1:8000/api/todos/' + p.data_e.id,
            row
        ).then((res) => {
            console.log(res.data);
            p.setData(
                p.data.map((item) => {
                    if (item.id === Number(res.data.id)) {
                        return {...item, ...res.data}
                    }
                    else{
                        return item;
                    }
                })
            )
        })
    }
    return (
        <div>
            <h1>My Modal</h1>
            <div>
                <label>
                    <span>Name:</span>
                    <input type="text" ref={name_e} defaultValue={p.data_e.name} />
                </label>
                <label>
                    <span>Description:</span>
                    <input type="text" ref={descrip_e} defaultValue={p.data_e.descrip} />
                </label>
                <button onClick={save_data_e} id-value={p.data_e.id}>save</button>
                <button onClick={p.setShow}>Close</button>
            </div>
        </div>
    );
}