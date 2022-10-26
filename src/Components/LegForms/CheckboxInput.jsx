import { InfoSvg } from "../SVGs/InfoSvg";

function CheckboxInput({ labelName, id, editState, setEditState }) {
  return (
    <label htmlFor={id}>
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={editState}
          onChange={() => setEditState((prev) => !prev)}
          id={id}
        />
        <span className="font-normal"> {labelName} </span>
        <span>
          <InfoSvg />
        </span>
      </div>
    </label>
  );
}

export { CheckboxInput };
