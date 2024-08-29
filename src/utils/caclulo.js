export const calculate = (dispatch, insertedValue, number1, operation) => {
  switch (operation) {
    case '+':
      dispatch({
        type: 'CALCULATE',
        payload: number1 + parseInt(insertedValue.current.value)
      })
      break
    case '-':
      dispatch({
        type: 'CALCULATE',
        payload: number1 - parseInt(insertedValue.current.value)
      })
      break
    case '*':
      dispatch({
        type: 'CALCULATE',
        payload: number1 * parseInt(insertedValue.current.value)
      })
      break
    case '/':
      dispatch({
        type: 'CALCULATE',
        payload: number1 / parseInt(insertedValue.current.value)
      })
      break
    case '%':
      dispatch({
        type: 'CALCULATE',
        payload: number1 % parseInt(insertedValue.current.value)
      })
      break
    default:
      break
  }
  insertedValue.current.value = ''
}
