'use client';

import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
  validation?: {
    required?: boolean | string;
    minLength?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
}

const Field: React.FC<TextFieldProps> = ({ name, label, type = 'text', validation = {} }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col space-y-2 w-full">
      <TextField
          id={name}
          label={label}
          type={type}
          autoComplete="current-password"
          {...register(name, validation)}
        />
        <span className="text-red-500 text-[13px] h-[20px]">{errors[name] ? (errors[name] as any).message : ''}</span>
    </div>
  );
};

export default Field;
