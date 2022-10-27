import { useState } from "react";
import { LegsListProvider } from "../../Context/LegsListContext";
import { LegList, LegItem } from "..";
import { addData, fetchData } from "../../helpers/firebase.config";

function LegContainer() {
  const [allLegs, setAllLegs] = useState([]);
  const [legJson, setLegJson] = useState("");
  const [showLegMenu, setShowLegMenu] = useState(true);

  const isActive = showLegMenu ? "opacity-20" : "";

  const toggleShowLeg = () => setShowLegMenu((prev) => !prev);

  const handleLegUpdate = (id, legType) => (value) =>
    setAllLegs((prev) =>
      prev.map((leg) => (leg.id === id ? { ...leg, [legType]: value } : leg))
    );

  const handleFirestoreUpdate = () => {
    allLegs.forEach((leg) => {
      const filterLeg = { ...leg };
      delete filterLeg.id;
      delete filterLeg.paramValues;
      addData(filterLeg);
    });
  };

  console.log("API key", import.meta.env.VITE_API_KEY);

  console.log("all legs", allLegs);
  console.log("legs json", legJson);

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
        <div className="mb-3 flex items-center justify-between border-b px-3 py-2 text-sm">
          <div>
            <span> Legs JSON</span>
          </div>
          <div className="flex gap-2">
            <button
              className="rounded-full bg-white-color py-1  px-8 font-normal text-primary-color"
              onClick={() => fetchData(setLegJson)}
            >
              Fetch List
            </button>
            <button
              className="rounded-full bg-primary-color py-1 px-8 font-normal text-white-color"
              onClick={handleFirestoreUpdate}
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
