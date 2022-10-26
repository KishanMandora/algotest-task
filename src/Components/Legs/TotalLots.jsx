import { NumberInput } from "../LegForms/NumberInput";

function TotalLots({ lots, handleChange, hideLabel }) {
  return (
    <NumberInput
      labelName="Total Lots"
      id="lots"
      width="large"
      value={lots}
      handleChange={handleChange}
      hideLabel={hideLabel}
    />
  );
}

export { TotalLots };
