import React from 'react';

const Modal = ({ selectedImg }) => {

    return (
        <div className="backdrop">
            <img scr={selectedImg} alt="enlarged pic" />
        </div>
    )
}

export default Modal; 