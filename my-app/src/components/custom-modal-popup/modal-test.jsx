import { useState } from "react"
import Modal from './modal';
import './modal.css'




export default function ModalTest(){

    const[showModalPopup,setShowModalPopup]=useState(false);

    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup);
    }

    function onClose(){
        setShowModalPopup(false);
    }

    return <div>
        <button onClick={handleToggleModalPopup}>Open Modal popup</button>
        {
            showModalPopup&&<Modal onClose={onClose}
            body={<div>Customized body</div>}
            header={<div>Customized header</div>}
            footer={<div>Customized footer</div>}
            />
        }
    </div>
}