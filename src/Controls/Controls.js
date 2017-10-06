import React from 'react'
import styles from '../index.css';

const Controls = ({handleSearch}) =>{
return (
<div>
  <input type='text'
         placeholder='Search Districts'
         onChange={handleSearch} />
</div>
)
}

export default Controls;
