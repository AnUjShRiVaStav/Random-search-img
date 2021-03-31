import React from "react";

function Api (props){

    const img = `https://source.unsplash.com/600x400?${props.name}`;


    return (
        <div>

       <img 
       src = {img}
       alt = 'photo' />

        </div>
    )
}
export default Api;