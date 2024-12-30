import { axiosWithAuth } from "@/api/interceptors";
import { setAllWords, setLearnedWords, setUnlearnedWords } from "@/redux/slices/wordsSlice";
import { useAppDispatch } from "@/redux/store";
import { IWords } from "@/types/words.types";
import useInitialError from "../error/useInitialError";

export default function useGetAllWords() {
  const dispatch = useAppDispatch();

  const {initialError} = useInitialError();

  const getAllWords = async () => {
    try {
      const res = await axiosWithAuth.get("/chemical-elements/all");
      const data = await res.data as IWords[];
      const learned = data.filter(item => item.learned)
      const unlearned = data.filter(item => item.unlearned)
      dispatch(setAllWords(data));
      dispatch(setLearnedWords(learned));
      dispatch(setUnlearnedWords(unlearned));
    } catch (error) {
        initialError(true, 'error receiving all words', 'error')
    }
  };

  return { getAllWords };
}
