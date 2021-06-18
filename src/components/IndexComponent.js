import React from "react"
const { default: UsedBy } = require("./UsedBy")
const { default: Collage } = require("./Collage")
const { default: Footer } = require("./Footer")
const { default: Header } = require("./Header")
const { default: PhoneBlock } = require("./PhoneBlock")



require( '../style.scss')

const IndexComponent = ()=>{
   
    return (
        <div className='hero-container'>
          <Header/>
          <div className='hero-media'>
              <Collage/>
              <PhoneBlock/>
          </div>
          <UsedBy/>
       <Footer/>
        </div>
    )
}

export default IndexComponent