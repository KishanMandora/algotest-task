import { useState } from "react";
import { LegsListProvider } from "../../Context/LegsListContext";
import { LegList, LegItem, LegJson } from "..";
import { addData, fetchData } from "../../helpers/firebase.config";
import { toast } from "../Toast/Toast";

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
    if (!allLegs.length) {
      toast("Please add data to upload", "error");
      return;
    }
    allLegs.forEach((leg) => {
      const filterLeg = { ...leg };
      delete filterLeg.id;
      delete filterLeg.paramValues;
      addData(filterLeg);
    });
    toast("Data Uploaded Successfully", "success");
  };

  const handleFetchData = () => fetchData(setLegJson);

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

      <LegJson
        legJson={legJson}
        handleFirestoreUpdate={handleFirestoreUpdate}
        handleFetchData={handleFetchData}
      />
    </div>
  );
}

export { LegContainer };
