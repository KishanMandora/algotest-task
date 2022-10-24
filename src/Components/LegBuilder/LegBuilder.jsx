import {
  TotalLots,
  Expiry,
  OptionsType,
  Position,
  StrikeCriteria,
  Premium,
  PremiumRange,
  StraddleWidth,
  StrikeType,
} from "..";
import {
  PREMIUM,
  PREMIUM_RANGE,
  STRADDLE_WIDTH,
  STRIKE_TYPE,
} from "../../constant";
import { useLegsList } from "../../Context/LegsListContext";

function LegBuilder() {
  const { state } = useLegsList();

  const { EntryType } = state;
  console.log(state);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      <TotalLots />
      <Position />
      <OptionsType />
      <Expiry />
      <StrikeCriteria />
      {EntryType === STRIKE_TYPE ? <StrikeType /> : null}
      {EntryType === PREMIUM ? <Premium /> : null}
      {EntryType === PREMIUM_RANGE ? <PremiumRange /> : null}
      {EntryType === STRADDLE_WIDTH ? <StraddleWidth /> : null}
    </div>
  );
}

export { LegBuilder };
