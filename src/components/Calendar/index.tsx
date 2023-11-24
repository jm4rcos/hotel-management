import { useContext, useState } from 'react';

import Text from '../ui/Text';

import { IoCalendarOutline } from "react-icons/io5";

import { CalendarContainer, Day, DayContainer, Label } from './style';
import { ThemeContextProps, ThemeContext } from '../../context/theme-context';

export default function Calendar() {
    const { getThemeColors, theme: themeName } = useContext(ThemeContext) as ThemeContextProps;
    const theme = getThemeColors();

    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const currentDate = new Date();
    const currentDay = currentDate.getUTCDate() - 1;
    const currentMonth = currentDate.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    const currentYear = currentDate.getUTCFullYear();


    const handleDayClick = (day: number) => {
        setSelectedDay(day);
    };

    const renderDays = () => {
        const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
        const days = [];

        for (let i = 0; i < 7; i++) {
            const dayNumber = currentDay + i - 1;
            const dayToShow = dayNumber > daysInMonth ? dayNumber - daysInMonth : dayNumber;

            days.push(
                <Day
                    key={i}
                    today={currentDayOfWeek === daysOfWeek[i] ? 'true' : 'false'}
                    selected={dayNumber === selectedDay}
                    onClick={() => handleDayClick(dayToShow)}
                    appTheme={theme}
                    themeName={themeName}
                >
                    <p className='date'>{daysOfWeek[i]}</p>
                    <p className='main-date'>{dayNumber === currentDay ? currentDay - 1 : dayToShow - 1}</p>
                </Day>
            );
        }

        return days;
    };


    return (
        <CalendarContainer appTheme={theme} themeName={themeName}>
            <Label>
                <IoCalendarOutline size={20} color={theme.title} />
                <Text type='title' content={`${selectedDay !== null ? selectedDay : currentDay} ${currentMonth}, ${currentDayOfWeek}`} />
            </Label>
            <DayContainer>
                {renderDays()}
            </DayContainer>
        </CalendarContainer>
    );
}