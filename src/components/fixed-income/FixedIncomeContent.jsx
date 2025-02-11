import FICard from "./FICard";
import FIPopup from "./FIPopup"

const FixedIncomeContent = () => {
  return (
    <div className="w-full py-10 bg-black screen-height">
      {/* Wrapper Start */}
      <div className="w-full max-w-[1200px] mx-auto relative">
        {/* <FICard /> */}
        {/* Popup */}
        <FIPopup openState={true} />
      </div>
      {/* Wrapper End */}
    </div>
  );
};

export default FixedIncomeContent;

