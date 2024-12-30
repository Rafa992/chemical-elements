import TinderCard from "react-tinder-card";
import {
  selectCurrentWord,
  selectShowTranslation,
  setShowTranslation,
  selectAllWords,
  selectUpdateCard
} from "@/redux/slices/wordsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";
import useRandomWord from "@/hooks/words/useRandomWord";
import { selectUser } from "@/redux/slices/userSlice";
import s from "./WordsItem.module.scss";
import useCreateColor from "@/hooks/words/useCreateColor";
import useOnSwipe from "@/hooks/words/useOnSwipe";
import { setIncrease } from "@/redux/slices/wordsSlice";

export default function WordsItem() {

  const dispatch = useAppDispatch();
  const { randomWord } = useRandomWord();
  const showTranslation = useAppSelector(selectShowTranslation);
  const user = useAppSelector(selectUser);
  const allWords = useAppSelector(selectAllWords);
  const {createColor} = useCreateColor();
  const updateCard = useAppSelector(selectUpdateCard)

  useEffect(() => {
   randomWord();
  }, [allWords]);

  const currentWord = useAppSelector(selectCurrentWord);

  const {onSwipe} = useOnSwipe();

  useEffect(() => {
    dispatch(setIncrease(true))
    dispatch(setIncrease(true))
    dispatch(setShowTranslation(false))
  }, [currentWord]);

  const style = {
    background: createColor(currentWord.repetitions), 
    boxShadow: `0 0 '10px' ${createColor(currentWord.repetitions)}`
}

  return (
    <div className={s.wordCard}>
      {user.version === "en-ru" && updateCard && (
        <TinderCard onSwipe={onSwipe} preventSwipe={["up", "down"]}>
          {
            showTranslation ? (
              <div style={style} className={s.wordCard_text}>
                <p className={s.wordCard_text_symbol}>{currentWord.symbol}</p>
                <span>{currentWord.repetitions}</span>
              </div>
            ) : (
              <div style={style} className={s.wordCard_text}>
                <p>{currentWord.name}</p>
                <p>{currentWord.atomicMass}</p>
                <span>{currentWord.repetitions}</span>
                <span>№ {currentWord.order}</span>
              </div>
            )
          }
        </TinderCard>
      )}
      {user.version === "en-ru" && !updateCard && (
        <TinderCard onSwipe={onSwipe} preventSwipe={["up", "down"]}>
          {
            showTranslation ? (
              <div style={style} className={s.wordCard_text}>
                <p className={s.wordCard_text_symbol}>{currentWord.symbol}</p>
                <span>{currentWord.repetitions}</span>
              </div>
            ) : (
              <div style={style} className={s.wordCard_text}>
                <p>{currentWord.name}</p>
                <p>{currentWord.atomicMass}</p>
                <span>{currentWord.repetitions}</span>
                <span>№ {currentWord.order}</span>
              </div>
            )
          }
        </TinderCard>
      )}
      {user.version === "ru-en" && updateCard && (
         <TinderCard onSwipe={onSwipe} preventSwipe={["up", "down"]}>
           {
            showTranslation ? (
              <div style={style} className={s.wordCard_text}>
                <p>{currentWord.name}</p>
                <p>{currentWord.atomicMass}</p>
                <span>{currentWord.repetitions}</span>
                <span>№ {currentWord.order}</span>
              </div>
              ):(
              <div style={style} className={s.wordCard_text}>
                <p className={s.wordCard_text_symbol}>{currentWord.symbol}</p>
                <span>{currentWord.repetitions}</span>
              </div>
            )
          }
       </TinderCard>
      )
      }
      {user.version === "ru-en" && !updateCard && (
         <TinderCard onSwipe={onSwipe} preventSwipe={["up", "down"]}>
          {
            showTranslation ? (
              <div style={style} className={s.wordCard_text}>
                <p>{currentWord.name}</p>
                <p>{currentWord.atomicMass}</p>
                <span>{currentWord.repetitions}</span>
                <span>№ {currentWord.order}</span>
              </div>
              ):(
              <div style={style} className={s.wordCard_text}>
                <p className={s.wordCard_text_symbol}>{currentWord.symbol}</p>
                <span>{currentWord.repetitions}</span>
              </div>
            )
          }
       </TinderCard>
      )
      }
    </div>
  );
}
