const BidBoxes = ({ title, headingsData, contentData, isTradeBox = false }) => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="py-2.5">
        <p className="text-xs text-center text-offWhiteColor">{title}</p>
      </div>

      {/* Container */}
      <div
        className={`w-full ${
          isTradeBox === true ? "h-[436px]" : "h-[200px]"
        } overflow-auto bg-black rounded border-y border-y-borderColor border-opacity-40 shadow-cardShadow p-2 space-y-2`}
      >
        {/* Heading */}
        <div className="grid grid-cols-3 gap-1">
          {/* APY */}
          {headingsData?.map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="text-tenPixel text-offWhiteColor">{item}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        {contentData?.map((item, idx) => (
          <div key={idx} className="grid grid-cols-3 gap-1">
            {/* APY */}
            <div className="text-center">
              <p className="text-tenPixel text-offWhiteColor">{item?.apy}</p>
            </div>

            {/* Size */}
            <div className="text-center">
              <p className="text-tenPixel text-offWhiteColor">{item?.size}</p>
            </div>

            {/* Total */}
            <div className="text-center">
              <p className="text-tenPixel text-offWhiteColor">{item?.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BidBoxes;
