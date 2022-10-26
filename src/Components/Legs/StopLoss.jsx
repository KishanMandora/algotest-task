import { useState } from "react";
import { LOSS_POINTS } from "../../constant";
import { stopLossOptions } from "../../data";

import { SelectInput, NumberInput, CheckboxInput } from "../index";

function StopLoss({ loss, handleChange, id }) {
  const [editState, setEditState] = useState(false);
  const setOpacity = editState ? "opacity-100" : "opacity-40";

  const { Type = LOSS_POINTS, Value = 0 } = loss;

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
    <div className="flex flex-col gap-4">
      <CheckboxInput
        id={`loss ${id}`}
        labelName="Stop Loss"
        editState={editState}
        setEditState={setEditState}
      />
      <div className={`flex gap-2 ${setOpacity}`}>
        <SelectInput
          value={Type}
          handleChange={handleTypeChange}
          optionsData={stopLossOptions}
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

export { StopLoss };
