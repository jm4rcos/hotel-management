import { useContext } from "react";
import { HeaderCell, TableContainer, DataCell } from "./style";
import { ThemeContext, ThemeContextProps } from "../../context/theme-context";

export default function Table({ data }: { data: any[] }) {
    const { getThemeColors } = useContext(ThemeContext) as ThemeContextProps;
    const theme = getThemeColors();

    return <TableContainer appTheme={theme}>
        <thead>
            <HeaderCell appTheme={theme}>
                <th>Stay</th>
                <th>Guest Name</th>
                <th>Room</th>
                <th>Check-out Date</th>
                <th>Payment Status</th>
            </HeaderCell>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <DataCell appTheme={theme} key={index}>
                    <td>{item.stay}</td>
                    <td>{item.name}</td>
                    <td>{item.room}</td>
                    <td>{item.checkoutDate}</td>
                    <td>{item.inPay}</td>
                </DataCell>
            ))}
        </tbody>
    </TableContainer>
}