import React, { useEffect } from 'react'
export const CalculateDate = () => {
  const currentDate = new Date()
  const FormatedDate = currentDate.toLocaleTimeString()
  console.log(`date calculated at:${FormatedDate}`)
  return FormatedDate
}

const useInterval = (callback, interval) => {
  useEffect(() => {
    const intervalId = setInterval(callback, interval)
    return () => {
      clearInterval(intervalId)
    }
  }, [callback, interval])
}

export default useInterval
