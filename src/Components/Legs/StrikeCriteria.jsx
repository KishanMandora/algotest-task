import { useLegsList, onEntryTypeChange } from "../../Context/LegsListContext";
import { strikeCriteriaOptions as optionsData } from "../../data";

function StrikeCriteria() {
  const {
    dispatch,
    state: { EntryType },
  } = useLegsList();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="strikeCriteria" className="text-center">
        Select Strike Criteria
      </label>
      <select
        className="rounded-full bg-white px-2 py-1 font-normal"
        id="strikeCriteria"
        value={EntryType}
        onChange={(e) => onEntryTypeChange(dispatch, e.target.value)}
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

export { StrikeCriteria };
