import { BsCaretDown } from "react-icons/bs";

const DateDropdown = () => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-xs text-offWhiteColor">31 March 2025 (55 Days)</p>
      <BsCaretDown color="#fff" />
    </div>
  );
};

export default DateDropdown;
