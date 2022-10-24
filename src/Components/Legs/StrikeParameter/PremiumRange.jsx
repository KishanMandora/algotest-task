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

  const handlePremiumLow = (e) =>
    onStrikeParameterChange(dispatch, {
      Lower: parseInt(e.target.value),
      Upper,
    });

  const handlePremiumUp = (e) =>
    onStrikeParameterChange(dispatch, {
      Lower,
      Upper: parseInt(e.target.value),
    });

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
          onChange={(e) => handlePremiumLow(e)}
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
          onChange={(e) => handlePremiumUp(e)}
        />
      </div>
    </div>
  );
}

export { PremiumRange };
