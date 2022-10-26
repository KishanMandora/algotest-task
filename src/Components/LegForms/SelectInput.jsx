function SelectInput({
  labelName = "",
  id = "",
  disable = false,
  value,
  handleChange,
  optionsData,
  primaryStyles,
  hideLabel,
  width,
}) {
  const addPrimaryStyles = primaryStyles
    ? `bg-primary-color text-white-color`
    : `bg-white-color text-black-color`;

  const widthClass = width === "small" ? "w-24" : "";

  return (
    <div className="flex flex-col gap-2">
      {hideLabel ? null : (
        <label htmlFor={id} className="text-center">
          {labelName}
        </label>
      )}

      <select
        className={`rounded-full px-2 py-1 font-normal ${addPrimaryStyles} ${widthClass}`}
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        disabled={disable}
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

export { SelectInput };
