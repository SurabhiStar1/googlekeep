import React, {useState} from 'react';
import Header from './Header'
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () =>{
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) =>{
    // alert("I am clicked")
    setAddItem((prevData) =>{
      return [...prevData, note ]
    });
    console.log(note);
  }
// jkdcanvla
  const onDelete = (id) =>{
    setAddItem((oldData)=>
    oldData.filter((currData, indx) => {
    return indx!==id; 
    })
    );
  }
  return (
    <>
        <Header/>
        <CreateNote passNote = {addNote}/>
        {addItem.map((val, index)=>{
          return (
            <Note
            key={index}
            id={index}
            title={val.content}
            content = {val.content}
            deleteItem = {onDelete}
            />
          )
        })}
        <Footer/>
    </>
  )
}

export default App
