import {
  TotalLots,
  Position,
  OptionsType,
  Expiry,
  StrikeCriteria,
  Parameters,
  DeleteSvg,
  CopySvg,
  Momentum,
  TargetProfit,
} from "..";
import {
  ENTRY_TYPE,
  EXPIRY_KIND,
  LOTS,
  OPTION_TYPE,
  POSITION_TYPE,
  STRIKE_PARAMETER,
  LEG_MOMENTUM,
  LEG_TARGET,
} from "../../constant";

function LegItem({ allLegs, setAllLegs, handleLegUpdate }) {
  return (
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
          LegMomentum,
          LegTarget,
        } = leg;

        return (
          <div
            className="relative my-4 rounded-md bg-form-background p-4 text-xs"
            key={id}
          >
            <div className="absolute top-[-12px] right-[-12px] flex flex-col gap-3">
              <button
                onClick={() =>
                  setAllLegs((prev) => prev.filter((item) => item.id !== id))
                }
              >
                <DeleteSvg />
              </button>
              <button
                className="rounded-full bg-white-color p-[6px]"
                onClick={() =>
                  setAllLegs((prev) => [...prev, { ...leg, id: Math.random }])
                }
              >
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
            <div className="mt-6 flex justify-center gap-2">
              <Momentum
                momentum={LegMomentum}
                // id={id}
                handleChange={handleLegUpdate(id, LEG_MOMENTUM)}
              />
              <TargetProfit
                target={LegTarget}
                // id={id}
                handleChange={handleLegUpdate(id, LEG_TARGET)}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export { LegItem };
