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
  POINTS_UP,
  POINTS_DOWN,
  PERCENTAGE_UP,
  PERCENTAGE_DOWN,
  UNDER_POINTS_UP,
  UNDER_POINTS_DOWN,
  UNDER_PERCENTAGE_UP,
  PROFIT_POINTS,
  PROFIT_PERCENTAGE,
  PROFIT_UNDER_POINTS,
  PROFIT_UNDER_PERCENTAGE,
  LOSS_POINTS,
  LOSS_UNDER_POINTS,
  LOSS_PERCENTAGE,
  LOSS_UNDER_PERCENTAGE,
  TRAIL_POINTS,
  TRAIL_PERCENTAGE,
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

const momentumOption = [
  { optionTitle: "Points ↑", value: POINTS_UP },
  { optionTitle: "Points ↓", value: POINTS_DOWN },
  { optionTitle: "Percentage ↑", value: PERCENTAGE_UP },
  { optionTitle: "Percentage ↓", value: PERCENTAGE_DOWN },
  { optionTitle: "Underlying Points ↑", value: UNDER_POINTS_UP },
  { optionTitle: "Underlying Points ↓", value: UNDER_POINTS_DOWN },
  { optionTitle: "Underlying Percentage ↑", value: UNDER_PERCENTAGE_UP },
  { optionTitle: "Underlying Percentage ↓", value: UNDER_POINTS_DOWN },
];

const targetProfitOptions = [
  { optionTitle: "Points", value: PROFIT_POINTS },
  { optionTitle: "Underlying Points", value: PROFIT_UNDER_POINTS },
  { optionTitle: "Percentage", value: PROFIT_PERCENTAGE },
  { optionTitle: "Underlying Percentage", value: PROFIT_UNDER_PERCENTAGE },
];

const stopLossOptions = [
  { optionTitle: "Points", value: LOSS_POINTS },
  { optionTitle: "Underlying Points", value: LOSS_UNDER_POINTS },
  { optionTitle: "Percentage", value: LOSS_PERCENTAGE },
  { optionTitle: "Underlying Percentage", value: LOSS_UNDER_PERCENTAGE },
];

const trailSLOptions = [
  { optionTitle: "Points", value: TRAIL_POINTS },
  { optionTitle: "Percentage", value: TRAIL_PERCENTAGE },
];

export {
  positionOptions,
  optionTypesOptions,
  expiryOptions,
  strikeCriteriaOptions,
  strikeTypeOptions,
  adjustmentOptions,
  momentumOption,
  targetProfitOptions,
  stopLossOptions,
  trailSLOptions,
};
