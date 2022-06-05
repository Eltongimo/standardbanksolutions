import './Card.css'
import React from 'react'
import Modal from 'react-modal'
import {useState} from 'react'

function Card(props){
    
    const [showModalForm, setShowModalForm] = useState({
        modal: false,
        name: '',
        id: '',
        number: '',
        service: '',
        branch: ''
    })

    const [sucessModal, setSucessModal] =useState(false)
    
    const handleNameChange = (event) => {
        setShowModalForm({
            name: event.target.value,
            id: showModalForm.id,
            number: showModalForm.number,
            service: showModalForm.service,
            branch: showModalForm.branch,
            modal: showModalForm.modal
        })
    }

    const handleIdChange = (event) => {
        setShowModalForm({
            name: showModalForm.name,
            id: event.target.value,
            number: showModalForm.number,
            service: showModalForm.service,
            branch: showModalForm.branch,
            modal: showModalForm.modal
        })
    }

    const handleServiceChange = (event) => {
     
        setShowModalForm({
            name: showModalForm.name,
            id: showModalForm.id,
            number: showModalForm.number,
            service: event.target.value,
            branch: showModalForm.branch,
            modal: showModalForm.modal
        })
        console.log(showModalForm)
    }

    
    const handleBranchChange = (event) => {
        console.log(event.target.value)
        setShowModalForm({
            name: showModalForm.name,
            id: showModalForm.id,
            number: showModalForm.number,
            service: showModalForm.service,
            branch: event.target.value,
            modal: showModalForm.modal
        })
        console.log(showModalForm)
    }

    const handleNumberChange = (event) => {
        setShowModalForm({
            name: showModalForm.name,
            id: showModalForm.id,
            number: event.target.value,
            service: showModalForm.service,
            branch: showModalForm.branch,
            modal: showModalForm.modal
        })
    }

    const handleSubmit = (event) => {
        setShowModalForm({
            name: showModalForm.name,
            id: showModalForm.id,
            number: showModalForm.number,
            service: showModalForm.service,
            branch: showModalForm.branch,
            modal: false
        })
      
        setSucessModal(true)

        /*
        axios.post('https://localhost:3001/clients',showModalForm)
        .then( res => {
            console.log(res.data)
            console.log(res)
        })

        */

    }

    return (
        <div className='sticky-notes'>

            <div className='note-header'>
                {props.service}
            </div>        
            <div className='content'>
                {props.serviceDescription}
            </div>
            <div className='content-button'>
                <button className='btn btn-outline-dark'
                 onClick={() => setShowModalForm({modal:true, 
                                                  name: showModalForm.name, 
                                                  id: showModalForm.id,
                                                  number: showModalForm.number,
                                                  service: showModalForm.service,
                                                  branch: showModalForm.branch             
                                                  })}>
                    Solicitar Senha para a fila
                </button>

                <Modal  className='modal-container' isOpen={showModalForm.modal}
                              onRequestClose={() => setShowModalForm({
                                                    modal:false,
                                                    name: '', 
                                                    id: '',
                                                    number: '',
                                                    service: '',
                                                    branch: ''
                                                    })}
                              style={
                                    {
                                        overlay:{
                                            backgroundColor: 'rgb(204, 204, 204,0.9)',
                                        },                                   
                                    } 
                            }
                        >
                        <form className='form-container'>
                      
                            <div className='form-header'>
                                <div>
                                    Formulario de preenchimento de dados
                                </div>
                            </div>

                            <div className="form-body">
                                <label> 
                                    <div className='txt'>
                                        Nome
                                    </div> 
                                    <div className="subject">
                                        <input type="text" value={showModalForm.name} onChange={handleNameChange} placeholder="Por favor insira o seu nome completo" />
                                    </div>
                                </label>
                                
                                <label> 
                                    <div className='txt'>
                                        BI
                                    </div> 
                                    <div className="subject">
                                        <input type="text" onChange={handleIdChange} value={showModalForm.id}  placeholder="Por favor insira o numero do seu BI" required/>
                                    </div>
                                </label>
                                
                                <label> 
                                    <div className='txt'>
                                        Numero
                                    </div> 
                                    <div className="subject">
                                        <input type="text" onChange={handleNumberChange}name="name" placeholder="Por favor insira o numero do seu celular" required/>
                                    </div>
                                </label>

                                <label> 
                                    <div className='txt-select'>
                                        Agencia 
                                    </div> 
    
                                    <select value={showModalForm.branch} onChange={handleBranchChange}>
                                        <option>Agencia 1</option>
                                        <option>Agencia 2</option>
                                        <option>Agencia 3</option>
                                        <option>Agencia 4</option>
                                    </select>

                                </label>
                                
                                <label> 
                                    <div className='txt-select'>
                                        Serviços 
                                    </div> 
    
                                    <select value={showModalForm.service} onChange={handleServiceChange}>
                                        <option>Deposito / Levantamento</option>
                                        <option>Atendimento Geral</option>
                                    </select>

                                </label>

                            </div>
                    
                            <div className='modal-form-footer'>
                                <div className='footer-btn'>
                                    <button type='submit'className='btn btn-success' onClick= {handleSubmit}>Submeter</button>
                                </div>
                            </div>
                        </form>
                </Modal>

                <div className='sucess-container'>
                    <Modal  className='modal-container-sucess' isOpen={sucessModal} 
                                                onRequestClose={() => setSucessModal(false) }
                                                style={{overlay:{backgroundColor: 'rgb(204, 204, 204,0.9)'}}}>
                            <div className='sucess-header'>
                                    Sucesso
                            </div>
                            <div className='sucess-body'>
                                    <div className='field-content'>
                                        <div className='body-field1'>
                                            Nome
                                        </div>
                                        <div className='body-field2'>
                                            {showModalForm.name}
                                        </div>
                                    </div>
                                    
                                    <div className='field-content'>
                                        
                                        <div className='body-field1'>
                                            BI
                                        </div>
                                        <div className='body-field2'>
                                            {showModalForm.id} 
                                        </div>
                                    </div>

                                    <div className='field-content'>
                                        <div className='body-field1'>
                                            Numero
                                        </div>
                                        <div className='body-field2'>
                                            {showModalForm.number} 
                                        </div>
                                    </div>
                                    
                                    <div className='field-content'>
                                        <div className='body-field1'>
                                            Agencia
                                        </div>
                                        
                                        <div className='body-field2'>
                                            {showModalForm.branch} 
                                        </div>
                                    </div>
                                    
                                    <div className='field-content'>
                                        <div className='body-field1'>
                                            Numero da Senha
                                        </div>
                                        <div className='body-field2'>
                                            {Math.floor(Math.random() * 100 )}
                                        </div>
                                    </div>
                                    
                            </div>

                            <div className='sucess-footer'>
                                <button type='submit'className='btn btn-danger' onClick= { ()=> setSucessModal(false)}>Fechar</button>
                            </div>
                    </Modal>
                </div>
            </div>
        </div>
   )
}
export default Card
   