import { useEffect } from "react";
import { PREMIUM_RANGE } from "../../../constant";

function PremiumRange({
  strikeParam,
  handleChange,
  prevState,
  entryType,
  setPrevState,
}) {
  const { Lower = 50, Upper = 200 } = strikeParam;

  useEffect(() => {
    if (entryType === PREMIUM_RANGE) {
      handleChange(prevState);
    }
  }, [entryType]);

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
      <div className="flex flex-col gap-2">
        <label htmlFor="lower" className="text-center">
          Lower Range
        </label>
        <input
          type="number"
          className="w-24 rounded-full px-2 py-1 font-normal"
          id="lower"
          value={Lower}
          onChange={(e) => {
            handlePremiumLow(e.target.value);
            setPrevState((prev) => ({
              ...prev,
              range: { ...prev.range, Lower: e.target.value },
            }));
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="upper" className="text-center">
          Upper Range
        </label>
        <input
          type="number"
          className="w-24 rounded-full px-2 py-1 font-normal"
          id="upper"
          value={Upper}
          onChange={(e) => {
            handlePremiumUp(e.target.value);
            setPrevState((prev) => ({
              ...prev,
              range: { ...prev.range, Upper: e.target.value },
            }));
          }}
        />
      </div>
    </div>
  );
}

export { PremiumRange };
