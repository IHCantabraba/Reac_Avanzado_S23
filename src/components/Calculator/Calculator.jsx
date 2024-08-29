import { calculate } from '../../utils/caclulo'
import Btn from '../Btn/Btn'
import HistoricalResults from '../HistoricalResults/HistoricalResults'
import './Calculator.css'
/* use memo para evitar rendeciraz la caculadora cada vez que se renderiza el reloj. */
/* useReducer para poder cambiar los estados. Requiere 
    Estado inicial
    Funcioón reductora */
import React, { useRef, useReducer, memo, useCallback } from 'react'
const STATE_INITIAL_CALCULATOR = {
  number1: 0,
  operation: '',
  resultado: 0,
  ResultadosHistoricos: []
}

/* Funcion reductora */
const calculateReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_OPERATION':
      return {
        ...state,
        number1: parseInt(action.payload.inputValue),
        operation: action.payload.operation
      }
    case 'CALCULATE':
      return {
        ...state,
        resultado: action.payload,
        number1: 0,
        operation: '',
        ResultadosHistoricos: [...state.ResultadosHistoricos, action.payload]
      }
    default:
      return state
  }
}

/* Calculadora recogida en un memo para evitar que se renderice cada vez que se actualiza el reloj */
const Calculator = memo(() => {
  console.log('rendering calculator')
  /* uso d ela función reductora y el estado inicial para realizar acciones */
  const [state, dispatch] = useReducer(
    calculateReducer,
    STATE_INITIAL_CALCULATOR
  )
  /* obtener los valores que nos devuelve el estado */
  const { resultado, operation, number1, ResultadosHistoricos } = state

  /* valor introducido */
  const insertedValue = useRef()

  const executeOperation = useCallback(
    (operation) => {
      dispatch({
        type: 'ADD_OPERATION',
        payload: {
          inputValue: insertedValue.current.value,
          operation: operation
        }
      })
      /* resetear el valor del input */
      insertedValue.current.value = ''
    },
    [operation]
  )

  return (
    <div className='calculatorArea'>
      <input className='number-area' type='number' ref={insertedValue} />
      <div className='Calculator-actions'>
        <Btn name='btn add' symbol='+' callBack={() => executeOperation('+')} />
        <Btn
          name='btn substract'
          symbol='-'
          callBack={() => executeOperation('-')}
        />
        <Btn
          name='btn multiply'
          symbol='X'
          callBack={() => executeOperation('*')}
        />
        <Btn
          name='btn devide'
          symbol='/'
          callBack={() => executeOperation('/')}
        />
        <Btn
          name='btn module'
          symbol='%'
          callBack={() => executeOperation('%')}
        />
        <Btn
          name='btn equal'
          symbol='='
          callBack={() =>
            calculate(dispatch, insertedValue, number1, operation)
          }
        />
      </div>
      <HistoricalResults
        initialResult={resultado}
        Historical={ResultadosHistoricos}
      />
    </div>
  )
})

export default Calculator
