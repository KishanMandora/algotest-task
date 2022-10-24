import { useLegsList, onLotChange } from "../../Context/LegsListContext";

function TotalLots() {
  const {
    dispatch,
    state: { Lots },
  } = useLegsList();

  const handleLots = (e) => onLotChange(dispatch, parseInt(e.target.value));

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
        onChange={(e) => handleLots(e)}
      />
    </div>
  );
}

export { TotalLots };
