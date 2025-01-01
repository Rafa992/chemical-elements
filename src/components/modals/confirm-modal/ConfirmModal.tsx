"use client";
import Modal from "@mui/material/Modal";
import { useAppSelector } from "@/redux/store";
import { Box } from "@mui/material";
import { selectOpenConfirmModal } from "@/redux/slices/modalSlice";
import s from "./ConfirmModal.module.scss";
import ConfirmButtons from "./ConfirmButtons";
import useOpenConfirmModal from "@/hooks/modal/useOpenConfirmModal";

export default function ConfirmModal() {
  const openModal = useAppSelector(selectOpenConfirmModal);
  const {handleClose} = useOpenConfirmModal();

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{padding: '15px'}}
    >
      <Box className={s.confirmModal}>
        <h2>Вы действительно хотите сбросить прогресс?</h2>
        <ConfirmButtons />
      </Box>
    </Modal>
  );
}
