import { useState } from "react";
import { BsCaretDown } from "react-icons/bs";

const DateDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    date: "31 March 2025",
    days: 55,
  });

  const dates = [
    { date: "31 March 2025", days: 55 },
    { date: "30 June 2025", days: 146 },
    { date: "30 September 2025", days: 238 },
    { date: "31 December 2025", days: 330 },
  ];

  const handleSelect = (dateObj) => {
    setSelectedDate(dateObj);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-xs text-offWhiteColor">
          {selectedDate.date} ({selectedDate.days} Days)
        </p>
        <BsCaretDown color="#fff" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-8 left-0 bg-themeBlue text-white rounded-lg shadow-lg py-2 w-48 z-10 border border-borderColor border-opacity-30">
          {dates.map((dateObj) => (
            <div
              key={dateObj.date}
              className="px-4 py-2 text-xs hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSelect(dateObj)}
            >
              {dateObj.date} ({dateObj.days} Days)
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateDropdown;
