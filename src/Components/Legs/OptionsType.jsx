import { useLegsList, onOptionTypeChange } from "../../Context/LegsListContext";
import { optionTypesOptions as optionsData } from "../../data";

function OptionsType() {
  const {
    dispatch,
    state: { OptionType },
  } = useLegsList();

  const handleOptionType = (e) => onOptionTypeChange(dispatch, e.target.value);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="optionType" className="text-center">
        Option Type
      </label>
      <select
        className="rounded-full bg-white px-2 py-1 font-normal"
        id="optionType"
        value={OptionType}
        onChange={(e) => handleOptionType(e)}
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

export { OptionsType };
