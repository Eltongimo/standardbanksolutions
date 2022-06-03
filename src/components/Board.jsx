import './Board.css'
import Report from './Services'
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homecarousel from './Homecarousel'

function Board(props) {
    return (
        <section className='container'>
            <div className='board'>
                    <Switch>

                       <Route path='/report' exact>
                            <Report/>
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
        