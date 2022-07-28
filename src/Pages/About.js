import React from "react";
import "../Components/Main.css"
import bar from "../assest/bar.png"
import { Footer } from "../Pages/Footer.js"
import  concierge from "../assest/concierge.svg"
import coferce from "../assest/conference.svg"
import loundary from "../assest/laundry.svg"
import reception from "../assest/reception.png"
import gym from "../assest/gym.svg" 
import restarant from '../assest/restaurant.svg'
import parkimg from "../assest/parking.svg"
export function About(){
    return(
        <div className="Facilities">

        <div className="about">
            <p className="fscilson">Facilities</p>
        </div>
        <p className="overview">Overview of Facilities and Service</p>
        <div className="section7">
        <div className="card">
            <img src={bar} alt="" />
            <img src={concierge} alt="" />
            <img src={coferce} alt="" />

            <img src={loundary} alt="" />
            <img src={reception} alt="" />
            <img src={gym} alt="" />
        </div>
        </div>
        <div className="section8">
            <div className="card1">
            <img src={restarant} alt="" />
            <img src={parkimg} alt="" />
            </div>
        </div>
        <Footer/>
        </div>

    )
}