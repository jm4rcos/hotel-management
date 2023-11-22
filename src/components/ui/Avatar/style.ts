import styled, { css } from 'styled-components';

import { lightTheme } from '../../../themes/colors';

interface AvatarProps {
    size: 'small' | 'medium' | 'large';
}

export const AvatarContainer = styled.span<AvatarProps>`
    background: ${lightTheme.gray200};
    border-radius: 50%;
    
    ${({ size }) => size === 'small' && css`height: 16px; width: 16px;`}
    ${({ size }) => size === 'medium' && css`height: 32px; width: 32px;`}
    ${({ size }) => size === 'large' && css`height: 64px; width: 64px;`}
`