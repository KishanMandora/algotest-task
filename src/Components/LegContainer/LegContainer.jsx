import { useState } from "react";
import { LegList } from "..";
import { LegsListProvider } from "../../Context/LegsListContext";

function LegContainer() {
  const [allLegs, setAllLegs] = useState([]);
  const [showLegMenu, setShowLegMenu] = useState(true);

  const isActive = showLegMenu ? "opacity-20" : "";

  const toggleShowLeg = () => setShowLegMenu((prev) => !prev);
  console.log(allLegs);

  return (
    <div className="col-span-4 mt-16 p-4 font-bold text-black-color">
      <div className="mb-3 flex items-center justify-between border-b px-3">
        <span className="text-sm"> Legs</span>
        <span className={`text-lg text-primary-color ${isActive}`}>
          <button onClick={toggleShowLeg}>+ Add Leg</button>
        </span>
      </div>
      {showLegMenu ? (
        <LegsListProvider>
          <LegList setAllLegs={setAllLegs} setShowLegMenu={setShowLegMenu} />
        </LegsListProvider>
      ) : null}
    </div>
  );
}

export { LegContainer };
