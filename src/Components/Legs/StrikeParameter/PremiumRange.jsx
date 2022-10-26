import { NumberInput } from "../../LegForms/NumberInput";

function PremiumRange({ strikeParam, handleChange, hideLabel }) {
  const { Lower = 50, Upper = 200 } = strikeParam;

  const handlePremiumLow = (value) =>
    handleChange({
      Lower: parseInt(value),
      Upper,
    });

  const handlePremiumUp = (value) =>
    handleChange({
      Lower,
      Upper: parseInt(value),
    });

  return (
    <div className="flex gap-2">
      <NumberInput
        labelName="Lower Range"
        id="lower"
        value={Lower}
        handleChange={handlePremiumLow}
        hideLabel={hideLabel}
      />
      <NumberInput
        labelName="Upper Range"
        id="upper"
        value={Upper}
        handleChange={handlePremiumUp}
        hideLabel={hideLabel}
      />
    </div>
  );
}

export { PremiumRange };
