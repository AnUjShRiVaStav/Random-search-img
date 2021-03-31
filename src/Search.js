import React from "react";
import {useState} from "react";
import Api from "./Api";
import './Search.css';

function Search() {

   const[img, setImg] = useState('')
   const InputEvent = ( (e) => {
      const data = e.target.value;
      // console.log(e)
      setImg(data);
   })
  
  
  
    return(
        <div className='random'>
          <h1>Random Images</h1>

             <input className='input' type="text" placeholder="Explore your Mind Here"  onChange ={InputEvent} value={img} /> 

       {img === "" ? null : <Api name={img} />}


        </div>
    )
}

export default Search;