import { v4 as uuidv4 } from "uuid";
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
  StopLoss,
  TrailSL,
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
  LEG_STOP_LOSS,
  LEG_TRAIL_SL,
} from "../../constant";

function LegItem({ allLegs, setAllLegs, handleLegUpdate }) {
  const handleDeleteLeg = (id) => {
    setAllLegs((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCopyLeg = (leg) => {
    const newLeg = { ...leg, id: uuidv4() };
    setAllLegs((prev) => [...prev, newLeg]);
  };

  const handleStrikeParam = (id) => handleLegUpdate(id, STRIKE_PARAMETER);

  const handleRetainValue = (id) => (value, paramType) => {
    setAllLegs((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              paramValues: { ...item.paramValues, [paramType]: value },
            }
          : item
      )
    );
  };
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
          paramValues,
          LegMomentum,
          LegTarget,
          LegStopLoss,
          LegTrailSL,
        } = leg;

        return (
          <div
            className="relative my-4 rounded-md bg-form-background p-4 text-xs"
            key={id}
          >
            <div className="absolute top-[-12px] right-[-12px] flex flex-col gap-3">
              <button onClick={() => handleDeleteLeg(id)}>
                <DeleteSvg />
              </button>
              <button
                className="rounded-full bg-white-color p-[6px]"
                onClick={() => handleCopyLeg(leg)}
              >
                <CopySvg />
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <div className="flex items-center gap-2">
                <span> Lots </span>
                <TotalLots
                  id={id}
                  lots={Lots}
                  handleChange={handleLegUpdate(id, LOTS)}
                  hideLabel
                />
              </div>
              <Position
                id={id}
                position={PositionType}
                handleChange={handleLegUpdate(id, POSITION_TYPE)}
                primaryStyles
                hideLabel
              />
              <OptionsType
                id={id}
                options={OptionType}
                handleChange={handleLegUpdate(id, OPTION_TYPE)}
                primaryStyles
                hideLabel
              />
              <Expiry
                id={id}
                expiry={ExpiryKind}
                handleChange={handleLegUpdate(id, EXPIRY_KIND)}
                primaryStyles
                hideLabel
              />
              <div className="flex items-center gap-2">
                <span> Select Strike </span>
                <StrikeCriteria
                  id={id}
                  entryType={EntryType}
                  handleChange={handleLegUpdate(id, ENTRY_TYPE)}
                  primaryStyles
                  hideLabel
                />
              </div>

              <Parameters
                entryType={EntryType}
                id={id}
                paramValues={paramValues}
                handleStrikeParam={handleStrikeParam(id)}
                handleRetainValue={handleRetainValue(id)}
                primaryStyles
                hideLabel
              />
            </div>
            <div className="mt-6 flex justify-center gap-6">
              <Momentum
                momentum={LegMomentum}
                id={id}
                handleChange={handleLegUpdate(id, LEG_MOMENTUM)}
              />
              <TargetProfit
                target={LegTarget}
                id={id}
                handleChange={handleLegUpdate(id, LEG_TARGET)}
              />
              <StopLoss
                loss={LegStopLoss}
                id={id}
                handleChange={handleLegUpdate(id, LEG_STOP_LOSS)}
              />
              <TrailSL
                trailSL={LegTrailSL}
                id={id}
                handleChange={handleLegUpdate(id, LEG_TRAIL_SL)}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export { LegItem };
