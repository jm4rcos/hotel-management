import { useContext, useState } from 'react';
import { ThemeContextProps, ThemeContext } from "../../context/theme-context";

import Calendar from "../../components/Calendar";
import Table from "../../components/Table";
import Button from "../../components/ui/Button";

import { Container } from "./style";
import Modal from '../../components/Modal';

const fakeData = [
    { stay: '1', name: 'John Doe', room: '101', checkoutDate: '2023-01-01', inPay: 'R$: 4500,00' },
    { stay: '2', name: 'Jane Doe', room: '102', checkoutDate: '2023-01-02', inPay: 'R$: 0   ' },
];

const FrontDesk = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const { getThemeColors } = useContext(ThemeContext) as ThemeContextProps;
    const theme = getThemeColors()

    return <Container appTheme={theme}>
        <div className="button-container">
            <Button label="Add New Guest" onClick={() => setOpenModal(true)} animation={openModal} />
        </div>
        <Calendar />
        <Table data={fakeData} />

        {openModal && <Modal onClose={() => setOpenModal(false)} title='New Guest'><h1>Teste</h1></Modal>}
    </Container>
}

export default FrontDesk;