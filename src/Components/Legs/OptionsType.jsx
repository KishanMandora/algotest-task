import { optionTypesOptions } from "../../data";
import { SelectInput } from "../LegForms/SelectInput";

function OptionsType({ options, id, handleChange, primaryStyles, hideLabel }) {
  return (
    <SelectInput
      labelName="Option Type"
      id={`options ${id}`}
      value={options}
      handleChange={handleChange}
      optionsData={optionTypesOptions}
      hideLabel={hideLabel}
      primaryStyles={primaryStyles}
    />
  );
}

export { OptionsType };
