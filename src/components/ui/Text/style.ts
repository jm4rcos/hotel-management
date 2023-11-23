import styled from 'styled-components';

import { ThemeColors } from '../../../context/theme-context';

interface TextProps {
    type: 'text' | 'title';
    size?: number;
    appTheme: ThemeColors;
}

export const StyledText = styled.span<TextProps>`
    color: ${({ type, appTheme }) => type === 'text' ? appTheme.text : appTheme.title};
    font-size: ${({ size }) => size ? size + 'px' : '16px'};
    font-weight: ${({ type }) => type === 'title' ? 600 : 300};;
`