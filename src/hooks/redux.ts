import { RootStateInterface } from "@/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootStateInterface> =
  useSelector;
