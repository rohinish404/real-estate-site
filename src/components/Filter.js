import React, { useContext } from 'react'
import { useState } from 'react';
import { FilterContext } from '../Contexts/FilterContext';

function Filter() {
    const {value1,value2,value3,setValue4,setValue1,setValue2,setValue3,setSubmit} = useContext(FilterContext)
    

    //location state
    const handleChange1 = (e) => {
        setSubmit(false)
        setValue1(e.target.value);
    };
      
      //price state
    const handleChange2 = (e) => {
        setSubmit(false)
        setValue2(e.target.value);
    };


      //Property state
    const handleChange3 = (e) => {
        setSubmit(false)
        setValue3(e.target.value);
    };


      //state for input date
      
    const inputHandler=(e)=>{
        setSubmit(false)
        setValue4(e.target.value)
    }
     // on clicking button

    const submitHandler=()=>{
        setSubmit((prev)=>!prev)
    }


  return (
    <div className='bg-white flex items-center justify-around mt-8 rounded-lg py-3'>
        <div>
            <h1 className='text-gray-400'>Location</h1>
            <select value={value1} onChange={handleChange1}> 
                    <option value="Location">Location</option>
                    <option value="New York">New York</option>
                    <option value="Seattle">Seattle</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Chicago">Chicago</option>
            </select>        
        </div>  
        <div>
            <h1 className='text-gray-400'>When</h1>
            <input onChange={inputHandler} type="date"></input>
        </div>
        <div>
            <h1 className='text-gray-400'>Price</h1>
            <select value={value2} onChange={handleChange2}> 
                    <option value="Price">Price</option>
                    <option value="$500-$2500">$500-$2500</option>
                    <option value="$2500-$5000">$2500-$5000</option>
                    <option value="$5000-$7500">$5000-$7500</option>
                    <option value="$7500-$10000">$7500-$10000</option>
            </select>        
        </div>
        <div>
            <h1 className='text-gray-400'>Property Type</h1>
            <select value={value3} onChange={handleChange3}> 
                    <option value="Property Type">Property Type</option>
                    <option value="Houses">Houses</option>
                    <option value="Apartments">Apartments</option>
            </select>        
        </div>
        <button onClick={()=>submitHandler()} className='border-2 border-gray-300 rounded-lg px-5 py-2 text-white bg-purple-700' type='submit'>Search</button>
    </div>
  )
}

export default Filter
