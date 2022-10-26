import { PLUS, STRADDLE_WIDTH } from "../../../constant";

import { adjustmentOptions } from "../../../data";

import { NumberInput } from "../../LegForms/NumberInput";
import { SelectInput } from "../../LegForms/SelectInput";

function StraddleWidth({ strikeParam, handleChange }) {
  const { Adjustment = PLUS, Multiplier = 0.5 } = strikeParam;

  const handleStraddleAdjustment = (value) =>
    handleChange({
      Adjustment: value,
      Multiplier,
    });

  const handleStraddleMultiplier = (value) => {
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
      <SelectInput
        value={Adjustment}
        handleChange={handleStraddleAdjustment}
        optionsData={adjustmentOptions}
        hideLabel={true}
      />

      <span className="text-sm font-bold">(</span>
      <NumberInput
        value={Multiplier}
        handleChange={handleStraddleMultiplier}
        hideLabel={true}
        minValue={0.5}
      />

      <span className="text-sm">
        <span className="font-bold"> x </span>ATM Straddle Price
        <span className="font-bold">)]</span>
      </span>
    </div>
  );
}

export { StraddleWidth };
