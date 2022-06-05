import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ClientsRow from './ClientsRow'
const baseUrl = 'http://localhost:3001/clients'

function GetData(){
    const [rows, setRows] = useState([])

    useEffect(() => axios.get(baseUrl)
                    .then((response) => { setRows(response.data)  
                    } )
    ,[])

    return (
                rows.map((item,index) => <ClientsRow 
                                 name = {item.name} 
                                 id = {item.id}
                                 account = {item.account}
                                 status = {item.status}
                                 key={index}
                            />
                )
            )
}

function Clients() {  
    return (
        <div className='table-container'>
            <div className='header-container'>
                <div className='report-header'>Nome</div>
                <div className='report-header'>BI</div>
                <div className='report-header'>Tipo de Conta</div>
                <div className='report-header'>Estado</div>
                <div className='report-header'>Operaçoes</div>
            </div>
            
            <div className='rows-container'>
                {GetData()}
            </div>
        </div>
)}

export default Clients