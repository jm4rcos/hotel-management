import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { ModalContainer } from './style';

interface ModalProps {
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    return ReactDOM.createPortal(<ModalContainer>{children}</ModalContainer>, modalRoot);
};

export default Modal; 