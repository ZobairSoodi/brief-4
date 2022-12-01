import useBriefState from "./Components/briefState";
import React, { useEffect } from "react";
import EditModal from "./Components/EditModal";
import BriefInputs from './Components/BriefInputs';
import Show from "./Components/Show";
// import Modal from "./Components/Modal";

const MyURL = "http://127.0.0.1:8000/api";

export default function Briefs() {
    const briefState = useBriefState();
    const inputs = BriefInputs();
    const [showModal, setShow] = React.useState({ show: false, id: null });

    return (
        <div>
            <Show 
                url={MyURL + "/briefs/"}
                state={briefState}
                setShow={setShow}
                id={"id_br"}
                name={"name_br"}
                inputs={inputs}
            />
            <EditModal
                showModal={showModal}
                setModal={setShow}
                url={MyURL + "/briefs/"}
                globalState={briefState}
                inputs={inputs}
            />
        </div>
    );
}