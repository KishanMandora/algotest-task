import { useState } from "react";
import { LegsListProvider } from "../../Context/LegsListContext";
import { LegList, LegItem } from "..";

function LegContainer() {
  const [allLegs, setAllLegs] = useState([]);
  const [showLegMenu, setShowLegMenu] = useState(true);

  const isActive = showLegMenu ? "opacity-20" : "";

  const toggleShowLeg = () => setShowLegMenu((prev) => !prev);

  const handleLegUpdate = (id, legType) => (value) =>
    setAllLegs((prev) =>
      prev.map((leg) => (leg.id === id ? { ...leg, [legType]: value } : leg))
    );

  return (
    <div className="col-span-4 mt-16 py-4 px-10 font-bold text-black-color">
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
      <LegItem allLegs={allLegs} handleLegUpdate={handleLegUpdate} />
    </div>
  );
}

export { LegContainer };
