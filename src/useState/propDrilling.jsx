import { useRef } from 'react'

const PropDrilling = ({ title }) => {
  return <div>{title}</div>
}

PropDrilling.defaultProps = {
  title: 'Default Title',
}
export default PropDrilling

// searching functionality
// if search is a useState of search field, then Content can be filtered using the below code
{
  /* <Content items={items.filter(item => (item.item).toLowerCase()).includes(search.toLowerCase())}/> */

  // useRef to shift focus to particular input field
  // const inputRef = useRef()

  /*   <input type="text" autoFocus ref={inputRef} />
  <button type="button" onClick={() => inputRef.current.focus()}></button> */
}
