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
                        <Link to="/servicos" exact="true">
                            Serviços   
                        </Link>
                    </li>

                    <li>
                    <Link to="/clients" exact="true">
                            Clientes 
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu