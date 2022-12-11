import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'


const Notes = (props) => {
    const [data, setdata] = useState({
        name: "",
        texts: "",
    })
    const setinput = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    const addnote = () => {
        props.passnote(data);
        setdata({
            name: "",
            texts: "",
        })
    }

    return (
        <div className='notecontent'>
            <div className="note">
                <input type="text" placeholder='Title' name='name' value={data.name} autoComplete="off" onChange={(e) => { setinput(e) }} />
                <textarea className='notetext' name='texts' value={data.texts} placeholder='Enter Text Here' onChange={(e) => { setinput(e) }}></textarea>
                <div className="button">
                    <button type='button' className='notebtn' onClick={addnote} ><AiOutlinePlus /></button>
                </div>
            </div>
            <div className="clearbutton">
                <button type='button' onClick={(e)=>{props.cleardata()}}>Clear All</button>
            </div>
        </div>
    )
}

export default Notes
