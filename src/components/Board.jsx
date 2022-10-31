import './Board.css'
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Actividades from './Activividades'
import './Report.css'
import Productos from './Productos'
import MacroActividades from './MacroActividades'

function Board(props){
    return (
        <section className='container'>
            <div className='board'>
                <Switch>
                    <Route to='/productos'>
                        <Productos/>
                    </Route>
                    <Route to='/macroactividades'>
                        <MacroActividades/>
                    </Route>
                    <Route to='/actividades'>
                        <Actividades/>
                    </Route>
                    <Route to='relatorios'>
                    </Route>
                </Switch>
            </div>
        </section>
    )
}

export default Board
        