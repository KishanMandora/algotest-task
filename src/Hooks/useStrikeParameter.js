import { useEffect } from "react";
import { onStrikeParameterChange } from "../Context/LegsListContext";

function useStrikeParameter(dispatch, value) {
  useEffect(() => {
    onStrikeParameterChange(dispatch, value);
  }, []);
}

export { useStrikeParameter };
