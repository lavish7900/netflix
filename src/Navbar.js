import React, { useState,useEffect } from 'react'
import "./Navbar.css"
function Navbar() {

    const [scroll,Setscroll]=useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{ 
            if(window.scrollY >100){
            Setscroll(true);
        }else Setscroll(false);
    
    } )
        return ()=>{
            window.addEventListener("scroll")
        }
            
        
    }, [])

    return (
        <div className= {`navbar ${scroll && "show" }`} >

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" 
        alt=" Netflix logo" />

        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="smiley" />

            
        </div>
    )
}

export default Navbar
