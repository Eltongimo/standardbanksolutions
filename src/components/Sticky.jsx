import React, { useState } from 'react'
import './Sticky.css'
import Modal from 'react-modal'
import {useForm} from 'react-hook-form'

function getTaskElements(elements, leftArrow, rightArrow){
    let result = []
    for (let element in elements){
        result.push(
            <div className='icon-container'>
                <div className='taskDescription'>
                    {elements[element]}
                </div>
                
                <div className='leftArrow'>
                    <i className={leftArrow}></i>
                </div>
            
                <div className='rightArrow'>
                    <i className={rightArrow}></i>
                </div>

                <div className='deleteItem'>
                    <i className='bi bi-trash'></i>
                </div>
        </div>
        )
    }
    return result
}

function Sticky(props){
    const [showModalForm, setShowModalForm] = useState(false)
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='sticky-notes'>
            <div className='items'>
                <div className='note-header'>
                    <div className='note-header-title'>
                        {props.header}
                    </div>
                    <div className='note-header-icon'>
                        <button className='call-modal-button' onClick={() => setShowModalForm(true)}
                            style={{'border':'none', 'background-color':'white'}}
                        >
                             <i className="bi bi-plus-square"/>
                       </button>

                       <Modal  isOpen={showModalForm} 
                              onRequestClose={() => setShowModalForm(false)}
                              style={
                                    {
                                        overlay:{
                                            backgroundColor: 'rgb(204, 204, 204,0.9)'
                                        },
                                        
                                    } 
                            }
                        >
                            <div className = 'modal-container-new-task'>
                                <div className = 'modal-header-new-task'>
                                    <h1 className='modal-h1-new-task' 
                                        style={{'color':'black'}}>
                                            Registration of new Task
                                    </h1>         
                                </div>
                                <div className='modal-body-new-task'>
                                    <form className='task-input-form' onSubmit={handleSubmit(onSubmit)}>
                      
                                        <div className="form-body">
                                            <div className="subject">
                                                <input type="text" name="subject" placeholder="write any subject" />
                                            </div>
                                        </div>

                                        <div className='modal-form-footer'>
                                            <div className='footer-btn'>
                                                <button className='btn btn-success' 
                                                onClick= {() => setShowModalForm(false)}>Submit</button>
                                            </div>
                                            <div style={{'margin': '5px'}}/>
                                            <div className='footer-btn'>
                                                <button className='btn btn-danger' 
                                                onClick= {() => setShowModalForm(false)}>close</button>
                                        </div>
                                    </div> 

                                    </form>
                                </div>
                            </div>
                        </Modal>
               </div>        
            </div>
            <div className='content'>
                {getTaskElements(props.content,
                                props.leftArrow,
                                props.rigthArrow)}
                </div>
            </div>
        </div>
    )
}
export default Sticky
   