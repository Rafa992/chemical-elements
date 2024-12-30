import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import s from './CustomSnackbar.module.scss'

interface CustomSnackbarProps {
  message: string;
  severity?: 'success' | 'error' | 'warning' | 'info'; 
  open: boolean;
  onClose: () => void;
  autoHideDuration?: number; 
  position?: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'center' | 'right' }; 
}

// Создаем Alert с использованием forwardRef
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  message,
  severity = 'info',
  open,
  onClose,
  autoHideDuration = 3000,
  position = { vertical: 'bottom', horizontal: 'center' },
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={position}
      className={s.snackbar}
    >
      <Alert onClose={onClose} severity={severity} className={s.snackbar_text}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
