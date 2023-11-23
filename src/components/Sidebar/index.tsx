import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom"

import { ThemeContext, ThemeContextProps } from '../../context/theme-context';

import { LuLayoutDashboard, LuClipboardList } from 'react-icons/lu';
import { BiSolidDashboard } from 'react-icons/bi';
import { HiClipboardList } from 'react-icons/hi';
import { StyledList, StyledSidebar, Logo } from "./style";

const routes = [
    { label: 'Dashboard', destination: '/', icon: [<BiSolidDashboard size={24} />, <LuLayoutDashboard size={24} />] },
    { label: 'Front Desk', destination: '/front-desk', icon: [<HiClipboardList size={24} />, <LuClipboardList size={24} />] }
]

interface SidebarProps {
    setPath: (index: string) => void;
}

const Sidebar = ({ setPath }: SidebarProps) => {
    const [selected, setSelected] = useState<number>(0);

    const { getThemeColors } = useContext(ThemeContext) as ThemeContextProps
    const theme = getThemeColors();

    return (
        <StyledSidebar appTheme={theme}>
            <Logo appTheme={theme}>Hotel Management</Logo>
            <ul>
                {routes.map((route, index) => {
                    return <StyledList selected={selected === index} key={index} color={selected === index ? theme.greenDark : 'gray'}>

                        {React.cloneElement(
                            route.icon[selected === index ? 0 : 1],
                            { color: selected === index ? theme.greenDark : theme.iconGray }
                        )}

                        <Link
                            to={route.destination}
                            onClick={() => {
                                setSelected(index)
                                setPath(route.label)
                            }}
                        >
                            {route.label}
                        </Link>
                    </StyledList>
                })}
            </ul>
        </StyledSidebar>
    );
}

export default Sidebar;