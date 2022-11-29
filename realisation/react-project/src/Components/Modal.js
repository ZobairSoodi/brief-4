import { useState } from '@hookstate/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import usePromState from './promState';
export default function Modal(p) {
    const [form, setForm] = React.useState({});
    const promState = usePromState();

    useEffect(()=>{
        if(p.showModal.show){
            const id = p.showModal.id;
            console.log(id);
            axios.get("http://127.0.0.1:8000/api/promotions/" + id).then((res)=>{
                console.log(res);
                setForm(()=>({...res.data}));
            })
        }
    }, [p.showModal]);

    if (!p.showModal.show) {
        return;
    }
    const handleForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm((old) => ({ ...old, [name]: value }));
    }
    const save = (e) => {
        e.preventDefault();
        const id = p.showModal.id;
        axios.put("http://127.0.0.1:8000/api/promotions/" + id,
            form
        ).then((res) => {
            console.log(res.data);
            promState.editProm(res.data);
        })
    }
    const closeModal = () => {
        p.setModal(()=>({show: false, id: null}));
        setForm(()=>({}));
    }
    return (
        <div>
            <h1>My Modal!</h1>
            <form onSubmit={save}>
                <label>
                    <span>Name</span>
                    <input onChange={handleForm} name='name_prom' value={form.name_prom || ""} type='text' />
                </label>
                <label>
                    <span>Description</span>
                    <input onChange={handleForm} name='descrip_prom' value={form.descrip_prom || ""} type='text' />
                </label>
                <button onClick={save} type='submit'>Close</button>
                <button onClick={closeModal}>Close</button>
            </form>

        </div>
    )
}