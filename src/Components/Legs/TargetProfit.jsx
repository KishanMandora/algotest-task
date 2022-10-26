import { useState } from "react";
import { PROFIT_POINTS } from "../../constant";
import { targetProfitOptions } from "../../data";

import { SelectInput, NumberInput, CheckboxInput } from "../index";

function TargetProfit({ target, handleChange }) {
  const [editState, setEditState] = useState(false);
  const setOpacity = editState ? "opacity-100" : "opacity-40";

  const { Type = PROFIT_POINTS, Value = 0 } = target;

  const handleTypeChange = (value) =>
    handleChange({
      Type: value,
      Value,
    });

  const handleValueChange = (value) =>
    handleChange({
      Type,
      Value: parseInt(value),
    });

  return (
    <div className="flex flex-col items-center gap-4">
      <CheckboxInput
        id="profit"
        labelName="Target Profit"
        editState={editState}
        setEditState={setEditState}
      />
      <div className={`flex gap-4 ${setOpacity}`}>
        <SelectInput
          value={Type}
          handleChange={handleTypeChange}
          optionsData={targetProfitOptions}
          primaryStyles={true}
          disable={!editState}
          width="small"
          hideLabel
        />

        <NumberInput
          value={Value}
          handleChange={handleValueChange}
          min={0}
          disable={!editState}
          hideLabel
        />
      </div>
    </div>
  );
}

export { TargetProfit };
