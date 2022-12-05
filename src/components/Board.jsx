import './Board.css'
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Actividades from './Activividades'
import './Report.css'
import Productos from './Productos'
import MacroActividades from './MacroActividades'
import Reports from './Reports'
import Example from './Charts'

function Board(props){
    return (
        <section className='container'>
            <div className='board'>
                <Switch>
                    <Route to='/' >
                        <Example />
                    </Route>
                    <Route to='/productos' exact>
                        <Productos/>
                    </Route>
                    <Route to='/macroactividades' >
                        <MacroActividades/>
                    </Route>
                    <Route to='/actividades' >
                        <Actividades/>
                    </Route>
                    <Route to='relatorios' >
                        <Reports/>
                    </Route>
                </Switch>
            </div>
        </section>
    )
}

export default Board
        