import React, { useState } from "react";
import { POINTS_UP } from "../../constant";
import { momentumOption } from "../../data";
import { CheckboxInput } from "../LegForms/CheckboxInput";
import { NumberInput } from "../LegForms/NumberInput";
import { SelectInput } from "../LegForms/SelectInput";

function Momentum({ momentum, handleChange, id }) {
  const [editState, setEditState] = useState(false);
  const setOpacity = editState ? "opacity-100" : "opacity-40";

  const { Type = POINTS_UP, Value = 0 } = momentum;

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
        id={`momentum ${id}`}
        labelName="Simple Momentum"
        editState={editState}
        setEditState={setEditState}
      />
      <div className={`flex gap-4 ${setOpacity}`}>
        <SelectInput
          value={Type}
          handleChange={handleTypeChange}
          optionsData={momentumOption}
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

export { Momentum };
