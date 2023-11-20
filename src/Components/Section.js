import React from "react";



const Section = (props) =>{
    return(
        <div class="section">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

export default Section;