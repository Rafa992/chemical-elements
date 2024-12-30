import {
  selectCurrentWord,
  selectUpdateCard,
  setUpdateCard,
} from "@/redux/slices/wordsSlice";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import useRandomWord from "./useRandomWord";
import useUpdateWord from "./useUpdateWord";

export default function useOnSwipe() {
  const dispatch = useAppDispatch();
  const { randomWord } = useRandomWord();
  const { updateWord } = useUpdateWord();
  const currentWord = useAppSelector(selectCurrentWord);
  const updateCard = useAppSelector(selectUpdateCard);

  const onSwipe = (direction: string) => {
    if (direction === "right") {
      setTimeout(() => {
        randomWord();
        dispatch(setUpdateCard(!updateCard));
        updateWord(currentWord);
      }, 700);
    } else if (direction === "left") {
      setTimeout(() => {
        randomWord();
        dispatch(setUpdateCard(!updateCard));
        updateWord(currentWord);
      }, 700);
    }
  };

  return { onSwipe };
}
