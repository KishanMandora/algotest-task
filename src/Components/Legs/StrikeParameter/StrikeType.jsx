import { ATM } from "../../../constant";
import {
  useLegsList,
  onStrikeParameterChange,
} from "../../../Context/LegsListContext";
import { strikeTypeOptions as optionsData } from "../../../data";
import { useStrikeParameter } from "../../../Hooks/useStrikeParameter";

function StrikeType({ value = ATM }) {
  const { dispatch, state } = useLegsList();
  const { StrikeParameter } = state;

  useStrikeParameter(dispatch, value);

  const handleStrikeType = (e) =>
    onStrikeParameterChange(dispatch, e.target.value);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="strikeType" className="text-center">
        Strike Type
      </label>

      <select
        className="rounded-full bg-white px-2 py-1 font-normal"
        id="strikeType"
        value={StrikeParameter}
        onChange={(e) => handleStrikeType(e)}
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
