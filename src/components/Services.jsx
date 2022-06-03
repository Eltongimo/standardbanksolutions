import './Services.css'
import React from 'react'
import Card from './Card'



function Services() {  
    return (
        <div className='table-container'>
            <div className='header-container'>
                <div className='report-header'>
                     <Card service='Deposito' serviceDescription='Esta solução permite que os nossos clientes marquem a fila para o serviço de deposito estando em qualquer lugar assim que for a sua vez o sistema ira lhe alertar via mensagem de texto enviada directamente ao seu numero de celular'/>
                </div>
                <div className='report-header'>
                    <Card service='Atendimento Geral' 
                        serviceDescription='Esta solução permite que os nossos clientes marquem a fila para o serviço de deposito estando em qualquer lugar assim que for a sua vez o sistema ira lhe alertar via mensagem de texto enviada directamente ao seu numero de celular'
                    />
                </div>
            </div>
            
            <div className='rows-container'>
                
            </div>
        </div>
)}

export default Services