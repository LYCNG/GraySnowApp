import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import  {actionCreator}  from "../state/index";

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(actionCreator, dispatch), [
    dispatch,
  ]);
};