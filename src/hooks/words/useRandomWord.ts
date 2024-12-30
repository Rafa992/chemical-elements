import { selectAllWords, selectCurrentRange, selectUnlearnedWords, setCurrentWord } from '@/redux/slices/wordsSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import randomFunction from '@/utils/randomFunction'

export default function useRandomWord() {
    const dispatch = useAppDispatch();
    const words = useAppSelector(selectAllWords);
    const currentRange = useAppSelector(selectCurrentRange);
    const unlearnedWords = useAppSelector(selectUnlearnedWords);

    const numArr = currentRange.split('-');
    const min = +numArr[0]
    const max = +numArr[1]
    
    const randomWord = ()=> {
        const rand = randomFunction(max, min);
        const word = unlearnedWords.find(item => item.order == rand);
        if(word){
            dispatch(setCurrentWord(word))
        }
        return word
    }

  return {randomWord}
}
