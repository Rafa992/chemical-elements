import { IWords } from "@/types/words.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface IInitialState {
  allWords: IWords[];
  currentWord: IWords;
  learnedWords: IWords[];
  unlearnedWords: IWords[];
  increase: boolean;
  showTranslation: boolean;
  currentRange: string;
  updateCard: boolean;
}

const initialState: IInitialState = {
  allWords: [],
  currentWord: {} as IWords,
  learnedWords: [],
  unlearnedWords: [],
  increase: true,
  showTranslation: false,
  currentRange: "",
  updateCard: false,
};

const wordsSlice = createSlice({
  name: "wordsSlice",
  initialState,
  reducers: {
    setAllWords: (state, action: PayloadAction<IWords[]>) => {
      state.allWords = action.payload;
    },
    setCurrentRange: (state, action: PayloadAction<string>) => {
      state.currentRange = action.payload;
    },
    setCurrentWord: (state, action: PayloadAction<IWords>) => {
      state.currentWord = action.payload;
    },
    setLearnedWords: (state, action: PayloadAction<IWords[]>) => {
      state.learnedWords = action.payload;
    },
    setUnlearnedWords: (state, action: PayloadAction<IWords[]>) => {
      state.unlearnedWords = action.payload;
    },
    setIncrease: (state, action: PayloadAction<boolean>) => {
      state.increase = action.payload;
    },
    setShowTranslation: (state, action: PayloadAction<boolean>) => {
      state.showTranslation = action.payload;
    },
    setUpdateCard: (state, action: PayloadAction<boolean>) => {
      state.updateCard = action.payload;
    },
  },
});

export const selectAllWords = (state: RootState): IWords[] =>
  state.wordsReducer.allWords;
export const selectCurrentWord = (state: RootState): IWords =>
  state.wordsReducer.currentWord;
export const selectLearnedWords = (state: RootState): IWords[] =>
  state.wordsReducer.learnedWords;
export const selectUnlearnedWords = (state: RootState): IWords[] =>
  state.wordsReducer.unlearnedWords;
export const selectIncrease = (state: RootState): boolean =>
  state.wordsReducer.increase;
export const selectShowTranslation = (state: RootState): boolean =>
  state.wordsReducer.showTranslation;
export const selectCurrentRange = (state: RootState): string =>
  state.wordsReducer.currentRange;
export const selectUpdateCard = (state: RootState): boolean =>
  state.wordsReducer.updateCard;

export const {
  setAllWords,
  setCurrentWord,
  setLearnedWords,
  setUnlearnedWords,
  setIncrease,
  setShowTranslation,
  setCurrentRange,
  setUpdateCard,
} = wordsSlice.actions;
export default wordsSlice.reducer;
