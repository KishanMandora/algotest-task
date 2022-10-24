function Sidebar() {
  return (
    <div className="hidden bg-black-color semi-lg:block">
      <div className="sticky top-12 text-sm text-white-color">
        <div className="py-4 px-5">
          <a href="https://algotest.in/dashboard">Dashboard</a>
        </div>
        <div className="py-4 px-5 text-gray-color">
          <h6> Saved Strategies </h6>
        </div>
        <div className="py-4 px-5">#920Straddle</div>
        <div className="py-4 px-5">#9VWAP</div>
      </div>
    </div>
  );
}

export { Sidebar };
