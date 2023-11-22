import React, { useState } from 'react';
import { Link } from "react-router-dom"

import { LuLayoutDashboard, LuClipboardList } from 'react-icons/lu';
import { BiSolidDashboard } from 'react-icons/bi';
import { HiClipboardList } from 'react-icons/hi';

import { lightTheme } from '../../themes/colors'
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

    return (
        <StyledSidebar>
            <Logo>Hotel Management</Logo>
            <ul>
                {routes.map((route, index) => {
                    return <StyledList selected={selected === index} key={index} color={selected === index ? lightTheme.greenDark : 'gray'}>

                        {React.cloneElement(
                            route.icon[selected === index ? 0 : 1],
                            { color: selected === index ? lightTheme.greenDark : lightTheme.iconGray }
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