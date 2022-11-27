import React from 'react'
import {BiNote} from 'react-icons/bi';

const Headerkeep = (props) => {
  return (
    <div className='header'>
      <h1><BiNote/> {props.name}</h1>
    </div>
  )
}

export default Headerkeep
