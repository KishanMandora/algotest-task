import { strikeCriteriaOptions as optionsData } from "../../data";

function StrikeCriteria({
  entryType,
  handleChange,
  bgClr = "bg-white-color",
  txtClr = "text-black-color",
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="strikeCriteria" className="text-center">
        Select Strike Criteria
      </label>
      <select
        className={`rounded-full px-2 py-1 font-normal ${bgClr} ${txtClr}`}
        id="strikeCriteria"
        value={entryType}
        onChange={(e) => handleChange(e.target.value)}
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
