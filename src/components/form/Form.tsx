import React, { ReactNode } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import s from "./form.module.scss";

interface FormProps {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
  methods: UseFormReturn<any>;
}

const Form: React.FC<FormProps> = ({ onSubmit, methods, children }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={s.form}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
