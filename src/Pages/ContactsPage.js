import React from "react";
import phone_img from "../assest/phone_forwarded_24px_outlined.jpg"
import chat from "../assest/noun_chat_2782 1.png"
import { Footer } from "./Footer";
export function ContactsPage() {
    return (
        <div>
            <div className="about">
                <p className="fscilson">Grt in touch</p>
                <p className="contact_lorem">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.</p>
            </div>
       <div className="contact_d_f">
       <div className="contact-card">
                    <img className="phone_img" src={phone_img} alt="" />
                    <p className="call">Call us</p>
                    <p className="contact_lorem_2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.



</p>
<p className="call">+233551876193</p>
            </div>
            <div className="contact-card_1">
                    <img className="phone_img" src={chat} alt="" />
                    <p className="call">Call us</p>
                    <p className="contact_lorem_2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.



</p>
<p className="call">+233551876193</p>
            </div>
       </div>
       <Footer/>
        </div>
    )
}