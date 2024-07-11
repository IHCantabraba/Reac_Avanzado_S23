import './App.css'
// import { CalculateDate } from './components/Calculator/CalculateDate'

import Timer from './components/Timer/Timer'
/* Debe utilizar 
    1 customHook que:
      1.1 debe actualizarse cada segundo
      1.2 obtendra la fecha actual
      1.3 enviará esa fecha a un hijo de App en props (Ej Timer)
        1.3.1 el hijo recibe la fecha y la pinta
       */
import useInterval, { CalculateDate } from './CustomHoos/useInterval'
import { Title } from './components/Title/Title'
import { useState } from 'react'
const App = () => {
  const [time, setTime] = useState(0)

  useInterval(() => {
    setTime(CalculateDate)
  }, 1000)
  return (
    <div className='App'>
      <Title></Title>
      <div className='timerZone'>
        <Timer date={time} />
      </div>
    </div>
  )
}

export default App
