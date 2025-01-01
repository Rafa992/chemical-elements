import React from 'react'
import s from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={s.loader}>
        <div className={s.loader_spinner}></div>
    </div>
  )
}
