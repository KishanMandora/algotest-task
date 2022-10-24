import { PLUS } from "../../../constant";
import {
  useLegsList,
  onStrikeParameterChange,
} from "../../../Context/LegsListContext";
import { adjustmentOptions as optionsData } from "../../../data";
import { useStrikeParameter } from "../../../Hooks/useStrikeParameter";

function StraddleWidth() {
  const { dispatch, state } = useLegsList();
  const { StrikeParameter } = state;
  const { Adjustment = PLUS, Multiplier = 0.5 } = StrikeParameter;

  useStrikeParameter(dispatch, { Adjustment, Multiplier });

  return (
    <div className="flex items-center gap-1 font-normal">
      <span className="text-sm">
        <span className="font-bold"> [ </span> ATM Strike
      </span>
      <select
        className="rounded-full bg-white px-2 py-1 font-normal"
        value={Adjustment}
        onChange={(e) =>
          onStrikeParameterChange(dispatch, {
            Adjustment: e.target.value,
            Multiplier,
          })
        }
      >
        {optionsData.map(({ optionTitle, value }) => (
          <option key={optionTitle} value={value}>
            {optionTitle}
          </option>
        ))}
      </select>
      <span className="text-sm font-bold">(</span>
      <input
        type="number"
        className="w-16 rounded-full px-2 py-1 font-normal"
        value={Multiplier}
        onChange={(e) =>
          onStrikeParameterChange(dispatch, {
            Adjustment,
            Multiplier: e.target.value,
          })
        }
      />
      <span className="text-sm">
        <span className="font-bold"> x </span>ATM Straddle Price
        <span className="font-bold">)]</span>
      </span>
    </div>
  );
}

export { StraddleWidth };
