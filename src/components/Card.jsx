import './Card.css'
import React from 'react'
import Modal from 'react-modal'
import {useForm} from 'react-hook-form'

function Card(props){
    
    const [showModalForm, setShowModalForm] = React.useState(false)
    const {register, handleSubmit} = useForm() 
    
    const onSubmit = (data) => {
        console.log(data)
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
                <button className='request-button' onClick={() => setShowModalForm(true)}>
                    solicitar senha
                </button>

                <Modal  className='modal-container' isOpen={showModalForm}
                              onRequestClose={() => setShowModalForm(false)}
                              style={
                                    {
                                        overlay:{
                                            backgroundColor: 'rgb(204, 204, 204,0.9)',
                                        },                                   
                                    } 
                            }
                        >
                        <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                      
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
                                        <input type="text" name="name" placeholder="Por favor insira o seu nome completo" />
                                    </div>
                                </label>
                                
                                <label> 
                                    <div className='txt'>
                                        BI
                                    </div> 
                                    <div className="subject">
                                        <input type="text" name="name" placeholder="Por favor insira o numero do seu BI" />
                                    </div>
                                </label>
                                
                                <label> 
                                    <div className='txt'>
                                        Numero
                                    </div> 
                                    <div className="subject">
                                        <input type="text" name="name" placeholder="Por favor insira o numero do seu celular" />
                                    </div>
                                </label>
                                
                                
                                <label> 
                                    <div className='txt-select'>
                                        Agencia 
                                    </div> 
    
                                    <select>
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
    
                                    <select>
                                        <option>Deposito / Levantamento</option>
                                        <option>Atendimento Geral</option>
                                    </select>

                                </label>

                            </div>
                    
                            <div className='modal-form-footer'>
                                <div className='footer-btn'>
                                    <button className='btn btn-success' onClick= {() => setShowModalForm(false)}>Submit</button>
                                </div>
                            </div>
                        </form>
                    
                </Modal>
            </div>

        </div>
    )
}
export default Card
   