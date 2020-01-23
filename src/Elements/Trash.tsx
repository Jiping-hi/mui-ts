import React from "react"

export default Trash

interface Props {
  name?: string
}
export function Trash(props: Props) {
  console.log('Trash')
  const [value, setValue] = React.useState('')
  return (
    <div><label htmlFor="" id='my-label'>All Trash</label>
      <input defaultValue={value} onChange={event => { setValue(event.target.value) }} />
      <button onClick={event => {
        const theLabel = document.getElementById('my-label');
        if (theLabel) theLabel.innerHTML = 'script changed text'
      }} >click me</button>
    </div>
  )
}