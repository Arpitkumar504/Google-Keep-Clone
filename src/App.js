import React, { useState } from 'react'
import Headerkeep from './component/Headerkeep.js'
import Notes from './component/Notes.js'
import Notegroup from './component/Notegroup.js'

const App= () => {
    const [alldata, setalldata] = useState([]);
    const addnote = (note) => {
        if ((note.name !== "") && (note.texts !== ""))
            setalldata([...alldata, note]);

        console.log(alldata);
    }
    const deletenote = (indexs) => {
        const update = alldata.filter((element, index) => {
            return indexs !== index;
        })
        setalldata(update);
    }
    return (
        <div >
            <Headerkeep name="Arpit Keep" />
            <Notes passnote={addnote} />
            <div className="notesbox">
                {
                    alldata.map((element, index) => {
                        return (
                            <Notegroup
                                key={index}
                                id={index}
                                title={element.name}
                                content={element.texts}
                                delete={deletenote}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App
