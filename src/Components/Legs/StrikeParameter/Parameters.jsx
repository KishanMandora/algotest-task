import { useState } from "react";
import { Premium } from "./Premium";
import { StrikeType } from "./StrikeType";
import { PremiumRange } from "./PremiumRange";
import { StraddleWidth } from "./StraddleWidth";
import {
  ATM,
  PREMIUM,
  STRIKE_TYPE,
  PREMIUM_RANGE,
  PLUS,
  STRADDLE_WIDTH,
} from "../../../constant";

function Parameters({ strikeParam, handleChange, entryType }) {
  const [parameters, setParameters] = useState({
    strike: ATM,
    premium: 50,
    range: { Lower: 50, Upper: 200 },
    straddle: { Adjustment: PLUS, Multiplier: 0.5 },
  });

  const { strike, premium, range, straddle } = parameters;
  console.log(parameters, "paramts");

  return (
    <div>
      {entryType === STRIKE_TYPE ? (
        <StrikeType
          strikeParam={strikeParam}
          handleChange={handleChange}
          setPrevState={setParameters}
          prevState={strike}
          entryType={entryType}
        />
      ) : null}
      {entryType === PREMIUM ? (
        <Premium
          strikeParam={strikeParam}
          handleChange={handleChange}
          setPrevState={setParameters}
          prevState={premium}
          entryType={entryType}
        />
      ) : null}
      {entryType === PREMIUM_RANGE ? (
        <PremiumRange
          strikeParam={strikeParam}
          handleChange={handleChange}
          setPrevState={setParameters}
          prevState={range}
          entryType={entryType}
        />
      ) : null}
      {entryType === STRADDLE_WIDTH ? (
        <StraddleWidth
          strikeParam={strikeParam}
          handleChange={handleChange}
          setPrevState={setParameters}
          prevState={straddle}
          entryType={entryType}
        />
      ) : null}
    </div>
  );
}

export { Parameters };
