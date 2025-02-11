import { useState } from "react";

const LimitAvailableTrade = () => {
  const [tradeAPY, setTradeAPY] = useState("");

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[^0-9.]/g, ""); // Remove non-numeric & non-dot chars
    value = value.replace(/^(\d*\.?\d*).*$/, "$1"); // Allow only one decimal point
    if (value) {
      setTradeAPY(value + "%");
    } else {
      setTradeAPY("");
    }
  };

  const generateRandomAPY = () => {
    const base = 2.39;
    const randomDecimal = (Math.random() * 0.01).toFixed(4); // Small variation
    setTradeAPY(`${(base + parseFloat(randomDecimal)).toFixed(4)}%`);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full gap-4 pt-4 pr-4">
        {/* Left */}
        <p className="text-white text-tenPixel">Available To Trade</p>

        {/* Right */}
        <div className="space-y-1.5">
          <p className="text-white text-tenPixel text-end">0.00 USDC</p>
          <p className="text-white text-tenPixel text-end">0.00 YT SSUI</p>
        </div>
      </div>

      {/* Yield APY Box */}
      <div className="w-full h-[30px] px-2 flex items-center justify-between gap-4 border rounded shadow-cardShadow border-borderColor border-opacity-40 mt-2 relative">
        {/* Left: Label */}
        <p className="text-xs text-white w-full">Yield APY</p>

        {/* Input Field */}
        <input
          type="text"
          value={tradeAPY}
          onChange={handleInputChange}
          placeholder="3.927"
          className="text-xs text-white text-right bg-transparent border-none outline-none w-full"
        />

        {/* Button to Set APY */}
        <button
          onClick={generateRandomAPY}
          className="text-[10px] text-white pt-0.5 pr-1.5 bg-themeBlue px-2 pl-0.5 pr-1 rounded hover:bg-gray-600 transition"
        >
          Mid
        </button>
      </div>

      {/* Size */}
      <div className="w-full h-[30px] px-2 flex items-center justify-between gap-4 border rounded shadow-cardShadow border-borderColor border-opacity-40 mt-2">
        {/* Left: Input */}
        <input
          type="text"
          placeholder="Size"
          className="text-xs text-white bg-transparent border-none outline-none w-full"
        />

        {/* Right: Currency */}
        <p className="text-xs text-white w-[60px]">YT SSUI</p>
      </div>
    </>
  );
};

export default LimitAvailableTrade;
