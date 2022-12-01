import useBriefState from "./Components/Brief/briefState";
import React, { useEffect } from "react";
import EditModal from "./Components/Modals/EditModal";
import BriefInputs from './Components/Brief/BriefInputs';
import Show from "./Components/Show";
import AddModal from "./Components/Modals/AddModal";
// import Modal from "./Components/Modal";

const MyURL = "http://127.0.0.1:8000/api";

export default function Briefs() {
    const briefState = useBriefState();
    const inputs = BriefInputs();
    const [showModal, setShow] = React.useState({ show: false, id: null });
    const [addModal, setAddModal] = React.useState({ show: false });

    return (
        <div>
            <div>
                <button onClick={() => { setAddModal({ show: true }) }}>Add New</button>
            </div>
            <Show
                url={MyURL + "/briefs/"}
                state={briefState}
                setShow={setShow}
                id={"id_br"}
                inputs={inputs}
            />
            <EditModal
                showModal={showModal}
                setModal={setShow}
                url={MyURL + "/briefs/"}
                globalState={briefState}
                inputs={inputs}
            />
            <AddModal
                addModal={addModal}
                setAddModal={setAddModal}
                url={MyURL + "/briefs/"}
                globalState={briefState}
                inputs={inputs}
            />
        </div>
    );
}