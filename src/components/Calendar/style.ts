import styled from 'styled-components';
import { ThemeColors } from '../../context/theme-context';

interface DayProps {
  selected?: boolean;
  today?: string;
  appTheme: ThemeColors
  themeName: string
}

export const CalendarContainer = styled.div<DayProps>`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 14px;

    ${({ themeName, appTheme }) => themeName === 'light' && `background-color: ${appTheme.gray100};`};
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
    color: ${({ selected, appTheme }) => (selected) && appTheme.blueDark};    
  }

  .main-date {
    background-color: ${({ today, appTheme }) => today === 'true' ? appTheme.blueLight : 'transparent'};
    ${({ today, appTheme }) => today === 'true' && `color: ${appTheme.blueDark};`}
    ${({ selected, appTheme }) => selected && `color: ${appTheme.blueDark};`}
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