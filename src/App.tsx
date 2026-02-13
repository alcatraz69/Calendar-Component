import { useState } from "react";
import { Calendar } from "./Components/Calendar";

function App() {
   const [selectedDate, setSelectedDate] = useState(new Date(2015, 8, 10));
  
  const sampleDates = [
    { label: 'September 10, 2015', date: new Date(2015, 8, 10) },
    { label: 'March 6, 2020', date: new Date(2020, 2, 6) },
    { label: 'January 1, 2023', date: new Date(2023, 0, 1) },
    { label: 'December 11, 2022', date: new Date(2022, 11, 11) },
    { label: 'February 12, 2026', date: new Date(2026, 1, 12) },
  ];
  
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Calendar Component Library
        </h1>
        
        <div className="mb-6 text-center">
          <p className="text-gray-300 mb-4">
            Select a date to pass it to the Calendar Component as props
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {sampleDates.map((sampleDate, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(sampleDate.date)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-colors
                  ${selectedDate.getTime() === sampleDate.date.getTime()
                    ? 'bg-green-200 text-gray'
                    : 'bg-slate-700 text-gray-200 hover:bg-slate-600'
                  }
                `}
              >
                {sampleDate.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <Calendar date={selectedDate} />
        </div>
        
       
      </div>
    </div>
  );
}

export default App;
