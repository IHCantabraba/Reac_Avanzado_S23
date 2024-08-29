import './App.css'
import Timer from './components/Timer/Timer'
import { Title } from './components/Title/Title'
import { useInterval } from './CustomHoos/useInterval'
import Calculator from './components/Calculator/Calculator'
const App = () => {
  /* Custom Hook */
  const { time } = useInterval()
  return (
    <div className='App'>
      <Title />
      {/* pass porp to child */}
      <div className='timerZone'>
        <Timer date={time} />
      </div>
      <Calculator />
      {/* <HistoricalResults /> */}
    </div>
  )
}

export default App
