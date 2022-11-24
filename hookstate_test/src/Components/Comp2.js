import store from "./state";
import { useState } from "@hookstate/core";

export default function Comp2() {
    const myState = useState(store);
    return (
        <div>
            <input type="text" onChange={(e)=>{myState.set(e.target.value)}}/>
        </div>
    );
}