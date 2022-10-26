import { SelectInput } from "../../LegForms/SelectInput";
import { strikeTypeOptions } from "../../../data";

function StrikeType({ strikeParam, handleChange, primaryStyles, hideLabel }) {
  return (
    <SelectInput
      labelName="Strike Type"
      id="strike"
      value={strikeParam}
      handleChange={handleChange}
      optionsData={strikeTypeOptions}
      hideLabel={hideLabel}
      primaryStyles={primaryStyles}
    />
  );
}

export { StrikeType };
