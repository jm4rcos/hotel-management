import { useState } from 'react';

import Avatar from "../ui/Avatar";
import Text from "../ui/Text";
import Search from "../Search";

import { HiChevronDown } from "react-icons/hi";


import { Container, ProfileContainer } from "./style";
import { lightTheme } from "../../themes/colors";

const Header = ({ title }: { title: string }) => {
    const [searchText, setSearchText] = useState<string>("")

    return (
        <Container>
            <Text content={title} type='title' size={18} />

            <Search value={searchText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />

            <ProfileContainer>
                <Text content='João Marcos' type='title' />
                <Avatar size="medium" />
                <HiChevronDown color={lightTheme.title} size={26} />
            </ProfileContainer>
        </Container>
    );
}

export default Header;