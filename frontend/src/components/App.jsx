import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";




function App() {
  const [notes, setNotes] = useState([]);
  let temp=[];
  

    useEffect(()=>{
    axios.get("http://localhost:5000/")
    .then((response)=>{
      
      setNotes(response.data);
      
      console.log('Hua');});
     
  },[]);



  async function addNote(newNote) {
    
    
    await axios.post("http://localhost:5000/",newNote)
    .then(()=>{
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });

    });

    await axios.get("http://localhost:5000/")
    .then((response)=>{
      
      setNotes(response.data);
      
      console.log('Hua');});
   
  }


  async function deleteNote(id) {
    
    await axios.delete("http://localhost:5000/"+id)
    .then(()=>{
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem) => {
          return noteItem._id!== id;
        });
      });

    });
    
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
