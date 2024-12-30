"use client";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Box } from "@mui/material";
import { selectPaletteModal, setPaletteModal } from "@/redux/slices/modalSlice";
import s from './Palette.module.scss';
import LightPalette from "./LightPalette";

export default function PaletteModal() {

    const dispatch = useAppDispatch();
    const openModal = useAppSelector(selectPaletteModal);

    const handleClose = ()=> {
        dispatch(setPaletteModal(false));
    }

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{padding: '15px'}}
    >
      <Box className={s.palette}>
        <h2>Выберите основной цвет</h2>
        <LightPalette/>
      </Box>
    </Modal>
  )
}

