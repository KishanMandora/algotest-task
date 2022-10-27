import { useEffect } from "react";
import { LegContainer, Navbar, Sidebar } from "../Components";

function Backtest() {
  useEffect(() => {
    document.title =
      "Backtest - Free Backtesting Options Trading Strategies in India | AlgoTest";
  });

  return (
    <div className="h-screen font-ubuntu">
      <Navbar />
      <section className="grid min-h-screen w-full grid-cols-4 semi-lg:grid-cols-5">
        <Sidebar />
        <LegContainer />
      </section>
    </div>
  );
}

export { Backtest };
