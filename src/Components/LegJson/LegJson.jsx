import React from "react";

function LegJson({ legJson, handleFirestoreUpdate, handleFetchData }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between border-b px-3 py-2 text-sm">
        <div>
          <span> Legs JSON</span>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-full bg-white-color py-1  px-8 font-normal text-primary-color"
            onClick={handleFetchData}
          >
            Fetch List
          </button>
          <button
            className="rounded-full bg-primary-color py-1 px-8 font-normal text-white-color"
            onClick={handleFirestoreUpdate}
          >
            Submit
          </button>
        </div>
      </div>
      <section>
        {legJson ? (
          <div className="rounded-md bg-white-color p-4 font-normal">
            <pre> {legJson} </pre>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export { LegJson };
