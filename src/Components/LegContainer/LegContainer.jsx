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
  DeleteSvg,
  CopySvg,
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
      <section className="my-8">
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

          return (
            <div
              className="relative my-4 rounded-md bg-form-background p-4 text-xs"
              key={id}
            >
              <div className="absolute top-[-12px] right-[-12px] flex flex-col gap-3">
                <button>
                  <DeleteSvg />
                </button>
                <button className="rounded-full bg-white-color p-[6px]">
                  <CopySvg />
                </button>
              </div>
              <div className="flex justify-center gap-2">
                <div className="flex items-center gap-2">
                  <span> Lots </span>
                  <TotalLots
                    lots={Lots}
                    handleChange={handleLegUpdate(id, LOTS)}
                    hideLabel
                  />
                </div>
                <Position
                  position={PositionType}
                  handleChange={handleLegUpdate(id, POSITION_TYPE)}
                  primaryStyles
                  hideLabel
                />
                <OptionsType
                  options={OptionType}
                  handleChange={handleLegUpdate(id, OPTION_TYPE)}
                  primaryStyles
                  hideLabel
                />
                <Expiry
                  expiry={ExpiryKind}
                  handleChange={handleLegUpdate(id, EXPIRY_KIND)}
                  primaryStyles
                  hideLabel
                />
                <div className="flex items-center gap-2">
                  <span> Select Strike </span>
                  <StrikeCriteria
                    entryType={EntryType}
                    handleChange={handleLegUpdate(id, ENTRY_TYPE)}
                    primaryStyles
                    hideLabel
                  />
                </div>

                <Parameters
                  entryType={EntryType}
                  strikeParam={StrikeParameter}
                  handleChange={handleLegUpdate(id, STRIKE_PARAMETER)}
                  primaryStyles
                  hideLabel
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
