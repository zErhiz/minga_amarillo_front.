import React from 'react'

function Switch(props) {
  return (
    <>
       <h2 className="text-[#999999]">new</h2>
            <input
              className="mr-2 mt-[0.5rem] h-5.5 w-12 lg:h-4.5 lg:w-20 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5  before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:lg:-mt-[0.1175rem]  after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100  after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.9625rem] lg:checked:after:ml-[3.9625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={props.checked}
              onChange={props.onChange}
            />
            <h2 className="text-[#999999]">old</h2>
    </>
  )
}

export default Switch