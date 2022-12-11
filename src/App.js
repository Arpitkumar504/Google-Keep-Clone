import React, { useEffect, useState } from 'react'
import Headerkeep from './component/Headerkeep.js'
import Notes from './component/Notes.js'
import Notegroup from './component/Notegroup.js'
import Footer from './component/Footer.js'


const getlocalstorage = () => {
    let lists = localStorage.getItem('list');
    if (lists) {
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return [];
    }
}
const getlocalcheck = () => {
    let datas = localStorage.getItem('item');
    if (datas) {
        return JSON.parse(localStorage.getItem('item'));
    }
    else {
        return 0;
    }
}
const App = () => {
    const [alldata, setalldata] = useState(getlocalstorage());
    let [data, setdata] = useState(getlocalcheck());
    const addnote = (note) => {
        if ((note.name !== "") && (note.texts !== "")) {
            setalldata([...alldata, note]);
            data++
            setdata(data);
        }
    }
    const deletenote = (indexs) => {
        const update = alldata.filter((element, index) => {
            return indexs !== index;
        })
        setalldata(update);
        data--;
        setdata(data);
    }
    const deleteall = () => {
        setalldata([]);
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(alldata));
    }, [alldata])
    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(data));
    }, [data])
    return (
        <div >
            <Headerkeep name="Arpit Keep" />
            <Notes passnote={addnote} cleardata={deleteall} />
            <div className="notesbox">
                {data === 0 ?
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
