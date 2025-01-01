import { axiosWithAuth } from "@/api/interceptors";
import { setLoading } from "@/redux/slices/loaderSlice";
import { useAppDispatch } from "@/redux/store";
import useInitialError from "../error/useInitialError";
import useGetAllWords from "./useGetAllWords";

export default function useRestartWords() {

  const dispatch = useAppDispatch();
  const {initialError} = useInitialError();
  const {getAllWords} = useGetAllWords();

  const restartWords = async () => {
    try {
      await axiosWithAuth.delete("/chemical-elements/delete-element");
      await getAllWords();
      dispatch(setLoading(false));
      initialError(true, 'Прогресс слов успешно обновлен', 'success', 1500)
    } catch (error) {
      dispatch(setLoading(false));
      initialError(true, 'error while restart element', 'error')
    }
  };

  return { restartWords };
}
