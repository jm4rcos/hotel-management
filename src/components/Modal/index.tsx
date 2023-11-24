import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { useTheme } from '../../hooks/useTheme';
import { IoIosCloseCircle } from "react-icons/io";

import { lightTheme } from '../../themes/colors';
import { ModalContainer } from './style';
import Text from '../ui/Text';

interface ModalProps {
    children: ReactNode;
    title?: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, title, onClose }) => {
    const theme = useTheme();

    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <ModalContainer appTheme={theme}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <Text content={title} type='title' size={18} />
                    <IoIosCloseCircle
                        className="close-icon"
                        color={lightTheme.redDark}
                        size={30}
                        onClick={onClose}
                    />
                </div>
                {children}
            </div>
        </ModalContainer>, modalRoot
    );
};

export default Modal; 