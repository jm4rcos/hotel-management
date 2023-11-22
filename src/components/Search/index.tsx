import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import { lightTheme } from "../../themes/colors";

import { SearchContainer } from "./style";

interface SearchProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ value = '', onChange }: SearchProps) {
    return <SearchContainer>
        <input value={value} onChange={onChange} placeholder="Search..." />
        <HiMiniMagnifyingGlass size={26} color={lightTheme.iconGray} />
    </SearchContainer>
}