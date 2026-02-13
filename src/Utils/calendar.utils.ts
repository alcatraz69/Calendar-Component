import { CalendarDay } from '../Types/calendar.type';

//Get the number of days in a given month
export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

//Get the day of the week for the first day of the month (0 - 6 )
export const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

//Format month and year for display
export const formatMonthYear = (date: Date): string => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};


export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};


export const generateCalendarDays = (
  year: number,
  month: number,
  selectedDate: Date
): CalendarDay[] => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfMonth(year, month);
  const calendarDays: CalendarDay[] = [];
  
  
  for (let i = 0; i < firstDayOfWeek; i++) {
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
    const date = daysInPrevMonth - firstDayOfWeek + i + 1;
    
    calendarDays.push({
      date,
      isSelected: false,
      isCurrentMonth: false,
    });
  }
  
  
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, month, day);
    
    calendarDays.push({
      date: day,
      isSelected: isSameDay(currentDate, selectedDate),
      isCurrentMonth: true,
    });
  }
  
  
  const totalCells = 42; // 6 rows × 7 days
  const remainingCells = totalCells - calendarDays.length;
  
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      date: day,
      isSelected: false,
      isCurrentMonth: false,
    });
  }
  
  return calendarDays;
};

export const getDayLabels = (): string[] => {
  return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
};
