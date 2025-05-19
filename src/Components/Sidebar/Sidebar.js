import React, { useState } from "react";
import "./Sidebar.css"

let Sidebar = (props) =>{
    const { isBurgerMenuClicked } = props;

    const [isSideBar, setIsSideBar] = useState(false);

    const handleMouseOverSidebar = (event) =>{
        setIsSideBar(true);
    }

    const handleMouseOutSidebar = (event) =>{
        setIsSideBar(false);
    }


    return(
        <div className="side-bar" style={{width: (isSideBar || isBurgerMenuClicked) ? "250px" : "66px"}} onMouseOver={handleMouseOverSidebar} onMouseOut={handleMouseOutSidebar}>
            <div className="sidebar-items active-item">
                <span className="material-symbols-outlined hover active">lightbulb</span>  
                <span className="sidebar-text">Notes</span>          
            </div>
            <div className="sidebar-items">
                <span className="material-symbols-outlined hover">notifications</span>
                <span className="sidebar-text">Reminders</span>                      
            </div>
            <div className="sidebar-items">
                <span className="material-symbols-outlined hover">edit</span>
                <span className="sidebar-text">Edit Labels</span>          
            </div>
            <div className="sidebar-items">
                <span className="material-symbols-outlined hover">archive</span>
                <span className="sidebar-text">Archive</span>          
            </div>
            <div className="sidebar-items">
                <span className="material-symbols-outlined hover">delete</span>        
                <span className="sidebar-text">Trash</span>              
            </div>
        </div>
    )
}

export default Sidebar;