import React from "react";

function SelectInput({
  labelName = "",
  id = "",
  value,
  handleChange,
  optionsData,
  primaryStyles,
  hideLabel,
}) {
  const addPrimaryStyles = primaryStyles
    ? `bg-primary-color text-white-color`
    : `bg-white-color text-black-color`;

  return (
    <div className="flex flex-col gap-2">
      {hideLabel ? null : (
        <label htmlFor={id} className="text-center">
          {labelName}
        </label>
      )}

      <select
        className={`rounded-full px-2 py-1 font-normal ${addPrimaryStyles}`}
        id={id}
        value={value}
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

export { SelectInput };
