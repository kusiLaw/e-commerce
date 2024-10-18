import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { RooState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RooState> = useSelector