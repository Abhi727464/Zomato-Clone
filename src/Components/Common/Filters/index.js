import React from 'react'
import './filters.css'
import FilterItem from './FilterItem'

const Filters = ({filtersList}) => {
  return (
    <div className='filters'>
        {filtersList && filtersList.map((filter)=>{
            return <FilterItem filter={filter} key={filter.id}/>
        })}
    </div>
  )
}

export default Filters