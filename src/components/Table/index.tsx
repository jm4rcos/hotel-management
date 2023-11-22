import { HeaderCell, TableContainer, DataCell } from "./style";

export default function Table({ data }: { data: any[] }) {
    return <TableContainer>
        <thead>
            <tr>
                <HeaderCell>Stay</HeaderCell>
                <HeaderCell>Guest Name</HeaderCell>
                <HeaderCell>Room</HeaderCell>
                <HeaderCell>Check-out Date</HeaderCell>
                <HeaderCell>Payment Status</HeaderCell>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <DataCell>{item.stay}</DataCell>
                    <DataCell>{item.name}</DataCell>
                    <DataCell>{item.room}</DataCell>
                    <DataCell>{item.checkoutDate}</DataCell>
                    <DataCell>{item.inPay}</DataCell>
                </tr>
            ))}
        </tbody>
    </TableContainer>
}