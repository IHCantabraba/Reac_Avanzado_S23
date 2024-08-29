export const CalculateDate = () => {
  const currentDate = new Date()
  const FormatedDate = currentDate.toLocaleTimeString()

  return FormatedDate
}
