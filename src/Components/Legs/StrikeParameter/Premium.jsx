import {
  useLegsList,
  onStrikeParameterChange,
} from "../../../Context/LegsListContext";
import { useStrikeParameter } from "../../../Hooks/useStrikeParameter";

function Premium({ value = 50 }) {
  const { dispatch, state } = useLegsList();
  const { StrikeParameter } = state;

  useStrikeParameter(dispatch, value);

  const handlePremium = (e) =>
    onStrikeParameterChange(dispatch, parseInt(e.target.value));

  console.log(state, "state");
  console.log(StrikeParameter, "paaa");
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="premium" className="text-center">
        Premium
      </label>

      <input
        type="number"
        className="w-24 rounded-full px-2 py-1 font-normal"
        id="premium"
        value={StrikeParameter}
        onChange={(e) => handlePremium(e)}
      />
    </div>
  );
}

export { Premium };
