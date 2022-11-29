import axios from "axios";
import { useEffect } from "react";

export default function Show(props) {

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/todos').then((res) => {
            console.log(res.data);
            props.setData(res.data);
        })
    }, []);

    return (
        <div>{
            props.data.map((item)=><li key={item.id}>{item.name} / {item.descrip}</li>)
        }
        </div>
    );
}