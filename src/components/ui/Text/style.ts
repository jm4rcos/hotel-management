import styled from 'styled-components';

import { lightTheme } from '../../../themes/colors';

interface TextProps {
    type: 'text' | 'title';
    size?: number;
}

export const StyledText = styled.span<TextProps>`
    color: ${({ type }) => type === 'text' ? lightTheme.text : lightTheme.title};
    font-size: ${({ size }) => size ? size + 'px' : '16px'};
    font-weight: ${({ type }) => type === 'title' ? 600 : 300};;
`