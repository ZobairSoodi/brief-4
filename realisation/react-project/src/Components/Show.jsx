import axios from 'axios';
import React, { useEffect } from "react";
export default function Show(p) {

    useEffect(() => {
        axios.get(p.url).then((res) => {
            console.log(res.data);
            p.state.set(res.data);
        });
    }, []);

    function delete_(e) {
        let id = e.target.getAttribute("id-value");
        axios.delete(p.url + id).then((res) => {
            p.state.delete(Number(id));
        });
    }

    const handleEditClick = (e) => {
        const id = e.target.getAttribute("id-value");
        p.setShow(() => {
            return { 'show': true, 'id': id };
        });
    }

    return (
        <div>
            {p.children}
            {p.state.get.map((item) => <div key={item[p.id]}>
                {p.inputs.map((inp)=><div>{item[inp.name]}</div>)}
                <div>
                    <input type='button' onClick={delete_} value='delete' id-value={item[p.id]} />
                    <input type='button' value='edit' id-value={item[p.id]} onClick={handleEditClick} />
                </div>
            </div>)}
        </div>
    );
}