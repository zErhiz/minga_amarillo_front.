import React from 'react'

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
