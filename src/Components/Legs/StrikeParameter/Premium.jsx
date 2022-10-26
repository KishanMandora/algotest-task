import { NumberInput } from "../../LegForms/NumberInput";

function Premium({ strikeParam, id, handleChange, hideLabel }) {
  return (
    <NumberInput
      labelName="Premium"
      id={`premium ${id}`}
      value={strikeParam}
      handleChange={(value) => handleChange(parseInt(value))}
      hideLabel={hideLabel}
    />
  );
}

export { Premium };
