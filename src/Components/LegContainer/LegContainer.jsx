import { useState } from "react";
import { LegList } from "..";

function LegContainer() {
  const [showLegMenu, setShowLegMenu] = useState(true);

  return (
    <div className="col-span-4 mt-16 p-4 font-bold text-black-color">
      <div className="mb-3 flex items-center justify-between border-b px-3">
        <span className="text-sm"> Legs</span>
        <span className="text-lg text-primary-color">
          <button onClick={() => setShowLegMenu((prev) => !prev)}>
            + Add Leg
          </button>
        </span>
      </div>
      {showLegMenu ? <LegList /> : null}
    </div>
  );
}

export { LegContainer };
