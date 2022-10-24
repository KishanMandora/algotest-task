import { useLegsList, onPositionChange } from "../../Context/LegsListContext";
import { positionOptions as optionsData } from "../../data";
function Position() {
  const {
    dispatch,
    state: { PositionType },
  } = useLegsList();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="position" className="text-center">
        Position
      </label>
      <select
        className="rounded-full bg-white px-2 py-1 font-normal"
        id="position"
        value={PositionType}
        onChange={(e) => onPositionChange(dispatch, e.target.value)}
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
