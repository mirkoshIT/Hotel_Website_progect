import React from "react";
import "../Components/Main.css"
import card_img from "../assest/room1.svg"
import room1 from "../assest/room1.svg"
import room2 from "../assest/room2.svg"
import card_stars from "../assest/star_24px.png" 
import { Footer } from "./Footer";
export function Rooms(){
    return(
        <div className="Rooms">
            <div className="about">
                <p className="fscilson">Rooma</p>
            </div>
            <div className="big_card">
                <div className="card_left">
                    <img className="card_img" src={card_img} alt="" />
                </div>
                <div className="card_right">
                  <div className="card_fl">
                  <p className="deluxe">Deluxe Room Only</p>
                    <p className="card_lorem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.



</p>
                  </div>
                  <div className="card_d_f">
                    <div className="card_stars_df">
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    </div>
                    <button className="card_btn">
                    Book Room 
                    </button>
                </div>
                </div>
                
            </div>
            <div className="big_card">
                <div className="card_left">
                    <img className="card_img" src={room1} alt="" />
                </div>
                <div className="card_right">
                  <div className="card_fl">
                  <p className="deluxe">Deluxe Room Only</p>
                    <p className="card_lorem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.



</p>
                  </div>
                  <div className="card_d_f">
                    <div className="card_stars_df">
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    </div>
                    <button className="card_btn">
                    Book Room 
                    </button>
                </div>
                </div>
                
            </div>
            <div className="big_card">
                <div className="card_left">
                    <img className="card_img" src={room2} alt="" />
                </div>
                <div className="card_right">
                  <div className="card_fl">
                  <p className="deluxe">Deluxe Room Only</p>
                    <p className="card_lorem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.



</p>
                  </div>
                  <div className="card_d_f">
                    <div className="card_stars_df">
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    <img src={card_stars} alt="" />
                    </div>
                    <button className="card_btn">
                    Book Room 
                    </button>
                </div>
                </div>
                
            </div>
          <Footer/>
        </div>
    )
}