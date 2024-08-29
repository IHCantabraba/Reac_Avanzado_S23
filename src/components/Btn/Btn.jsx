import React from 'react'
import './Btn.css'
const Btn = ({ name, symbol, callBack }) => {
  return (
    <button className={name} onClick={callBack}>
      {symbol}
    </button>
  )
}

export default Btn
