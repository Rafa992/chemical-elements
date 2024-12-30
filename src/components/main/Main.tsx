"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import s from "./Main.module.scss";
import CustomSnackbar from "../ui/customsComponents/CustomSnackbar";
import {
  selectErrorMessage,
  selectErrorStatus,
  selectSeverity,
  setErrorStatus,
} from "@/redux/slices/errorSlice";
import PaletteModal from "../modals/palette-modal/PaletteModal";
import { selectColor } from "@/redux/slices/colorSlice";
import WordsItem from "../words/WordsItem";
import InfoButton from "../info/InfoButton";
import { selectAllWords } from "@/redux/slices/wordsSlice";
import useProfile from "@/hooks/profile/useProfile";
import NextButton from "../next-button/NextButton";

export default function Main() {
  const dispatch = useAppDispatch();
  const errorStatus = useAppSelector(selectErrorStatus);
  const errorMessage = useAppSelector(selectErrorMessage);
  const severity = useAppSelector(selectSeverity);
  const words = useAppSelector(selectAllWords)
  const {fetchProfile} = useProfile();

  const handleCloseSnackbar = () => dispatch(setErrorStatus(false));
  const color = useAppSelector(selectColor);

  useEffect(() => {
    document.documentElement.style.setProperty("--baseColor", color);
  }, [color]);

  useEffect(() => {
    fetchProfile()
  }, []);

  return (
    <main className={`${s.main}`}>
      <PaletteModal />
        <WordsItem />
      <CustomSnackbar
        message={errorMessage}
        severity={severity}
        open={errorStatus}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        position={{ vertical: "bottom", horizontal: "right" }}
      />
      {
        words && (
          <>
          <InfoButton/>
          <NextButton/>
          </>
        )
      }
    </main>
  );
}
