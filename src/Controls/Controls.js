import React from 'react'

const Controls = ({handleSearch}) =>{
return(
<div>
  <input type='text'
         placeholder='Search Districts'
         onChange={handleSearch} />
</div>
)
}


export default Controls;
