import {useState, useEffect} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import Briefs from './Briefs';
import Promotions from './Promotions';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt, faEdit);

function App() {
  return <div>
    <Promotions/>
    {/* <Briefs/> */}
    
  </div>
}

export default App;
