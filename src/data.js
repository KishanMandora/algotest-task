import {
  SELL,
  BUY,
  CALL,
  PUT,
  WEEKLY,
  MONTHLY,
  STRIKE_TYPE,
  PREMIUM,
  PREMIUM_RANGE,
  STRADDLE_WIDTH,
  ATM,
  OTM1,
  OTM2,
  OTM3,
  OTM4,
  PLUS,
  MINUS,
} from "./constant";

const positionOptions = [
  { optionTitle: "Buy", value: BUY },
  { optionTitle: "Sell", value: SELL },
];

const optionTypesOptions = [
  { optionTitle: "Call", value: CALL },
  { optionTitle: "Put", value: PUT },
];

const expiryOptions = [
  { optionTitle: "Weekly", value: WEEKLY },
  { optionTitle: "Monthly", value: MONTHLY },
];

const strikeCriteriaOptions = [
  { optionTitle: "Strike Type", value: STRIKE_TYPE },
  { optionTitle: "Premium Range", value: PREMIUM_RANGE },
  { optionTitle: "Closest Premium", value: PREMIUM },
  { optionTitle: "Straddle Width", value: STRADDLE_WIDTH },
];

const adjustmentOptions = [
  { optionTitle: "+", value: PLUS },
  { optionTitle: "-", value: MINUS },
];

const strikeTypeOptions = [
  { optionTitle: "ATM", value: ATM },
  { optionTitle: "0TM1", value: OTM1 },
  { optionTitle: "0TM2", value: OTM2 },
  { optionTitle: "0TM3", value: OTM3 },
  { optionTitle: "0TM4", value: OTM4 },
];

export {
  positionOptions,
  optionTypesOptions,
  expiryOptions,
  strikeCriteriaOptions,
  strikeTypeOptions,
  adjustmentOptions,
};
