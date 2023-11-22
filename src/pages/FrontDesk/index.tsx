import Calendar from "../../components/Calendar";
import Table from "../../components/Table";
import Button from "../../components/ui/Button";

import { Container } from "./style";

const fakeData = [
    { stay: '1', name: 'John Doe', room: '101', checkoutDate: '2023-01-01', inPay: 'R$: 4500,00' },
    { stay: '2', name: 'Jane Doe', room: '102', checkoutDate: '2023-01-02', inPay: 'R$: 0   ' },
];

const FrontDesk = () => {
    return <Container>
        <div className="button-container">
            <Button label="Add New Guest" />
        </div>
        <Calendar />
        <Table data={fakeData} />
    </Container>
}

export default FrontDesk;