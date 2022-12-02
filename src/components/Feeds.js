import React, { useState,useContext } from 'react'
import data from '../data'
import Feed from './Feed'
import { FilterContext } from '../Contexts/FilterContext';
function Feeds() {
    const [items,setItems]=useState(data);
    const {value1,value2,value3,value4,submit} = useContext(FilterContext)
    console.log(value4);
    const updatedItems = data.filter(function(currentItem){
        return (currentItem.add===value1 && currentItem.priceRange === value2 && currentItem.type === value3 && currentItem.date === value4)
    })
    
  return (
    <div className='grid grid-cols-4 mt-10 justify-center items-center'>
        
        {submit ? updatedItems.map(function(data1,index){
          return(
         <Feed key={index} data1={data1}/>
          );
      }):items.map(function(data1,index){
        return(
       <Feed key={index} data1={data1}/>
        );
    })}
    </div>
  )
}

export default Feeds
