import { selectUser } from "@/redux/slices/userSlice";
import { setIncrease, setShowTranslation, selectShowTranslation } from "@/redux/slices/wordsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { IconButton } from "@mui/material";
import s from "./InfoButton.module.scss";

export default function InfoButton() {

    const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const showTranslation = useAppSelector(selectShowTranslation);

  const style =
    user.laterality === "right" ? { right: "100px" } : { left: "100px" };

    const handleClick = ()=> {
        dispatch(setIncrease(false));
        dispatch(setShowTranslation(!showTranslation));
    }

  return (
    <IconButton style={style} className={s.infoButton} onClick={handleClick}>
      <QuestionMarkIcon className={s.infoButton_icon} />
    </IconButton>
  );
}
