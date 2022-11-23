import React, { useState } from 'react'
import Footer from '../../Components/Common/Footer'
import Header from '../../Components/Common/Header'
import TabOptions from '../../Components/Common/Taboptions'
import Delivery from '../../Components/Delivery'
import DiningOut from '../../Components/DiningOut'
import NightLife from '../../Components/NightLife/index.js'

const Homepage = () => {
    const [activetab,setActiveTab] = useState("Delivery")


  return (
    <div>
        <Header/>
        <TabOptions activetab={activetab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activetab)}
        <Footer/>
    </div>
  )
}
const getCorrectScreen =(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/> 
        case "NightLife" :
            return <NightLife/>
        default: 
        return <Delivery/>
    }
}
export default Homepage