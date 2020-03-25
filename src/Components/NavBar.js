import React from 'react'
import { NavLink } from 'react-router-dom'



export const NavBar = ({ activePage }) => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className='mr-5'>App</div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to='/'
                    exact>
                    Home

                </NavLink>
            </li >
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to={`/planets/page/:${activePage}`}>Planets
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to='/persons'>Persons
                </NavLink>
            </li>

        </ul>
    </nav>
)