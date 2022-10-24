import { useEffect } from "react";
import {
  useLegsList,
  onStrikeParameterChange,
} from "../../../Context/LegsListContext";
import { useStrikeParameter } from "../../../Hooks/useStrikeParameter";

function PremiumRange() {
  const { dispatch, state } = useLegsList();
  const {
    StrikeParameter: { Lower = 50, Upper = 200 },
  } = state;

  useStrikeParameter(dispatch, { Lower, Upper });

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="lower" className="text-center">
          Lower Range
        </label>
        <input
          type="number"
          className="w-24 rounded-full px-2 py-1 font-normal"
          id="lower"
          value={Lower}
          onChange={(e) =>
            onStrikeParameterChange(dispatch, { Lower: e.target.value, Upper })
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="upper" className="text-center">
          Upper Range
        </label>
        <input
          type="number"
          className="w-24 rounded-full px-2 py-1 font-normal"
          id="upper"
          value={Upper}
          onChange={(e) =>
            onStrikeParameterChange(dispatch, { Lower, Upper: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export { PremiumRange };
