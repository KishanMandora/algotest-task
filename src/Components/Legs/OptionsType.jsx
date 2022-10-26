import { optionTypesOptions as optionsData } from "../../data";

function OptionsType({
  options,
  handleChange,
  bgClr = "bg-white-color",
  txtClr = "text-black-color",
  hideLabel,
}) {
  return (
    <div className="flex flex-col gap-2">
      {hideLabel ? null : (
        <label htmlFor="optionType" className="text-center">
          Option Type
        </label>
      )}

      <select
        className={`rounded-full px-2 py-1 font-normal ${bgClr} ${txtClr}`}
        id="optionType"
        value={options}
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

export { OptionsType };
