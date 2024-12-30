"use client";
import { setPaletteModal } from "@/redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { removeFromStorage } from "@/services/auth-token.service";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import s from "./Header.module.scss";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/navigation";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import TuneIcon from "@mui/icons-material/Tune";
import { useState } from "react";
import { selectAllWords, selectLearnedWords, selectUnlearnedWords } from "@/redux/slices/wordsSlice";
import Laterality from "@/components/laterality/Laterality";
import Version from "@/components/version/Version";
import CurrentRange from "./CurrentRange";

export default function Header() {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const [settings, setSettings] = useState(false);

  const words = useAppSelector(selectAllWords)
  const learnedWords = useAppSelector(selectLearnedWords)
  const unlearnedWords = useAppSelector(selectUnlearnedWords)

  const logout = () => {
    push(DASHBOARD_PAGES.LOGIN);
    removeFromStorage();
  };

  const openSetting = () => {
    setSettings(true);
  };

  return (
    <header className={s.header}>
      <div className={`${s.header_container} container`}>
        <div className={s.header_info}>
          <p className={s.header_info_title}>
            <span>Всего слов - </span><span>{words.length}</span></p>
          <p className={s.header_info_title}>
            <span>Выученные - </span>
            <span>{learnedWords.length}</span>
            </p>
          <p className={s.header_info_title}>
            <span>Не выученные - </span>
            <span>{unlearnedWords.length}</span>
          </p>
          <CurrentRange/>
        </div>
        {settings && (
          <div
            className={s.header_bg_close}
            onClick={() => setSettings(false)}
          ></div>
        )}
        <IconButton className={s.header_settings} onClick={() => openSetting()}>
          <TuneIcon className={s.header_buttons_icon} />
        </IconButton>
        <div
          className={`${s.header_buttons} ${
            settings && s.header_buttons_active
          }`}
        >
          <ThemeSwitch />
          <Laterality/>
          <IconButton
            title="Изменить основной цвет"
            onClick={() => dispatch(setPaletteModal(true))}
          >
            <ColorLensIcon className={s.header_buttons_icon} />
          </IconButton>
          
          <Version />
          <IconButton title="Выйти из аккаунта" onClick={logout}>
            <LogoutIcon className={s.header_buttons_icon} />
          </IconButton>
          
        </div>
      </div>
    </header>
  );
}
