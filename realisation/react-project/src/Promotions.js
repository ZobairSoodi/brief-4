import { useState } from "@hookstate/core";
import usePromState from "./Components/promState";
import axios from 'axios';
import React, { useEffect } from "react";
import Modal from "./Components/Modal";

export default function Promotions() {
    const promState = usePromState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/promotions").then((res) => {
            console.log(res.data);
            promState.setProm(res.data);
        });
    }, []);

    function delete_prom(e) {
        let id = e.target.getAttribute("id-value");
        axios.delete("http://127.0.0.1:8000/api/promotions/" + id).then((res) => {
            promState.deleteProm(Number(id));
        });
    }

    const [showModal, setShow] = React.useState({show: false, id: null});
    const handleEditClick = (e)=>{
        const id = e.target.getAttribute("id-value");
        setShow(()=>{
            return {'show': true ,'id': id};
        });
    }

    return (
        <div>
            {promState.getProm.map((item) => <div key={item.id_prom}>
                <span>{item.name_prom}</span>
                <div>
                    <input type='button' onClick={delete_prom} value='delete' id-value={item.id_prom} />
                    <input type='button' value='edit' id-value={item.id_prom} onClick={handleEditClick} />
                </div>
            </div>)}
            <Modal showModal={showModal} setModal={setShow} />
        </div>
    );
}