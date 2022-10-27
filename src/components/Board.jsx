import './Board.css'
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homecarousel from './Homecarousel'
import './Report.css'

function Board(props) {
    return (
        <section className='container'>
            <div className='board'>
                    <Switch>
                        <Route path='' exact>
                            <Homecarousel/>
                        </Route> 

                    </Switch>
            </div>
        </section>

    )
}

export default Board
        