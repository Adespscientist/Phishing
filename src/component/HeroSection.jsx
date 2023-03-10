import React from 'react'
import Ring from '../assets/custom/rings.json'
import fixed from '../assets/images/fixed.svg'
import {useLottie} from "lottie-react"
import lottie from 'lottie-web'
function HeroSection() {
    const options={
        animationData : Ring,
        loop: true
    }
    const animationData= require('../assets/custom/normal.json')
   

const container = document.getElementById('lottie-container');
const animation = lottie.loadAnimation({
  container: container,
  renderer: 'svg',
  loop: true,
//   autoplay: true,
  animationData: animationData
});


    const {View} = useLottie(options)
    
  return (
    <div className="md:flex justify-center items-center  herosection text-white">
        <div className="flex-[.6] font-bold text-[50px] md:text-[75px] herosection__left"><span className="text-red-400">Don't be a Victim </span>of Phishing and Fraud  <div style={{width:100, height:100}} id="lottie-container"></div></div>
        <div className="herosection__right relative ">
       
            <div className="flex justify-center container__right ">
            <div style={{ width: 600, height: 600 }}>{View}</div>
        <img className='absolute top-0 ' src={fixed} alt="HeroImage" style={{width:'100%', height:'100%'}}/>
            </div>
       
        </div>
    </div>
  )
}

export default HeroSection