import { createContext, useReducer, useContext } from "react";
import { CALL, SELL, STRIKE_TYPE, WEEKLY } from "../constant";

const LegsListContext = createContext();

const initialState = {
  Lots: 0,
  PositionType: SELL,
  OptionType: CALL,
  ExpiryKind: WEEKLY,
  EntryType: STRIKE_TYPE,
  StrikeParameter: "ATM",
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

const onLotChange = (dispatch, value) => dispatch({ Lots: value });
const onPositionChange = (dispatch, value) => dispatch({ PositionType: value });
const onOptionTypeChange = (dispatch, value) => dispatch({ OptionType: value });
const onExpiryKindChange = (dispatch, value) => dispatch({ ExpiryKind: value });
const onEntryTypeChange = (dispatch, value) => dispatch({ EntryType: value });
const onStrikeParameterChange = (dispatch, value) =>
  dispatch({ StrikeParameter: value });
const resetLegState = (dispatch) => dispatch(initialState);

export {
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
