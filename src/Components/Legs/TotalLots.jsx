function TotalLots({ lots, handleChange, hideLabel }) {
  console.log("handle change", handleChange);

  return (
    <div className="flex flex-col gap-2">
      {hideLabel ? null : (
        <label htmlFor="lots" className="text-center">
          Total Lots
        </label>
      )}
      <input
        type="number"
        className="w-24 rounded-full px-2 py-1 font-normal"
        id="lots"
        value={lots}
        onChange={(e) => handleChange(e.target.value)}
        min="1"
      />
    </div>
  );
}

export { TotalLots };
