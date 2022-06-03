import './Card.css'
import React from 'react'

function Card(props){
    return (
        <div className='sticky-notes'>
            <div className='note-header'>
                {props.service}
            </div>        
            <div className='content'>
                {props.serviceDescription}
            </div>
            <div className='content-button'>
                Botão de Acção
           </div>
        </div>
    )
}
export default Card
   