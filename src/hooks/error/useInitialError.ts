import {
  setErrorMessage,
  setErrorStatus,
  setSeverity,
  setTime,
} from "@/redux/slices/errorSlice";
import { useAppDispatch } from "@/redux/store";

export default function useInitialError() {
  const dispatch = useAppDispatch();

  const initialError = (
    status: boolean,
    message: string,
    severity: "error" | "success" | "warning" | "info",
    time: number = 3000
  ) => {
    dispatch(setErrorStatus(status));
    dispatch(setErrorMessage(message));
    dispatch(setSeverity(severity));
    dispatch(setTime(time));
  };

  return { initialError };
}
