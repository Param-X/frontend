import BidBoxes from "../reusable/BidBoxes";

const RightTrades = () => {
  const headingsData = ["APY", "Size", "Total"];
  const contentData = [
    {
      apy: "2.4535",
      size: "13.53",
      total: "128.39",
    },
    {
      apy: "2.4535",
      size: "13.53",
      total: "128.39",
    },
    {
      apy: "2.4535",
      size: "13.53",
      total: "128.39",
    },
    {
      apy: "2.4535",
      size: "13.53",
      total: "128.39",
    },
    {
      apy: "2.4535",
      size: "13.53",
      total: "128.39",
    },
    {
      apy: "2.4535",
      size: "13.53",
      total: "128.39",
    },
    {
      apy: "2.4535",
      size: "13.53",
      total: "128.39",
    },
  ];
  return (
    <div className="w-full">
      {/* Bids */}
      <BidBoxes
        title={"Trades"}
        headingsData={headingsData}
        contentData={contentData}
        isTradeBox
      />
    </div>
  );
};

export default RightTrades;
