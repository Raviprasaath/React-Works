import { useState } from "react";
import ModalContent from "./ModalContent";
import { createPortal } from 'react-dom';


const Portal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => {setShowModal(true), console.log('checking')}}>
                Show modal using a portal
            </button>
            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}

export default Portal;