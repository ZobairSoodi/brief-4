import axios from 'axios';
import { useState } from 'react';

function Add(props) {

    const [form, setForm] = useState({});

    const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://127.0.0.1:8000/api/todos", form).then((res) => {
        console.log(res.data);
        props.setData((old)=>([...old, res.data]));
      })
    }
    return (
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start'
      }}>
        <label>
          <span>Name: </span>
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          <span>Description: </span>
          <input type="text" name="descrip" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
export default Add;