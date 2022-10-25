import { useEffect } from "react";
import { PLUS, STRADDLE_WIDTH } from "../../../constant";
import {
  useLegsList,
  onStrikeParameterChange,
} from "../../../Context/LegsListContext";
import { adjustmentOptions as optionsData } from "../../../data";
import { useStrikeParameter } from "../../../Hooks/useStrikeParameter";

function StraddleWidth({
  strikeParam,
  handleChange,
  entryType,
  setPrevState,
  prevState,
}) {
  const { Adjustment = PLUS, Multiplier = 0.5 } = strikeParam;

  useEffect(() => {
    if (entryType === STRADDLE_WIDTH) {
      handleChange(prevState);
    }
  }, [entryType]);

  const handleStraddleAdjustment = (value) =>
    handleChange({
      Adjustment: value,
      Multiplier,
    });

  const handleStraddleMultiplier = (value) => {
    console.log(value, "multiply value");
    handleChange({
      Adjustment,
      Multiplier: parseFloat(value),
    });
  };

  return (
    <div className="flex items-center gap-1 font-normal">
      <span className="text-sm">
        <span className="font-bold"> [ </span> ATM Strike
      </span>
      <select
        className="rounded-full bg-white px-2 py-1 font-normal"
        value={Adjustment}
        onChange={(e) => {
          handleStraddleAdjustment(e.target.value);
          setPrevState((prev) => ({
            ...prev,
            straddle: { ...prev.straddle, Adjustment: e.target.value },
          }));
        }}
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
        onChange={(e) => {
          console.log(e.target.value, "from  con");
          handleStraddleMultiplier(e.target.value);
          setPrevState((prev) => ({
            ...prev,
            straddle: { ...prev.straddle, Multiplier: e.target.value },
          }));
        }}
      />

      <span className="text-sm">
        <span className="font-bold"> x </span>ATM Straddle Price
        <span className="font-bold">)]</span>
      </span>
    </div>
  );
}

export { StraddleWidth };
