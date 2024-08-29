import './HistoricalResults.css'
import React from 'react'

// const initialresult = [8]
/* tiene que acceder a context Results o no */
const HistoricalResults = ({ initialResult, Historical }) => {
  console.log(typeof initialResult)
  return (
    <div className='historial-area'>
      <div className='current-result'>
        <label className='current-label'>Result:</label>
        <p className='current-result'>
          {initialResult > 0 ? initialResult : 0}
        </p>
      </div>
      <fieldset className='histical-calcs'>
        <legend className='legend'>Calculations</legend>
        {Historical.length > 0
          ? Historical.map((result, i) => (
              <div className='result-container' key={i}>
                <label className='result-label'>Operation Result: </label>
                <p className='result'>{result}</p>
              </div>
            ))
          : 'No calculated Operations yet'}
      </fieldset>
    </div>
  )
}

export default HistoricalResults
