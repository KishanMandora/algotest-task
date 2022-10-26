import { expiryOptions } from "../../data";
import { SelectInput } from "../LegForms/SelectInput";

function Expiry({ expiry, id, handleChange, primaryStyles, hideLabel }) {
  return (
    <SelectInput
      labelName="Expiry"
      id={`expiry ${id}`}
      value={expiry}
      handleChange={handleChange}
      optionsData={expiryOptions}
      hideLabel={hideLabel}
      primaryStyles={primaryStyles}
    />
  );
}

export { Expiry };
