"use client";
import { selectSettings, setOpenConfirmModal, setPaletteModal, setSettings } from "@/redux/slices/modalSlice";
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
import { selectAllWords, selectLearnedWords, selectUnlearnedWords } from "@/redux/slices/wordsSlice";
import Laterality from "@/components/laterality/Laterality";
import Version from "@/components/version/Version";
import CurrentRange from "./CurrentRange";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { selectUser } from "@/redux/slices/userSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const settings = useAppSelector(selectSettings)

  const words = useAppSelector(selectAllWords)
  const learnedWords = useAppSelector(selectLearnedWords)
  const unlearnedWords = useAppSelector(selectUnlearnedWords)
  const user = useAppSelector(selectUser);

  const logout = () => {
    push(DASHBOARD_PAGES.LOGIN);
    removeFromStorage();
  };

  const rest = () => {
    dispatch(setOpenConfirmModal(true))
  };

  const openSetting = () => {
    dispatch(setSettings(true));
  };

  const style = user.laterality === "right" ? { order: "1" } : { order: "-1" }
  const style2 = !settings && user.laterality === "right"
    ? {right: '-100%', left: 'unset'}
    : {left: '-100%', right: 'unset'}

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
            onClick={() => dispatch(setSettings(false))}
          ></div>
        )}
        <IconButton style={style} className={s.header_settings} onClick={() => openSetting()}>
          <TuneIcon className={s.header_buttons_icon} />
        </IconButton>
        <div
        style={style2}
          className={`
          ${s.header_buttons} 
          ${settings && user.laterality === "right" 
          ? s.header_buttons_right 
          : settings && user.laterality === "left"
          ? s.header_buttons_left : ''
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
          <IconButton title="Сбросить прогресс" onClick={rest}>
            <RestartAltIcon className={s.header_buttons_icon} />
          </IconButton>
          <IconButton title="Выйти из аккаунта" onClick={logout}>
            <LogoutIcon className={s.header_buttons_icon} />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
