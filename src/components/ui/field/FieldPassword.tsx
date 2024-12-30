'use client';

import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  validation?: {
    required?: boolean | string;
    minLength?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
}

const FieldPassword: React.FC<TextFieldProps> = ({ name, label, validation = {} }) => {
  const { register, formState: { errors } } = useFormContext();
  const [showPassword, setShowPassword] = React.useState(false);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col space-y-2 w-full">
        <FormControl sx={{ width: 'full' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id={name}
          label={label}
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          {...register(name, validation)}
          endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
        />
        </FormControl>
      
        <span className="text-red-500 text-[13px] h-[20px]">{errors[name] ? (errors[name] as any).message : ''}</span>
    </div>
  );
};

export default FieldPassword;
