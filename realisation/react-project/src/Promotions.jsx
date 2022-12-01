import usePromState from "./Components/Promotion/promState";
import React, { useEffect } from "react";
import EditModal from "./Components/Modals/EditModal";
import PromInputs from './Components/Promotion/PromInputs';
import Show from "./Components/Show";
import AddModal from "./Components/Modals/AddModal";

const MyURL = "http://127.0.0.1:8000/api";

export default function Promotions() {
    const promState = usePromState();
    const inputs = PromInputs();
    const [editModal, setEditModal] = React.useState({ show: false, id: null });
    const [addModal, setAddModal] = React.useState({ show: false });

    return (
        <div>
            <button onClick={() => { setAddModal({ show: true }) }}>Add New</button>
            <Show
                url={MyURL + "/promotions/"}
                state={promState}
                setShow={setEditModal}
                id={"id_prom"}
                inputs={inputs}
            />
            <EditModal
                showModal={editModal}
                setModal={setEditModal}
                url={MyURL + "/promotions/"}
                globalState={promState}
                inputs={inputs}
            />
            <AddModal
                addModal={addModal}
                setAddModal={setAddModal}
                url={MyURL + "/promotions/"}
                globalState={promState}
                inputs={inputs}
            />
        </div>
    );
}