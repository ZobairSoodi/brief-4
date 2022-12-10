import axios from 'axios';
import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className='flex flex-row flex-wrap justify-center w-4/5 gap-4'>
            {p.state.get.map((item) => <div
                className='bg-white relative w-full lg:w-[23%] md:w-[31%] sm:w-[48%] px-6 py-8 border rounded-lg'
                style={{
                    minHeight: '150px'
                }}
                key={item[p.id]}
            >
                {p.inputs.map((inp) => <div>{item[inp.name]}</div>)}
                <div className='absolute flex  top-2 right-2'>
                    <FontAwesomeIcon icon="fas fa-edit" onClick={handleEditClick} id-value={item[p.id]} className='text-green-700' />
                    <FontAwesomeIcon icon="fas fa-trash-alt" id-value={item[p.id]} onClick={delete_} className='text-red-700 ml-1' />
                </div>
            </div>)}
        </div>
    );
}