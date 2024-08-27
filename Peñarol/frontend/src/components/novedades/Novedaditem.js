import React from "react";

const Novedaditem = (props)=>{
    const{ title, subtitle, imagen, body}= props;
    return (
    <div className="novedades">
        <h1>{title}</h1> 
        <h2>{subtitle}</h2>
        
        <img src={imagen} alt=""/>
        <div dangerouslySetInnerHTML={{__html: body}} />
       <hr />
        
       </div>
    );

};
export default Novedaditem;