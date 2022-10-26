import { v4 as uuidv4 } from "uuid";
import { LegBuilder } from "..";
import {
  POINTS_UP,
  PROFIT_POINTS,
  LOSS_POINTS,
  TRAIL_POINTS,
} from "../../constant";
import { resetLegState, useLegsList } from "../../Context/LegsListContext";

const optionalLegs = {
  LegMomentum: { Type: POINTS_UP, Value: 0 },
  LegTarget: { Type: PROFIT_POINTS, Value: 0 },
  LegStopLoss: { Type: LOSS_POINTS, Value: 0 },
  LegTrailSL: {
    Type: TRAIL_POINTS,
    Value: { InstrumentMove: 0, StopLossMove: 0 },
  },
};

function LegList({ setAllLegs, setShowLegMenu }) {
  const { state, dispatch } = useLegsList();

  const hideLegMenu = () => setShowLegMenu(false);
  const handleAddLegs = () => {
    console.log(state, "state before add");
    setAllLegs((prev) => [
      ...prev,
      { ...state, ...optionalLegs, id: uuidv4() },
    ]);
    resetLegState(dispatch);
  };

  return (
    <div className="flex flex-col items-center bg-form-background p-4 text-xs">
      <div className="flex items-center gap-2">
        <div> Select Segments </div>
        <div className="flex">
          <div className="cursor-pointer rounded-l-full bg-white-color py-1 px-3 font-normal">
            Futures
          </div>
          <div className="cursor-pointer rounded-r-full bg-primary-color py-1 px-3 font-normal text-white-color">
            Options
          </div>
        </div>
      </div>

      <LegBuilder />

      <div className="flex gap-2">
        <button
          className="rounded-full bg-primary-color py-1 px-8 font-normal text-white-color"
          onClick={handleAddLegs}
        >
          Add Leg
        </button>
        <button
          className="rounded-full bg-white-color py-1  px-8 font-normal text-primary-color"
          onClick={hideLegMenu}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export { LegList };
