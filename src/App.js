import React, { useState } from 'react'
import Headerkeep from './component/Headerkeep.js'
import Notes from './component/Notes.js'
import Notegroup from './component/Notegroup.js'
import Footer from './component/Footer.js'

const App = () => {
    const [alldata, setalldata] = useState([]);
    let [data, setdata] = useState(0);
    const addnote = (note) => {
        if ((note.name !== "") && (note.texts !== "")) {
            setalldata([...alldata, note]);
        }
        data++
        setdata(data);
    }
    const deletenote = (indexs) => {
        const update = alldata.filter((element, index) => {
            return indexs !== index;
        })
        setalldata(update);
        data--;
        setdata(data);
    }
    return (
        <div >
            <Headerkeep name="Arpit Keep" />
            <Notes passnote={addnote} />
            <div className="notesbox">
                {data == 0 ?
                    <div className="notesmsg"><p>When You Create Notes It Will Shown Here</p></div> :
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
            <Footer />
        </div>
    )
}

export default App
