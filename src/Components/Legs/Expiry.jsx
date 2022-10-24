import { useLegsList, onExpiryKindChange } from "../../Context/LegsListContext";
import { expiryOptions as optionsData } from "../../data";
function Expiry() {
  const {
    dispatch,
    state: { ExpiryKind },
  } = useLegsList();

  const handleExpiry = (e) => onExpiryKindChange(dispatch, e.target.value);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="expiry" className="text-center">
        Expiry
      </label>
      <select
        className="rounded-full bg-white px-2 py-1 font-normal"
        id="expiry"
        value={ExpiryKind}
        onChange={(e) => handleExpiry(e)}
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
