import SuiIcon from "../../assets/sui.svg";
import AvailableToTrade from "../reusable/AvailableToTrade";
import DateDropdown from "../reusable/DateDropdown";

const FIPopup = ({ openState }) => {
  // Data
  const cardsDetailsData = [
    {
      id: 1,
      label: "Order Value",
      hasUnderline: false,
      value: "1932.23",
    },
    {
      id: 2,
      label: "Fixed APY",
      hasUnderline: false,
      value: "2.3847%",
    },
    {
      id: 3,
      label: "Expiration",
      hasUnderline: false,
      value: "31 March 2025 (55 Days)",
    },
    {
      id: 4,
      label: "Slippage",
      hasUnderline: true,
      value: "Est: 0.0282%/ Max: 102",
    },
    {
      id: 5,
      label: "Fees",
      hasUnderline: true,
      value: "0.0350% / 0.0100%",
    },
    {
      id: 6,
      label: "Amount Claimable in 55 Days",
      hasUnderline: false,
      value: "2739.278 SSUI",
    },
  ];

  return (
    <div
      className={`w-full max-w-[400px] bg-themeBlue shadow-cardShadow rounded border border-borderColor border-opacity-40 px-2.5 py-5 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${
        openState === true
          ? "opacity-100 visible top-1/2"
          : "opacity-0 invisible top-[65%]"
      } transition-all duration-200`}
    >
      {/* Heading */}
      <div className="flex items-center justify-between w-full pb-2.5 border-b border-b-white">
        {/* left */}
        <div className="flex items-center gap-2">
          <img src={SuiIcon} alt="sui__icon" />
          <p className="text-xs text-white">Spring Staked SUI</p>
        </div>

        {/* Right */}
        <DateDropdown />
      </div>

      {/* Confirm Fixed APY */}
      <div className="px-5 py-4 border-b border-b-white">
        {/* Heading */}
        <div className="flex items-center justify-around gap-4">
          <p className="text-xs text-white">Fixed APY</p>
          <p className="text-xs text-white">2.3923%</p>
        </div>

        {/* Available To Trade */}
        <div className="w-full">
          <AvailableToTrade />

          {/* Confirm Btn */}
          <button className="mt-6 themeBtn">Confirm Fixed APY</button>
        </div>
      </div>

      {/* Data about the orders */}
      <div className="pt-2.5 px-6 space-y-2">
        {/* Single Item */}
        {cardsDetailsData?.map(({ id, label, value, hasUnderline }) => (
          <div key={id} className="flex items-center justify-between gap-2">
            {/* left */}
            <p
              className={`text-xs text-offWhiteColor ${
                hasUnderline === true ? "underline underline-offset-2" : ""
              }`}
            >
              {label}
            </p>

            {/* Right */}
            <p className="text-xs text-offWhiteColor text-end">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FIPopup;
