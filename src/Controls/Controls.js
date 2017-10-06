import React from 'react'
import styles from '../index.css';

const Controls = ({handleSearch}) =>{
return (
<div>
  <input type='text'
         placeholder='Search by District'
         onChange={handleSearch} />
</div>
)
}

export default Controls;
