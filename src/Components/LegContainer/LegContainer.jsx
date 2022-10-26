import { useState } from "react";
import { LegsListProvider } from "../../Context/LegsListContext";
import { LegList, LegItem } from "..";

function LegContainer() {
  const [allLegs, setAllLegs] = useState([]);
  const [legJson, setLegJson] = useState(null);
  const [showLegMenu, setShowLegMenu] = useState(true);

  const isActive = showLegMenu ? "opacity-20" : "";

  const toggleShowLeg = () => setShowLegMenu((prev) => !prev);

  const handleLegUpdate = (id, legType) => (value) =>
    setAllLegs((prev) =>
      prev.map((leg) => (leg.id === id ? { ...leg, [legType]: value } : leg))
    );

  const handleLegJson = () => {
    console.log("from leg json ");
    setLegJson(
      allLegs.reduce((prev, curr) => {
        const filteredLeg = { ...curr };
        delete filteredLeg.id;
        delete filteredLeg.paramValues;
        return prev + JSON.stringify(filteredLeg, null, 2) + "\n";
      }, "")
    );
  };

  console.log("all legs", allLegs);
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
      <LegItem
        allLegs={allLegs}
        setAllLegs={setAllLegs}
        handleLegUpdate={handleLegUpdate}
      />

      <div>
        <div className="mb-3 flex items-center justify-between border-b px-3">
          <div>
            <span className="text-sm"> Legs JSON</span>
          </div>
          <div>
            <button
              className="rounded-md border-2 border-primary-color px-4 py-2 text-sm"
              onClick={handleLegJson}
            >
              Submit
            </button>
          </div>
        </div>
        <section>
          {legJson ? (
            <div className="rounded-md bg-white-color p-4 font-normal">
              <pre> {legJson} </pre>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}

export { LegContainer };
