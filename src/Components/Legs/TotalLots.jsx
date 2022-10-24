import { useLegsList, onLotChange } from "../../Context/LegsListContext";

function TotalLots() {
  const {
    dispatch,
    state: { Lots },
  } = useLegsList();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="lots" className="text-center">
        Total Lots
      </label>
      <input
        type="number"
        className="w-24 rounded-full px-2 py-1 font-normal"
        id="lots"
        value={Lots}
        onChange={(e) => onLotChange(dispatch, e.target.value)}
      />
    </div>
  );
}

export { TotalLots };
