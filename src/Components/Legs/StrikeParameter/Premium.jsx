import { NumberInput } from "../../LegForms/NumberInput";

function Premium({ strikeParam, id, handleChange, hideLabel }) {
  return (
    <NumberInput
      labelName="Premium"
      id={`premium ${id}`}
      value={strikeParam}
      handleChange={handleChange}
      hideLabel={hideLabel}
    />
  );
}

export { Premium };
