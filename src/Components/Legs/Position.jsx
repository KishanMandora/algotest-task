import { positionOptions as optionsData } from "../../data";

function Position({
  position,
  handleChange,
  bgClr = "bg-white-color",
  txtClr = "text-black-color",
  hideLabel,
}) {
  return (
    <div className="flex flex-col gap-2">
      {hideLabel ? null : (
        <label htmlFor="position" className="text-center">
          Position
        </label>
      )}

      <select
        className={`rounded-full px-2 py-1 font-normal ${bgClr} ${txtClr}`}
        id="position"
        value={position}
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

export { Position };
