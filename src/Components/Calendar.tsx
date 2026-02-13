import { CalendarProps } from "../Types/calendar.type";
import { formatMonthYear,getDayLabels,generateCalendarDays } from "../Utils/calendar.utils";

export const Calendar: React.FC<CalendarProps> = ({date}) => {
   const year = date.getFullYear();
  const month = date.getMonth();
  
  const monthYearLabel = formatMonthYear(date);
  const dayLabels = getDayLabels();
  const calendarDays = generateCalendarDays(year, month, date);
  
  return (
    <div className="calendar inline-block bg-slate-800 text-white p-3 rounded-sm" style={{ fontFamily: 'monospace' }}>
      {/* Month and Year Header */}
      <div className="calendar-header text-center mb-2">
        <h2 className="text-sm text-gray-400">
          {monthYearLabel}
        </h2>
      </div>
      
      {/* Calendar Grid */}
      <div className="calendar-grid">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-0 mb-1">
          {dayLabels.map((day) => (
            <div
              key={day}
              className="text-center text-xs text-gray-400 w-6 h-5 flex items-center justify-center"
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Date Cells */}
        <div className="grid grid-cols-7 gap-0">
          {calendarDays.map((calendarDay, index) => (
            <div
              key={index}
              className={`
                text-center text-xs w-6 h-5 flex items-center justify-center
                ${calendarDay.isCurrentMonth 
                  ? 'text-white' 
                  : 'text-gray-600'
                }
                ${calendarDay.isSelected 
                  ? 'bg-green-200 text-gray-950' 
                  : ''
                }
              `}
              data-testid={
                calendarDay.isSelected 
                  ? 'selected-date' 
                  : calendarDay.isCurrentMonth 
                    ? 'current-month-date' 
                    : 'other-month-date'
              }
            >
              {calendarDay.date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
