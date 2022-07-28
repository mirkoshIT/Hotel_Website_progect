import React from "react";
import "../Components/Main.css"
import hngimg from "../assest/1_N6Gfu_nw0v-oljFOlj4nYA 1.png"
import instagram from "../assest/noun_insta_3323512.svg"
import bird from "../assest/noun_Bird_656030.png"
export function Footer(){
    return(
        <div>
            <footer>
                <div className="sec_left_1">
                    <img className="hngimg" src={hngimg} alt="" />
                </div>
                <div className="sec_center_1">
                    <img src={instagram} alt="" />
                    <img src={bird} alt="" />
                </div>
                <div className="sec_right_1">
                    <p className="contact">Contact Us</p>
                    <p className="reviews">Reviews</p>
                    <p className="rates">Rates </p>
                </div>
                <div className="sec_right_2">
                <p className="contact">Contact Us</p>
                    <p className="reviews">Reviews</p>
                    <p className="rates">Rates </p>
                </div>

            </footer>
        </div>
    )
}