const PositionType = {
  SELL: "PositionType.Sell",
  BUY: "PositionType.Buy",
};

const OptionType = {
  CALL: "OptionType.Call",
  PUT: "OptionType.Put",
};

const ExpiryKind = {
  WEEKLY: "ExpiryType.Weekly",
  MONTHLY: "ExpiryType.Monthly",
};

const EntryType = {
  STRIKE_TYPE: "EntryType.EntryByStrikeType",
  PREMIUM: "EntryType.EntryByPremium",
  PREMIUM_RANGE: "EntryType.EntryByPremiumRange",
  STRADDLE_WIDTH: "EntryType.EntryByStraddleWidth",
};

const StrikeType = {
  ATM: "ATM",
  OTM1: "OTM1",
  OTM2: "OTM2",
  OTM3: "OTM3",
  OTM4: "OTM4",
};

const PremiumRangeType = {
  LOWER: "Lower",
  UPPER: "Upper",
};

const AdjustmentType = {
  PLUS: "Plus",
  MINUS: "Minus",
};

const { BUY, SELL } = PositionType;
const { CALL, PUT } = OptionType;
const { WEEKLY, MONTHLY } = ExpiryKind;
const { STRIKE_TYPE, PREMIUM, PREMIUM_RANGE, STRADDLE_WIDTH } = EntryType;
const { ATM, OTM1, OTM2, OTM3, OTM4 } = StrikeType;
const { LOWER, UPPER } = PremiumRangeType;
const { PLUS, MINUS } = AdjustmentType;

export {
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
  LOWER,
  UPPER,
  PLUS,
  MINUS,
};
