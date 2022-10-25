import { useEffect } from "react";
import { PREMIUM } from "../../../constant";

function Premium({
  strikeParam,
  handleChange,
  setPrevState,
  prevState,
  entryType,
}) {
  useEffect(() => {
    if (entryType === PREMIUM) {
      handleChange(prevState);
    }
  }, [entryType]);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="premium" className="text-center">
        Premium
      </label>

      <input
        type="number"
        className="w-24 rounded-full px-2 py-1 font-normal"
        id="premium"
        value={strikeParam}
        onChange={(e) => {
          handleChange(e.target.value);
          setPrevState((prev) => ({ ...prev, premium: e.target.value }));
        }}
      />
    </div>
  );
}

export { Premium };
