import React from 'react'
import '../CSS/SideNavBar.css'


export default function SideNavBar() {
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <ul className="nav-list">
                        <li className="nav-item">Half</li>
                        <li className="nav-item">Joint Spl Mix Mandi</li>
                        <li className="nav-item">Veg Mandi</li>
                        <li className="nav-item">Addons</li>
                        <li className="nav-item">Non-Veg Starters</li>
                        <li className="nav-item">Veg-Starters</li>
                        <li className="nav-item">Jumbo</li>
                        <li className="nav-item">Full</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
