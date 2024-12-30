import { useState, useEffect } from 'react';
import s from './Palette.module.scss'
import { ColorResult, SketchPicker } from 'react-color';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { selectColor, setColor } from '@/redux/slices/colorSlice';

export default function LightPalette() {

    const dispatch = useAppDispatch();
    const color = useAppSelector(selectColor);

    useEffect(() => {
        document.documentElement.style.setProperty('--baseColor', color);
    }, [color]);

    const handleChangeComplete = (newColor: ColorResult) => {
    const rgbaColor = `rgba(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b}, ${newColor.rgb.a})`;
    dispatch(setColor(rgbaColor))
    document.documentElement.style.setProperty('--baseColor', rgbaColor);
    localStorage.setItem('primaryColor', JSON.stringify(rgbaColor));
    };
    
  return (
    <SketchPicker color={color} onChangeComplete={handleChangeComplete} className={s.sketchPicker} />
  )
}
