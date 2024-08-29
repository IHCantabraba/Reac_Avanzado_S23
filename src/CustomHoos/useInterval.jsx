import { useEffect, useState } from 'react'
import { CalculateDate } from '../utils/CalculateDate'

export const useInterval = () => {
  const [time, setTime] = useState(CalculateDate)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(CalculateDate)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return { time }
}
