import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'

const Notegroup = (props) => {
    return (
        <div className='notegroup'>
            <h1>{props.title}</h1>
            <div className="content">
                <h5>{props.content}</h5>
            </div>
            <div className="button">
                <button type='button' className='notebtn' onClick={() => props.delete(props.id)}><AiOutlineMinus /></button>
            </div>
        </div>
    )
}

export default Notegroup
