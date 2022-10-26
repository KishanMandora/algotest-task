import { useState } from "react";
import { TRAIL_POINTS } from "../../constant";
import { trailSLOptions } from "../../data";

import { SelectInput, NumberInput, CheckboxInput } from "../index";

function TrailSL({ trailSL, handleChange, id }) {
  const [editState, setEditState] = useState(false);
  const setOpacity = editState ? "opacity-100" : "opacity-40";

  const { Type = TRAIL_POINTS, Value } = trailSL;
  const { InstrumentMove = 0, StopLossMove = 0 } = Value;

  const handleTypeChange = (value) =>
    handleChange({
      Type: value,
      Value,
    });

  const handleInstrumentChange = (value) =>
    handleChange({
      Type,
      Value: { ...Value, InstrumentMove: parseInt(value) },
    });

  const handleLossChange = (value) =>
    handleChange({
      Type,
      Value: { ...Value, StopLossMove: parseInt(value) },
    });

  return (
    <div className="flex flex-col gap-4">
      <CheckboxInput
        id={`trail ${id}`}
        labelName="Trail SL"
        editState={editState}
        setEditState={setEditState}
      />
      <div className={`flex gap-2 ${setOpacity}`}>
        <SelectInput
          value={Type}
          handleChange={handleTypeChange}
          optionsData={trailSLOptions}
          primaryStyles={true}
          disable={!editState}
          width="small"
          hideLabel
        />

        <NumberInput
          value={InstrumentMove}
          handleChange={handleInstrumentChange}
          disable={!editState}
          hideLabel
        />
        <NumberInput
          value={StopLossMove}
          handleChange={handleLossChange}
          disable={!editState}
          hideLabel
        />
      </div>
    </div>
  );
}

export { TrailSL };
