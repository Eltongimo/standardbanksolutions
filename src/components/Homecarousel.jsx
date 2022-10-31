import React from 'react'
import {useState} from 'react'
import Modal from 'react-modal'
import './Homecarousel.css'


function Card(props){
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='sticky-notes'>
        
        <div className='note-header'>
            {props.header}
        </div>        
        <div className='content'>
            {props.shortdescription}
        </div>
        <div className='content-button'>
            <button className='btn btn-outline-dark'
             onClick={() =>setShowInfo(true)}>
                Ver mais
            </button>

       <Modal  className='modal-container' isOpen={showInfo}
                          onRequestClose={() => setShowInfo(false)}
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
                             {props.header}
                        </div>

                        <div className="form-body">
                            {props.description}
                        </div>
                
                        <div className='modal-form-footer'>
                    </div>
                    </form>
            </Modal>
        </div>
    </div>
    )
}


function Homecarousel(){
    
    return (<div>
                {Card({
                     header: " Projecto Mais Pemba",
                        shortdescription: "O projecto Mais Pemba e uma iniciativa do...",
                        description: "Lorem Ipsum has been the industry s standard dummy "
                    
                    }) }
            </div> 
    )
}

export default Homecarousel
