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

function Parameters({
  strikeParam,
  handleChange,
  entryType,
  hideLabel,
  primaryStyles,
}) {
  return (
    <div>
      {entryType === STRIKE_TYPE ? (
        <StrikeType
          strikeParam={strikeParam}
          handleChange={handleChange}
          hideLabel={hideLabel}
          primaryStyles={primaryStyles}
        />
      ) : null}
      {entryType === PREMIUM ? (
        <Premium
          strikeParam={strikeParam}
          handleChange={handleChange}
          hideLabel={hideLabel}
        />
      ) : null}
      {entryType === PREMIUM_RANGE ? (
        <PremiumRange
          strikeParam={strikeParam}
          handleChange={handleChange}
          hideLabel={hideLabel}
        />
      ) : null}
      {entryType === STRADDLE_WIDTH ? (
        <StraddleWidth strikeParam={strikeParam} handleChange={handleChange} />
      ) : null}
    </div>
  );
}

export { Parameters };
