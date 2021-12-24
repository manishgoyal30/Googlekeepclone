import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import { useState } from "react";


const App=() => {

  const[addItem, setAddItem] = useState([]);
  const addNote =(note) =>{

    setAddItem((prevData) =>{
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
    oldData.filter((currdata,index) =>{
      return index !== id;
    })
    );
  };
 
  return(
    <>
     <Header />     
     <CreateNote passNote={addNote}/>
     

     {addItem.map((val, index) => {
       return( 
       <Note
       key={index}
       id={index}
       title={val.title}
       content={val.content}
       deleteItem={onDelete}
       />
     );
    })}
    


     <Footer />
    </>
  );
};

export default App;
