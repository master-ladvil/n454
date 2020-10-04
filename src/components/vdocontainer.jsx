import React from 'react'
import mainvdo from '../video/mainvdo.mp4'




const Vdocontainer = () => {
    return(        
    <video loop autoPlay muted>
        <source style ={{position:"fixed"}}src = {mainvdo} type = "video/mp4"/>
      </video>      
   )
}

export default Vdocontainer