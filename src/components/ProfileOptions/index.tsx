import { useContext } from "react";
import { ThemeContextProps, ThemeContext } from "../../context/theme-context";
import { Container } from "./style";

import { CiLight, CiDark } from "react-icons/ci";

export default function ProfileOptions({ onClick }: { onClick: () => void; }) {
    const { getThemeColors, theme: selectedTheme } = useContext(ThemeContext) as ThemeContextProps;
    const theme = getThemeColors()

    return <Container appTheme={theme}>
        <div
            className="profile-options-content"
            onClick={onClick}
        >
            <p>{selectedTheme === 'light' ? 'Light Mode' : 'Dark Mode'}</p>
            {selectedTheme === 'light' ? <CiLight size={26} /> : <CiDark size={26} />}
        </div>
    </Container>
}