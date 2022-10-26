import { createContext, useReducer, useContext } from "react";
import {
  CALL,
  PLUS,
  STRIKE_PARAMETER,
  SELL,
  STRIKE_TYPE,
  WEEKLY,
} from "../constant";

const LegsListContext = createContext();

const initialState = {
  Lots: 1,
  PositionType: SELL,
  OptionType: CALL,
  ExpiryKind: WEEKLY,
  EntryType: STRIKE_TYPE,
  StrikeParameter: "ATM",
  paramValues: {
    strike: "ATM",
    premium: 50,
    premiumRange: { Lower: 50, Upper: 200 },
    straddle: { Adjustment: PLUS, Multiplier: 0.5 },
    retain: false,
  },
};

function LegsListProvider({ children }) {
  const [state, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    initialState
  );
  return (
    <LegsListContext.Provider value={{ state, dispatch }}>
      {children}
    </LegsListContext.Provider>
  );
}

function useLegsList() {
  return useContext(LegsListContext);
}

const handleUpdateDispatch = (dispatch, legType) => (value) =>
  dispatch({ [legType]: value });

const onLotChange = (dispatch, value) => dispatch({ Lots: value });
const onPositionChange = (dispatch, value) => dispatch({ PositionType: value });
const onOptionTypeChange = (dispatch, value) => dispatch({ OptionType: value });
const onExpiryKindChange = (dispatch, value) => dispatch({ ExpiryKind: value });
const onEntryTypeChange = (dispatch, value) => dispatch({ EntryType: value });
const onStrikeParameterChange = (dispatch, value) =>
  dispatch({ StrikeParameter: value });
const resetLegState = (dispatch) => dispatch(initialState);

export {
  handleUpdateDispatch,
  useLegsList,
  LegsListProvider,
  onLotChange,
  onPositionChange,
  onOptionTypeChange,
  onExpiryKindChange,
  onEntryTypeChange,
  onStrikeParameterChange,
  resetLegState,
};
