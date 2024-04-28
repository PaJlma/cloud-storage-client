import { AppDispatch, RootStateInterface } from "@/store";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootStateInterface> =
  useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
