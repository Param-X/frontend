const LimitAvailableTrade = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full gap-4 pt-4 pr-4">
        {/* left */}
        <p className="text-white text-tenPixel">Available To Trade</p>

        {/* Right */}
        <div className="space-y-1.5">
          <p className="text-white text-tenPixel text-end">0.00 USDC</p>
          <p className="text-white text-tenPixel text-end">0.00 YT SSUI</p>
        </div>
      </div>

      {/* Trade APY Box */}
      <div className="w-full h-[30px] px-2 flex items-center justify-between gap-4 border rounded shadow-cardShadow border-borderColor border-opacity-40 mt-2">
        {/* left */}
        {/* <p className="text-xs text-white">Trade APY</p> */}
        <input
          type="text"
          placeholder="Trade APY"  // Default text when input is empty
          className="text-xs text-white bg-transparent border-none outline-none w-full"
        />

        {/* right */}
        <div className="flex items-center justify-center gap-6">
          <p className="text-xs text-white">2.3923%</p>
          <p className="text-[8px] text-white pt-1.5">Mid</p>
        </div>
      </div>

      {/* Size */}
      <div className="w-full h-[30px] px-2 flex items-center justify-between gap-4 border rounded shadow-cardShadow border-borderColor border-opacity-40 mt-2">
        {/* Left side: Label */}
        <input
          type="text"
          placeholder="Size"  // Default text when input is empty
          className="text-xs text-white bg-transparent border-none outline-none w-full"
        />

        {/* Right side: Currency */}
        <p className="text-xs text-white">YT SSUI</p>
      </div>
    </>
  );
};

export default LimitAvailableTrade;
