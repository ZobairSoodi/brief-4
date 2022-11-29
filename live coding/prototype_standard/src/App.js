import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Add from './Components/Add';
import Show from './Components/Show';

function Parent() {
  const [data, setData] = useState([]);
  return (
    <div>
      <Add data={data} setData={setData}/>
      <Show data={data} setData={setData}/>
    </div>
  );
}

function App() {
  return (
    <Parent />
  );
}

export default App;
