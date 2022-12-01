import { useState } from '@hookstate/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import Input from './Input';
import usePromState from './promState';

export default function EditModal(p) {
    const [form, setForm] = React.useState({});

    useEffect(()=>{
        if(p.showModal.show){
            const id = p.showModal.id;
            console.log(id);
            axios.get(p.url + id).then((res)=>{
                console.log(res);
                setForm(()=>({...res.data}));
            })
        }
    }, [p.showModal]);

    if (!p.showModal.show) {
        return;
    }

    const save = (e) => {
        e.preventDefault();
        const id = p.showModal.id;
        axios.put(p.url + id,
            form
        ).then((res) => {
            console.log(res.data);
            p.globalState.edit(res.data);
        })
    }

    const closeModal = () => {
        p.setModal(()=>({show: false, id: null}));
        setForm(()=>({}));
    }

    const handleEditForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm((old) => ({ ...old, [name]: value }));
    }

    return (
        <div>
            <h1>My Modal!</h1>
            <form onSubmit={save}>
                {/* {p.children} */}
                {p.inputs.map(
                        (item) => <Input
                            element={item.element}
                            type={item.type}
                            name={item.name}
                            value={form[item.name]}
                            id={item.id}
                            placeholder={item.placeholder}
                            label={item.label}
                            handleChange={handleEditForm}
                            
                        />
                    )}
                <button onClick={save} type='submit'>Save</button>
                <button onClick={closeModal}>Close</button>
            </form>

        </div>
    )
}