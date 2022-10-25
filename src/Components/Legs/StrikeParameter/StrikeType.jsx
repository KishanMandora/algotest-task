import { useEffect } from "react";
import { STRIKE_TYPE } from "../../../constant";

import { strikeTypeOptions as optionsData } from "../../../data";

function StrikeType({
  strikeParam,
  handleChange,
  setPrevState,
  prevState,
  entryType,
}) {
  useEffect(() => {
    if (entryType === STRIKE_TYPE) {
      handleChange(prevState);
    }
  }, [entryType]);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="strikeType" className="text-center">
        Strike Type
      </label>

      <select
        className="rounded-full bg-white px-2 py-1 font-normal"
        id="strikeType"
        value={strikeParam}
        onChange={(e) => {
          handleChange(e.target.value);
          setPrevState((prev) => ({ ...prev, strike: e.target.value }));
        }}
      >
        {optionsData.map(({ optionTitle, value }) => (
          <option key={optionTitle} value={value}>
            {optionTitle}
          </option>
        ))}
      </select>
    </div>
  );
}

export { StrikeType };
