import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// function Comp1(props) {
//   let [text, setText] = useState("first");
//   const handleChange = (e) => {
//     setText(e.target.value);
//   }
//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//       <h2 id="text">{text}</h2>
//       <h2 id="text">{text}</h2>
//       <h2 id="text">{text}</h2>
//       <h2 id="text">{text}</h2>
//       <h2 id="text">{text}</h2>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
