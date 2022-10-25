import { useState } from "react";
import { LegsListProvider } from "../../Context/LegsListContext";
import {
  LegList,
  TotalLots,
  Position,
  OptionsType,
  Expiry,
  StrikeCriteria,
  Parameters,
} from "..";
import {
  ENTRY_TYPE,
  EXPIRY_KIND,
  LOTS,
  OPTION_TYPE,
  POSITION_TYPE,
  STRIKE_PARAMETER,
} from "../../constant";

function LegContainer() {
  const [allLegs, setAllLegs] = useState([]);
  const [showLegMenu, setShowLegMenu] = useState(true);

  const isActive = showLegMenu ? "opacity-20" : "";

  const toggleShowLeg = () => setShowLegMenu((prev) => !prev);
  console.log(allLegs);

  const handleLegUpdate = (id, legType) => (value) =>
    setAllLegs((prev) =>
      prev.map((leg) => (leg.id === id ? { ...leg, [legType]: value } : leg))
    );

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
      <section>
        {allLegs.map((leg) => {
          const {
            id,
            Lots,
            PositionType,
            OptionType,
            ExpiryKind,
            EntryType,
            StrikeParameter,
          } = leg;
          console.log(PositionType, "position  from map");
          return (
            <div className="rounded-md bg-form-background p-4" key={id}>
              <div className="flex">
                <TotalLots
                  lots={Lots}
                  handleChange={handleLegUpdate(id, LOTS)}
                />
                <Position
                  position={PositionType}
                  handleChange={handleLegUpdate(id, POSITION_TYPE)}
                  bgClr="bg-primary-color"
                  txtClr="text-white-color"
                />
                <OptionsType
                  options={OptionType}
                  handleChange={handleLegUpdate(id, OPTION_TYPE)}
                  bgClr="bg-primary-color"
                  txtClr="text-white-color"
                />
                <Expiry
                  expiry={ExpiryKind}
                  handleChange={handleLegUpdate(id, EXPIRY_KIND)}
                  bgClr="bg-primary-color"
                  txtClr="text-white-color"
                />
                <StrikeCriteria
                  entryType={EntryType}
                  handleChange={handleLegUpdate(id, ENTRY_TYPE)}
                  bgClr="bg-primary-color"
                  txtClr="text-white-color"
                />
                <Parameters
                  entryType={EntryType}
                  strikeParam={StrikeParameter}
                  handleChange={handleLegUpdate(id, STRIKE_PARAMETER)}
                />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export { LegContainer };
