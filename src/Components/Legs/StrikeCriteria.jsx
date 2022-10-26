import { strikeCriteriaOptions } from "../../data";
import { SelectInput } from "../LegForms/SelectInput";

function StrikeCriteria({
  entryType,
  id,
  handleChange,
  primaryStyles,
  hideLabel,
}) {
  return (
    <SelectInput
      labelName="Strike Criteria"
      id={`strikeCriteria ${id}`}
      value={entryType}
      handleChange={handleChange}
      optionsData={strikeCriteriaOptions}
      hideLabel={hideLabel}
      primaryStyles={primaryStyles}
    />
  );
}

export { StrikeCriteria };
