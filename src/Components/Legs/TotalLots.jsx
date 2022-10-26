import { NumberInput } from "../LegForms/NumberInput";

function TotalLots({ id, lots, handleChange, hideLabel }) {
  return (
    <NumberInput
      labelName="Total Lots"
      id={`lots ${id}`}
      width="large"
      value={lots}
      handleChange={handleChange}
      hideLabel={hideLabel}
    />
  );
}

export { TotalLots };
