import { positionOptions } from "../../data";
import { SelectInput } from "../LegForms/SelectInput";

function Position({ position, id, handleChange, primaryStyles, hideLabel }) {
  return (
    <SelectInput
      labelName="Position"
      id={`position ${id}`}
      value={position}
      handleChange={handleChange}
      optionsData={positionOptions}
      hideLabel={hideLabel}
      primaryStyles={primaryStyles}
    />
  );
}

export { Position };
