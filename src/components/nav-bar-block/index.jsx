import React from "react";
import './style.scss';
import { NavLink } from "react-router-dom";


const NavBarBlock = () => {
    return <div className="G-navbar-block">
        <div className="G-flex">
            <div className="menu-list">
                <ul>
                    <li>
                        <NavLink to={'/'}>Դպրոց</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/teachers'}>Ուսուցիչ</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/people'}>Աշակերտ</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default NavBarBlock