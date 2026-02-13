export type CalendarProps = {
    date: Date;
}

export type CalendarDay = {
  date: number;
  isSelected: boolean;
  isCurrentMonth: boolean;
}

export type CalendarConfig = {
 
  firstDayOfWeek: number;
  dayLabels: string[];
}