import React from 'react'

 function index({type,placeholder,value,name,onchange}) {
  return (
    <div>
      <input type={type} value={value} name={name} onChange={onchange} placeholder={placeholder} className='border border-1 w-full px-3 py-2 rounded-none' >
      </input>
    </div>
  )
}

export default index