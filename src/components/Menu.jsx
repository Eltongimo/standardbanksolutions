import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <div className='navigation'>
            <nav >
                <ul>
                    <li>
                        <Link to="/" exact="true"> 
                            Inicio
                        </Link></li>
                    <li>
                        <Link to="/projectos" exact="true">
                            Projectos   
                        </Link>
                    </li>

                    <li>
                    <Link to="/actividades" exact="true">
                            Actividades 
                        </Link>
                    </li>

                    <li>
                        <Link to="/relatorios">
                            Relatorios
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu