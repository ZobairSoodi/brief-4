import usePromState from "./Components/promState";
import React, { useEffect } from "react";
import EditModal from "./Components/EditModal";
import PromInputs from './Components/PromInputs';
import Show from "./Components/Show";
// import Modal from "./Components/Modal";

const MyURL = "http://127.0.0.1:8000/api";

export default function Promotions() {
    const promState = usePromState();
    const inputs = PromInputs();
    const [showModal, setShow] = React.useState({ show: false, id: null });

    return (
        <div>
            <Show 
                url={MyURL + "/promotions/"}
                state={promState}
                setShow={setShow}
                id={"id_prom"}
                name={"name_prom"}
                inputs={inputs}
            />
            <EditModal
                showModal={showModal}
                setModal={setShow}
                url={MyURL + "/promotions/"}
                globalState={promState}
                inputs={inputs}
            />
        </div>
    );
}