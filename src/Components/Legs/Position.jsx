import { positionOptions } from "../../data";
import { SelectInput } from "../LegForms/SelectInput";

function Position({ position, handleChange, primaryStyles, hideLabel }) {
  return (
    <SelectInput
      labelName="Position"
      id="position"
      value={position}
      handleChange={handleChange}
      optionsData={positionOptions}
      hideLabel={hideLabel}
      primaryStyles={primaryStyles}
    />
  );
}

export { Position };
