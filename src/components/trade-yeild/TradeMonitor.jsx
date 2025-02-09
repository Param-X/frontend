import TradeMonitorHeading from "./TradeMonitorHeading";
import TradeMonitorLogs from "./TradeMonitorLogs";

const TradeMonitor = () => {
  return (
    <div className="w-full px-2 pt-5 pb-6 border rounded border-borderColor border-opacity-30 shadow-cardShadow bg-themeBlue">
      {/* Heading */}
      <TradeMonitorHeading />

      {/* Logs */}
      <TradeMonitorLogs />
    </div>
  );
};

export default TradeMonitor;
