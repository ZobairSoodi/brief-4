import { useState } from "@hookstate/core";
import store from "./state";

export default function Comp1() {
    const myState = useState(store);
    return <h1>{myState.get()}</h1>
}