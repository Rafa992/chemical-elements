import {
  setErrorMessage,
  setErrorStatus,
  setSeverity,
} from "@/redux/slices/errorSlice";
import { useAppDispatch } from "@/redux/store";

export default function useInitialError() {
  const dispatch = useAppDispatch();

  const initialError = (
    status: boolean,
    message: string,
    severity: "error" | "success" | "warning" | "info"
  ) => {
    dispatch(setErrorStatus(status));
    dispatch(setErrorMessage(message));
    dispatch(setSeverity(severity));
  };

  return { initialError };
}
