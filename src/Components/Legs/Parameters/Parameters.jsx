import { Premium } from "./Premium";
import { StrikeType } from "./StrikeType";
import { PremiumRange } from "./PremiumRange";
import { StraddleWidth } from "./StraddleWidth";
import {
  PREMIUM,
  STRIKE_TYPE,
  PREMIUM_RANGE,
  STRADDLE_WIDTH,
} from "../../../constant";

import { useEffect } from "react";

function Parameters({
  id,
  paramValues,
  handleStrikeParam,
  handleRetainValue,
  entryType,
  hideLabel,
  primaryStyles,
}) {
  const { strike, premium, premiumRange, straddle } = paramValues;

  useEffect(() => {
    if (entryType === STRIKE_TYPE) {
      handleStrikeParam(strike);
    } else if (entryType === PREMIUM) {
      handleStrikeParam(premium);
    } else if (entryType === PREMIUM_RANGE) {
      handleStrikeParam(premiumRange);
    } else if (entryType === STRADDLE_WIDTH) {
      handleStrikeParam(straddle);
    }
  }, [entryType]);

  const handleStrikeChange = (value) => {
    handleStrikeParam(value);
    handleRetainValue(value, "strike");
  };

  const handlePremiumChange = (value) => {
    handleStrikeParam(value);
    handleRetainValue(value, "premium");
  };

  const handlePremiumRangeChange = (value) => {
    handleStrikeParam(value);
    handleRetainValue(value, "premiumRange");
  };

  const handleStraddleChange = (value) => {
    handleStrikeParam(value);
    handleRetainValue(value, "straddle");
  };

  return (
    <div>
      {entryType === STRIKE_TYPE ? (
        <StrikeType
          id={id}
          strikeParam={strike}
          handleChange={handleStrikeChange}
          hideLabel={hideLabel}
          primaryStyles={primaryStyles}
        />
      ) : null}
      {entryType === PREMIUM ? (
        <Premium
          id={id}
          strikeParam={premium}
          handleChange={handlePremiumChange}
          hideLabel={hideLabel}
        />
      ) : null}
      {entryType === PREMIUM_RANGE ? (
        <PremiumRange
          id={id}
          strikeParam={premiumRange}
          handleChange={handlePremiumRangeChange}
          hideLabel={hideLabel}
        />
      ) : null}
      {entryType === STRADDLE_WIDTH ? (
        <StraddleWidth
          strikeParam={straddle}
          handleChange={handleStraddleChange}
        />
      ) : null}
    </div>
  );
}

export { Parameters };
