import BidBoxes from "../reusable/BidBoxes";

const RightOrderbook = () => {
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
    <>
      {/* Bids */}
      <BidBoxes
        title={"Bids"}
        headingsData={headingsData}
        contentData={contentData}
      />

      {/* Asks */}
      <BidBoxes
        title={"Asks"}
        headingsData={headingsData}
        contentData={contentData}
      />
    </>
  );
};

export default RightOrderbook;
