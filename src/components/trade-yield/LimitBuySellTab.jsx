import { useState } from "react";
import LimitAvailableTrade from "../reusable/LimitAvailableTrade";

const LimitBuySellTab = () => {
  const selectionBtns = ["Buy", "Sell"];
  const [activeSelection, setActiveSelection] = useState("buy");

  const data = [
    {
      label: "Order Value",
      hasUnderline: false,
      value: "1932.23",
    },
    {
      label: "Slippage",
      hasUnderline: true,
      value: "Est: 0.0282%/ Max: 102",
    },
    {
      label: "Fees",
      hasUnderline: true,
      value: "0.0350% / 0.0100%",
    },
  ];

  return (
    <>
      {/* Buy Sell Zone */}
      <div className="border-y border-y-borderColor border-opacity-80 pt-5 pb-3.5">
        {/* Btns */}
        <div className="w-[140px] mx-auto bg-themeBlue shadow-cardShadow h-[30px] flex items-center border border-borderColor border-opacity-40 rounded">
          {/* Btn */}
          {selectionBtns?.map((item, idx) => (
            <button
              key={idx}
              className={`w-full h-full text-center rounded text-tenPixel ${
                activeSelection === item.toLowerCase()
                  ? "text-black bg-activeBtnBg shadow-cardShadow"
                  : "bg-transparent text-white"
              }`}
              onClick={() => setActiveSelection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Available to trade */}
        <div className="w-full px-8">
          <LimitAvailableTrade />
          {/* Trade APY */}
          <div className="mt-2 text-end">
            <p className="text-xs text-offWhiteColor">GTC</p>
          </div>
        </div>

        {/* Btn */}
        <button className="mt-4 themeBtn">Confirm Trade</button>
      </div>

      {/* Details */}
      <div className="pt-2.5 space-y-1 px-4">
        {data?.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between gap-2">
            <p
              className={`text-tenPixel text-offWhiteColor ${
                item?.hasUnderline === true
                  ? "underline underline-offset-2"
                  : ""
              }`}
            >
              {item.label}
            </p>
            <p className="text-tenPixel text-offWhiteColor">{item.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LimitBuySellTab;
