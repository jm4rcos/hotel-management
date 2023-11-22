import styled from 'styled-components';

import { lightTheme } from '../../themes/colors';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: ${lightTheme.background};

    .button-container{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        padding: 16px 16px 0 0;
        margin-bottom: -16px;
    }
`