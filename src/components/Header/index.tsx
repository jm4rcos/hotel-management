import { useContext, useState } from 'react';

import Avatar from "../ui/Avatar";
import Text from "../ui/Text";
import Search from "../Search";

import { HiChevronDown } from "react-icons/hi";


import { Container, ProfileContainer } from "./style";
import { lightTheme } from "../../themes/colors";
import { ThemeContextProps, ThemeContext } from '../../context/theme-context';
// import Modal from '../Modal';
import ProfileOptions from '../ProfileOptions';

const Header = ({ title }: { title: string }) => {
    const [searchText, setSearchText] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
    const [iconRotation, setIconRotation] = useState<number>(0);

    const { toggleTheme } = useContext(ThemeContext) as ThemeContextProps;

    const handleIconClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIconRotation(isMenuOpen ? 0 : 180);
    };

    return (
        <Container>
            <Text content={title} type='title' size={18} />

            <Search value={searchText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />

            <ProfileContainer>
                <Text content='João Marcos' type='title' />
                <Avatar size="medium" />
                <HiChevronDown className="icon-chevron" color={lightTheme.title} size={26} onClick={handleIconClick} style={{ cursor: 'pointer', transition: 'all 0.2s ease', transform: `rotate(${iconRotation}deg)` }} />
                {isMenuOpen && (
                    <ProfileOptions
                        onClick={() => {
                            toggleTheme()
                            handleIconClick()
                        }}
                    />)
                }
            </ProfileContainer>

            {/* {isMenuOpen && (
                <Modal>
                    <h1>Teste</h1>
                </Modal>
            )} */}
        </Container>
    );
}

export default Header;