import { SelectInput } from "../../LegForms/SelectInput";
import { strikeTypeOptions } from "../../../data";

function StrikeType({
  strikeParam,
  id,
  handleChange,
  primaryStyles,
  hideLabel,
}) {
  return (
    <SelectInput
      labelName="Strike Type"
      id={`strike ${id}`}
      value={strikeParam}
      handleChange={handleChange}
      optionsData={strikeTypeOptions}
      hideLabel={hideLabel}
      primaryStyles={primaryStyles}
    />
  );
}

export { StrikeType };
