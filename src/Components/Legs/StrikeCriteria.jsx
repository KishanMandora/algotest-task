import { strikeCriteriaOptions } from "../../data";
import { SelectInput } from "../LegForms/SelectInput";

function StrikeCriteria({ entryType, handleChange, primaryStyles, hideLabel }) {
  return (
    <SelectInput
      labelName="Strike Criteria"
      id="strikeCriteria"
      value={entryType}
      handleChange={handleChange}
      optionsData={strikeCriteriaOptions}
      hideLabel={hideLabel}
      primaryStyles={primaryStyles}
    />
  );
}

export { StrikeCriteria };
