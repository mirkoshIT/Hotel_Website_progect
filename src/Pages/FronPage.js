import React from "react";
import coking from "../assest/full__mg_4760_1426504068 1.svg"
import bad from "../assest/full__mg_4841_1426503091 1bad.svg"
import { Footer } from "./Footer";

export function FronPage(){
    return(
        <div>
            <div className="section1">
              <div className="z-index1">
                <p className="welcome">WELCOME TO</p>
                <p className="hing">HNG HOTEL</p>
                <p className="comfort">Your comfort, our priority</p>
              </div>
            </div>
            <p className="hng">HNG HOTEL</p>

            <div className="section2">
                <div className="sec_left">
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
</p>
                </div>
                <div className="sec_right">
                  <img className="coking" src={coking} alt="" />
                  <img src={bad} alt="" />
                  <button className="booon">More Photos</button>
                </div>
            </div>
            <div className="section3">
              <p className="pbook">Book A Room</p>
              <p className="p_lorem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.</p>
            </div>
          <Footer/>
        </div>
    )
}