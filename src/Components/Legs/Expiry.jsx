import { expiryOptions as optionsData } from "../../data";

function Expiry({
  expiry,
  handleChange,
  bgClr = "bg-white-color",
  txtClr = "text-black-color",
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="expiry" className="text-center">
        Expiry
      </label>
      <select
        className={`rounded-full px-2 py-1 font-normal ${bgClr} ${txtClr}`}
        id="expiry"
        value={expiry}
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

export { Expiry };
