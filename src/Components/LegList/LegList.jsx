import { LegBuilder } from "..";
import { LegsListProvider } from "../../Context/LegsListContext";

function LegList() {
  return (
    <div className="flex flex-col items-center p-4 text-xs">
      <div className="flex items-center gap-2">
        <div> Select Segments </div>
        <div className="flex">
          <div className="cursor-pointer rounded-l-full bg-white-color py-1 px-3 font-normal">
            Futures
          </div>
          <div className="cursor-pointer rounded-r-full bg-primary-color py-1 px-3 font-normal text-white-color">
            Options
          </div>
        </div>
      </div>
      <LegsListProvider>
        <LegBuilder />
      </LegsListProvider>
      <div className="flex gap-2">
        <button className="rounded-full bg-primary-color py-1 px-8 font-normal text-white-color">
          Add Leg
        </button>
        <button className="rounded-full bg-white-color py-1  px-8 font-normal text-primary-color">
          Cancel
        </button>
      </div>
    </div>
  );
}

export { LegList };
