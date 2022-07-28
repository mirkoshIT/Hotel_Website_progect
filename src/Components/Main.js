import React from "react";
import { BrowserRouter as Router,Route,NavLink,Routes} from "react-router-dom";
import { About } from "../Pages/About";
import { ContactsPage } from "../Pages/ContactsPage";
import { FronPage } from '../Pages/FronPage'
import "../Components/Main.css"
import { Rooms } from "../Pages/Rooms";
export function Main(){
    return(
         <Router>
       <div className="main">
        <nav>
                <NavLink className="nav_hng" to="/">HNG HOTEL</NavLink>
                <div className="DF">
                <NavLink className="navin" to="/" activeclassname="active">Home</NavLink>

                <NavLink className="navin" to="about">Faciliteis</NavLink>
                <NavLink className="navin" to="rooms ">Rooms</NavLink>
                <NavLink className="navin" to="contactsPage">Contact Us</NavLink>
                </div>

                </nav>


                <div className="rezult">
                    <Routes>
                        <Route exact path="/" element={<FronPage/>}/>
                        <Route path="About" element={<About/>}/>
                        <Route path="Rooms" element={<Rooms/>}/>
                        <Route path="ContactsPage" element={<ContactsPage/>}/>

                    </Routes>
                </div>
            
      
        </div>
        </Router>
    )
}