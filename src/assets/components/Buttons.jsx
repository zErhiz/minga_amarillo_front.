import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function buttons(props) {
  return (

    <div>   <button
    type={props.type}
    className={props.className}
    onClick={props.onClick}
  >
    {props.children}
  </button>
    </div>

  )
}
