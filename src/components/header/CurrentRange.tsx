"use client";
import React from "react";
import s from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  selectAllWords,
  selectCurrentRange,
  selectLearnedWords,
  selectUnlearnedWords,
  setCurrentRange,
} from "@/redux/slices/wordsSlice";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {range} from '@/data/currentRange';
import useCurrentRange from "@/hooks/profile/useCurrentRange";

export default function CurrentRange() {
  const dispatch = useAppDispatch();
  const currentRange = useAppSelector(selectCurrentRange)

  const {changeCurrentRange} = useCurrentRange();

  const handleChange = (event: SelectChangeEvent) => {
    changeCurrentRange(event.target.value);
  };
  return (
    <div>
      <Box 
      sx={{minWidth: 120}}  
      className={s.header_info_select}
       >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ 
        minWidth: 120, 
        "&.Mui-focused, &.MuiInputLabel-shrink": {
        color: "var(--whiteTextColor)",
        top: '0px'
      }, 
    }} >
            Текущий диапазон
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentRange}
            label="Текущий диапазон"
            sx={{ "& .MuiSelect-select": {
              color: "var(--whiteTextColor)",
              marginLeft: '10px'
            },}}
            onChange={handleChange}
            MenuProps={{
              MenuListProps: {
                sx:{'& .Mui-selected': {color: 'var(--baseColor)'}}}
              }
            }
          >
            {
              range.map((item, i) => (
                <MenuItem key={i} value={item}>{item}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
