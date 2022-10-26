const positionType = {
  SELL: "PositionType.Sell",
  BUY: "PositionType.Buy",
};

const optionType = {
  CALL: "OptionType.Call",
  PUT: "OptionType.Put",
};

const expiryKind = {
  WEEKLY: "ExpiryType.Weekly",
  MONTHLY: "ExpiryType.Monthly",
};

const entryType = {
  STRIKE_TYPE: "EntryType.EntryByStrikeType",
  PREMIUM: "EntryType.EntryByPremium",
  PREMIUM_RANGE: "EntryType.EntryByPremiumRange",
  STRADDLE_WIDTH: "EntryType.EntryByStraddleWidth",
};

const strikeType = {
  ATM: "ATM",
  OTM1: "OTM1",
  OTM2: "OTM2",
  OTM3: "OTM3",
  OTM4: "OTM4",
};

const premiumRangeType = {
  LOWER: "Lower",
  UPPER: "Upper",
};

const adjustmentType = {
  PLUS: "Plus",
  MINUS: "Minus",
};

const legs = {
  LOTS: "Lots",
  POSITION_TYPE: "PositionType",
  OPTION_TYPE: "OptionType",
  EXPIRY_KIND: "ExpiryKind",
  ENTRY_TYPE: "EntryType",
  STRIKE_PARAMETER: "StrikeParameter",
  LEG_MOMENTUM: "LegMomentum",
  LEG_TARGET: "LegTarget",
  LEG_STOP_LOSS: "LegStopLoss",
  LEG_TRAIL_SL: "LegTrailSL",
};

const momentumType = {
  POINTS_UP: "MomentumType.PointsUp",
  POINTS_DOWN: "MomentumType.PointsDown",
  PERCENTAGE_UP: "MomentumType.PercentageUp",
  PERCENTAGE_DOWN: "MomentumType.PercentageDown",
  UNDER_POINTS_UP: "MomentumType.UnderlyingPointsUp",
  UNDER_POINTS_DOWN: "MomentumType.UnderlyingPointsDown",
  UNDER_PERCENTAGE_UP: "MomentumType.UnderlyingPercentageUp",
  UNDER_PERCENTAGE_DOWN: "MomentumType.UnderlyingPercentageDown",
};

const targetProfit = {
  PROFIT_POINTS: "LegTgt.Points",
  PROFIT_UNDER_POINTS: "LegTgt.UnderlyingPoints",
  PROFIT_PERCENTAGE: "LegTgt.Percentage",
  PROFIT_UNDER_PERCENTAGE: "LegTgt.UnderlyingPercentage",
};

const stopLoss = {
  LOSS_POINTS: "LegTgtSL.Points",
  LOSS_UNDER_POINTS: "LegTgtSL.UnderlyingPoints",
  LOSS_PERCENTAGE: "LegTgtSL.Percentage",
  LOSS_UNDER_PERCENTAGE: "LegTgtSL.UnderlyingPercentage",
};

const trailSL = {
  TRAIL_POINTS: "TrailStopLossType.Points",
  TRAIL_PERCENTAGE: "TrailStopLossType.Percentage",
};

const { BUY, SELL } = positionType;
const { CALL, PUT } = optionType;
const { WEEKLY, MONTHLY } = expiryKind;
const { STRIKE_TYPE, PREMIUM, PREMIUM_RANGE, STRADDLE_WIDTH } = entryType;
const { ATM, OTM1, OTM2, OTM3, OTM4 } = strikeType;
const { LOWER, UPPER } = premiumRangeType;
const { PLUS, MINUS } = adjustmentType;
const {
  LOTS,
  POSITION_TYPE,
  OPTION_TYPE,
  EXPIRY_KIND,
  ENTRY_TYPE,
  STRIKE_PARAMETER,
  LEG_MOMENTUM,
  LEG_TARGET,
  LEG_STOP_LOSS,
  LEG_TRAIL_SL,
} = legs;

const {
  POINTS_UP,
  POINTS_DOWN,
  PERCENTAGE_UP,
  PERCENTAGE_DOWN,
  UNDER_POINTS_UP,
  UNDER_POINTS_DOWN,
  UNDER_PERCENTAGE_UP,
  UNDER_PERCENTAGE_DOWN,
} = momentumType;

const {
  PROFIT_POINTS,
  PROFIT_UNDER_POINTS,
  PROFIT_PERCENTAGE,
  PROFIT_UNDER_PERCENTAGE,
} = targetProfit;

const {
  LOSS_POINTS,
  LOSS_UNDER_POINTS,
  LOSS_PERCENTAGE,
  LOSS_UNDER_PERCENTAGE,
} = stopLoss;

const { TRAIL_POINTS, TRAIL_PERCENTAGE } = trailSL;

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
  LOTS,
  POSITION_TYPE,
  OPTION_TYPE,
  EXPIRY_KIND,
  ENTRY_TYPE,
  STRIKE_PARAMETER,
  POINTS_UP,
  POINTS_DOWN,
  PERCENTAGE_UP,
  PERCENTAGE_DOWN,
  UNDER_POINTS_UP,
  UNDER_POINTS_DOWN,
  UNDER_PERCENTAGE_UP,
  UNDER_PERCENTAGE_DOWN,
  LEG_MOMENTUM,
  PROFIT_POINTS,
  PROFIT_UNDER_POINTS,
  PROFIT_PERCENTAGE,
  PROFIT_UNDER_PERCENTAGE,
  LEG_TARGET,
  LOSS_POINTS,
  LOSS_UNDER_POINTS,
  LOSS_PERCENTAGE,
  LOSS_UNDER_PERCENTAGE,
  LEG_STOP_LOSS,
  TRAIL_POINTS,
  TRAIL_PERCENTAGE,
  LEG_TRAIL_SL,
};
