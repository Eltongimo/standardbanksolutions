import React, { useState } from 'react'
import './TaskRow.css'

function TaskRow(props){    

    const [rows, setRows ] = useState([])
    
    return (

        rows.map((item,index) => {
            <div className='rows-report'>
            <div className='colmns-report'>
                <ul >
                    <li>
                        {item.Name}
                    </li>
                    <li>
                        {item.Area}
                    </li>
                    <li>
                        {item.status}
                    </li>
                </ul>
            </div>
        </div>
        })
    )
}
export default TaskRow