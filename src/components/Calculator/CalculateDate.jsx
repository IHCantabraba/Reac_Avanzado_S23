export const CalculateDate = () => {
  const currentDate = new Date()
  const FormatedDate = currentDate.toLocaleTimeString()
  console.log(`date calculated at:${FormatedDate}`)
  return FormatedDate
}
