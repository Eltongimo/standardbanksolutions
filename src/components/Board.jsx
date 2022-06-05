import './Board.css'
import Report from './Services'
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homecarousel from './Homecarousel'
import Clients from './Clients'
import './Report.css'
import Services from './Services'

function Board(props) {
    return (
        <section className='container'>
            <div className='board'>
                    <Switch>
                       <Route path='/servicos' exact>
                            <Services/>
                        </Route>                        

                        <Route path='/clients'>
                            <Clients/>
                        </Route>

                        <Route path='' exact>
                            <Homecarousel/>
                        </Route> 

                    </Switch>
            </div>
        </section>

    )
}

export default Board
        