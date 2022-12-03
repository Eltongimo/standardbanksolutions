import './Board.css'
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Actividades from './Activividades'
import './Report.css'
import Productos from './Productos'
import MacroActividades from './MacroActividades'
import Reports from './Reports'

function Board(props){
    return (
        <section className='container'>
            <div className='board'>
                <Switch>
                    <Route to='/productos'>
                        <Productos/>
                    </Route>
                    <Route to='/macroactividades' exact>
                        <MacroActividades/>
                    </Route>
                    <Route to='/actividades' exact>
                        <Actividades/>
                    </Route>
                    <Route to='relatorios' exact>
                        <Reports/>
                    </Route>
                </Switch>
            </div>
        </section>
    )
}

export default Board
        