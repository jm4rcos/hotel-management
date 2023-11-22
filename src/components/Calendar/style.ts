import styled, { css } from 'styled-components';
import { lightTheme } from '../../themes/colors';

interface DayProps {
  selected: boolean;
  today: string;
}

export const CalendarContainer = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Day = styled.div<DayProps>`
  margin: 5px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  .date {
    color: ${({ selected }) => (selected) && lightTheme.blueDark};    
  }

  .main-date {
    background-color: ${({ today }) => today === 'true' ? lightTheme.blueLight : 'transparent'};
    ${({ today }) => today === 'true' && css`color: ${lightTheme.blueDark};`}
    ${({ selected }) => selected && css`color: ${lightTheme.blueDark};`}
    height: 40px;
    width: 40px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DayContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const Label = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`