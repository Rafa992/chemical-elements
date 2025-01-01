import { setOpenConfirmModal } from "@/redux/slices/modalSlice";
import { useAppDispatch } from "@/redux/store"

export default function useOpenConfirmModal() {
    const dispatch = useAppDispatch();

    const handleOpen = () => dispatch(setOpenConfirmModal(true));
    const handleClose = () => dispatch(setOpenConfirmModal(false));
    
  return {handleOpen, handleClose}
}
