import {
  TotalLots,
  Expiry,
  OptionsType,
  Position,
  StrikeCriteria,
  Parameters,
} from "..";
import {
  ENTRY_TYPE,
  EXPIRY_KIND,
  LOTS,
  OPTION_TYPE,
  POSITION_TYPE,
  STRIKE_PARAMETER,
} from "../../constant";
import {
  useLegsList,
  handleUpdateDispatch,
} from "../../Context/LegsListContext";

function LegBuilder() {
  const { state, dispatch } = useLegsList();

  const { EntryType, Lots, PositionType, OptionType, ExpiryKind, paramValues } =
    state;

  const retainValueDispatch = handleUpdateDispatch(dispatch, "paramValues");
  const handleRetainValue = (value, paramType) => {
    retainValueDispatch({ ...paramValues, [paramType]: value, retain: true });
  };
  const handleStrikeParam = handleUpdateDispatch(dispatch, STRIKE_PARAMETER);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      <TotalLots
        lots={Lots}
        handleChange={handleUpdateDispatch(dispatch, LOTS)}
      />
      <Position
        position={PositionType}
        handleChange={handleUpdateDispatch(dispatch, POSITION_TYPE)}
      />
      <OptionsType
        options={OptionType}
        handleChange={handleUpdateDispatch(dispatch, OPTION_TYPE)}
      />
      <Expiry
        expiry={ExpiryKind}
        handleChange={handleUpdateDispatch(dispatch, EXPIRY_KIND)}
      />
      <StrikeCriteria
        entryType={EntryType}
        handleChange={handleUpdateDispatch(dispatch, ENTRY_TYPE)}
      />
      <Parameters
        entryType={EntryType}
        paramValues={paramValues}
        handleStrikeParam={handleStrikeParam}
        handleRetainValue={handleRetainValue}
      />
    </div>
  );
}

export { LegBuilder };
