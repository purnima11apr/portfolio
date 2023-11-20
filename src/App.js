import React from "react";


import Navbar from "./Components/Navbar";
import "./style.css"
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import sectionData from "./datas/sectiondata";
import Footer from "./Components/Footer";



const App = () =>{
    return(
    <div>
       <Navbar/>
       <AboutMe/>
       { 
              sectionData.map((item)=>(
                    <Section  
                    title= {item.title}
                     desc= {item.des}
                    />
              ))

             }

             <Footer/>
    </div>
    )
}

export default App;