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
                        <Link to='/productos'>
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link to='/macroactividades'>
                            Macro Actividades                        
                        </Link>
                    </li>
                    <li>
                    <Link to="/actividades" exact="true">
                            Actividades 
                        </Link>
                    </li>

                    <li>
                        <Link to="/relatorios" exact="true">
                            Relatorios
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu