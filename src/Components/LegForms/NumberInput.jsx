function NumberInput({
  labelName = "",
  id = "",
  minValue = 0,
  disable = false,
  value,
  handleChange,
  hideLabel,
  width,
}) {
  const widthClass = width === "large" ? "w-20" : "w-16";

  return (
    <div className="flex flex-col gap-2">
      {hideLabel ? null : (
        <label htmlFor={id} className="text-center">
          {labelName}
        </label>
      )}
      <input
        type="number"
        className={`rounded-full px-2 py-1 font-normal ${widthClass}`}
        id={id}
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        min={minValue}
        disabled={disable}
      />
    </div>
  );
}

export { NumberInput };
