import { useState, useEffect } from "react";
import BidBoxes from "../reusable/BidBoxes";

const generateFakeData = (isBid) => {
  // Random APY generation between 2% and 3% (bid/ask range)
  const apy = (Math.random() * 1 + 2).toFixed(4);

  // Random Size between 10 and 100
  const size = (Math.random() * 90 + 10).toFixed(2);

  // Random Total calculation: Total = Size * APY
  const total = (parseFloat(size) * parseFloat(apy)).toFixed(2);

  return {
    apy,
    size,
    total,
  };
};

const RightOrderbook = () => {
  // Initialize the bids and asks as empty arrays initially
  const initialBids = Array.from({ length: 7 }, () => generateFakeData(true));
  const initialAsks = Array.from({ length: 7 }, () => generateFakeData(false));

  const [bids, setBids] = useState(initialBids);
  const [asks, setAsks] = useState(initialAsks);

  useEffect(() => {
    // Initialize the bids and asks when the component mounts

    // Simulate live updates every 10 seconds (slower rate)
    const intervalId = setInterval(() => {
      // Create copies of the current bids and asks to simulate changes
      const updatedBids = [...bids];
      const updatedAsks = [...asks];

      // Insert new fake bid/ask at the top
      updatedBids.unshift(generateFakeData(true));  // Insert a new fake bid at the top
      updatedAsks.unshift(generateFakeData(false)); // Insert a new fake ask at the top

      // Remove the last element to simulate filled orders (order book size stays constant)
      updatedBids.pop();  // Remove the last bid
      updatedAsks.pop();  // Remove the last ask

      // Update state with the new data
      setBids(updatedBids);
      setAsks(updatedAsks);
    }, 1000); // Update every 10 seconds for slower changes

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [bids, asks]); // Ensure to recreate the interval only if bids or asks change

  const headingsData = ["APY", "Size", "Total"];

  return (
    <>
      {/* Bids */}
      <BidBoxes
        title={"Bids"}
        headingsData={headingsData}
        contentData={bids}
      />

      {/* Asks */}
      <BidBoxes
        title={"Asks"}
        headingsData={headingsData}
        contentData={asks}
      />
    </>
  );
};

export default RightOrderbook;
