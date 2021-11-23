export default function ExpenseDate({ date }) {
  return(
    <>
      <div>{date.toLocaleString('en-US', {month: 'long'})}</div>
      <div>{date.getFullYear()}</div>
      <div>{date.toLocaleString('en-US', {day: '2-digit'})}</div>
    </>
  )
}
