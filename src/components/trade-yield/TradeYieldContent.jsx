import OrderbooksAndTrades from "./OrderbooksAndTrades";
import TradeBuySellBox from "./TradeBuySellBox";
import TradeMonitor from "./TradeMonitor";
import TradeOrderBook from "./TradeOrderBook";

const TradeYieldContent = () => {
  return (
    <div className="w-full bg-black screen-height">
      {/* Wrapper Start */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        {/* Layout */}
        <div className="grid grid-cols-[1fr_400px] gap-11">
          {/* left */}
          <div className="w-full">
            {/* Monitor */}
            <TradeMonitor />

            {/* Order Book */}
            <TradeOrderBook />
          </div>

          {/* Right */}
          <div className="w-full">
            {/* Buy Sell Box */}
            <TradeBuySellBox />

            {/* Orderbook and trades */}
            <OrderbooksAndTrades />
          </div>
        </div>
      </div>
      {/* Wrapper End */}
    </div>
  );
};

export default TradeYieldContent;
