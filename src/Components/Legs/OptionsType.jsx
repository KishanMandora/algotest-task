import { optionTypesOptions } from "../../data";
import { SelectInput } from "../LegForms/SelectInput";

function OptionsType({ options, handleChange, primaryStyles, hideLabel }) {
  return (
    <SelectInput
      labelName="Option Type"
      id="options"
      value={options}
      handleChange={handleChange}
      optionsData={optionTypesOptions}
      hideLabel={hideLabel}
      primaryStyles={primaryStyles}
    />
  );
}

export { OptionsType };
