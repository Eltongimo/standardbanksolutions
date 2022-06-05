import React from 'react'
import './Clients.css'
import Modal from 'react-modal'
import {useState} from 'react'
import axios from 'axios'

const baseUrl = "https://localhost:3001/clients/"


function ClientsRow(props){

    const [client,setClient] = useState(props)

    const [shoModal, setShowModal] = useState(false)
    
    const handleModal = (event) => {
        setShowModal(true)
    }

    const handleNameChange = (event) => {
        setClient({
                name: event.target.value,
                id: client.id,
                status:client.status,
                account: client.account
        })
    }

    const handleStatusChange = (event) => {
        setClient({
            name: client.name,
            id: client.id,
            status:event.target.value,
            account: client.account
        })
    }

    const handleIdChange = (event) =>{
        setClient({
            name: client.name,
            id: event.target.value,
            status:client.status,
            account: client.account
        })
    }

    const handleTypeChange = (event) => {
        setClient({
            name: client.name,
            id: client.id,
            status:client.status,
            account: event.target.value
        })
    }

    const handleSubmit = (event) => {

        alert(`falha na ligação ligar ao API, dados não actualizados`)

       /* axios.put(`${baseUrl}/${client.id}`, client ).then( (response => setClient(response.data)))
*/
    }

    return (
        <div className='rows-report'>
            <div id={props.id} className='colmns-report'>
                <ul >
                    <li>
                        {props.name}
                    </li>
                    <li>
                        {props.id}
                    </li>
                    <li>
                        {props.account}
                    </li>
                    <li>
                        {props.status}
                    </li>
                    <li>
                        <i className="bi bi-pen" style={
                            {
                                color: 'green',
                                fontSize: '1.3rem',
                            }
                        } onClick={handleModal}> {}</i>

                        <Modal  className='modal-container' isOpen={shoModal}
                              onRequestClose={() => setShowModal(false)}
                              style={
                                        {
                                            overlay:{
                                                backgroundColor: 'rgb(204, 204, 204,0.9)',
                                            },                                   
                                        }
                                    }>

                            <form className='form-container'>
                      
                                <div className='form-header'>
                                    <div>
                                        Formulario para actualizar clientes
                                    </div>
                                </div>

                                <div className="form-body">
                                    <label> 
                                        <div className='txt'>
                                            Nome
                                        </div> 
                                        <div className="subject">
                                            <input type="text" value={client.name} onChange={handleNameChange} placeholder="Por favor insira o seu nome completo" />
                                        </div>
                                    </label>
                                    
                                    <label> 
                                        <div className='txt'>
                                            BI
                                        </div> 
                                        <div className="subject">
                                            <input type="text" onChange={handleIdChange} value={client.id}  placeholder="Por favor insira o numero do seu BI" required/>
                                        </div>
                                    </label>
                                    
                                    <label> 
                                        <div className='txt'>
                                            Tipo de Conta
                                        </div> 
                                        <div className="subject">
                                            <input type="text" onChange={handleTypeChange} value={client.account} name="name" placeholder="Por favor insira tipo de conta" required/>
                                        </div>
                                    </label>

                                    
                                    <label> 
                                        <div className='txt'>
                                            Estado da conta
                                        </div> 
                                        <div className="subject">
                                            <input type="text" onChange={handleStatusChange} value={client.status} name="name" placeholder="Por favor insira o estado da conta" required/>
                                        </div>
                                    </label>

                                </div>
                        
                                <div className='modal-form-footer'>
                                    <div className='footer-btn'>
                                        <button className='btn btn-success' onClick= {handleSubmit}>Editar</button>
                                    </div>
                                </div>
                        </form>
                        </Modal>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ClientsRow