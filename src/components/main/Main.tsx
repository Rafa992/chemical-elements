"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import s from "./Main.module.scss";
import CustomSnackbar from "../ui/customsComponents/CustomSnackbar";
import {
  selectErrorMessage,
  selectErrorStatus,
  selectSeverity,
  selectTime,
  setErrorStatus,
} from "@/redux/slices/errorSlice";
import PaletteModal from "../modals/palette-modal/PaletteModal";
import { selectColor } from "@/redux/slices/colorSlice";
import WordsItem from "../words/WordsItem";
import InfoButton from "../info/InfoButton";
import { selectAllWords } from "@/redux/slices/wordsSlice";
import useProfile from "@/hooks/profile/useProfile";
import NextButton from "../next-button/NextButton";
import ConfirmModal from "../modals/confirm-modal/ConfirmModal";
import { selectOpenConfirmModal } from "@/redux/slices/modalSlice";
import Loader from "../ui/loader/Loader";
import { selectLoading } from "@/redux/slices/loaderSlice";

export default function Main() {
  const dispatch = useAppDispatch();
  const errorStatus = useAppSelector(selectErrorStatus);
  const errorMessage = useAppSelector(selectErrorMessage);
  const severity = useAppSelector(selectSeverity);
  const words = useAppSelector(selectAllWords)
  const {fetchProfile} = useProfile();

  const handleCloseSnackbar = () => dispatch(setErrorStatus(false));
  const color = useAppSelector(selectColor);
  const openConfirmModal = useAppSelector(selectOpenConfirmModal);
  const time = useAppSelector(selectTime);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    document.documentElement.style.setProperty("--baseColor", color);
  }, [color]);

  useEffect(() => {
    fetchProfile()
  }, []);

  return (
    <main className={`${s.main}`}>
      <PaletteModal />
      {
         !loading && (
           <WordsItem />
         )
      }
      <CustomSnackbar
        message={errorMessage}
        severity={severity}
        open={errorStatus}
        onClose={handleCloseSnackbar}
        autoHideDuration={time}
        position={{ vertical: "bottom", horizontal: "right" }}
      />
      {
        openConfirmModal && (
          <ConfirmModal/>
        )
      }
      {
        loading && (
          <Loader/>
        )
      }
      {
        words && !loading && (
          <>
          <InfoButton/>
          <NextButton/>
          </>
        )
      }
    </main>
  );
}
