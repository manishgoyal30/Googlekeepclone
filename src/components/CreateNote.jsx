import React from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

const CreateNote=(props) => {

  const[note, setNote] = useState({
    title:"",
    content:"",
  });

   const InputEvent =(event) => {
  
    // const value = event.target.value;
    // const name = event.target.value;
    const{name,value} = event.target;
   setNote((prevData) =>{
     return {
       ...prevData,
       [name] : value   //if name matched then it will store in the value  suppose if name matches with the title then it will store in the note.title;
     };
   });
   console.log(note);
  };

  const addEvent = () =>{
    props.passNote(note);
    setNote({
      title: "",
      content:"",
    });
  };

  return(
    <>
    <div className="main_note">
      <form>
        <input 
        type="text"
        name="title"
        value={note.title}
        onChange={InputEvent}
        placeholder="Title" 
        autoComplete="off"
        />

        <textarea 
        rows=''
        column='' 
        name="content"
        placeholder="Write a note...."
        value={note.content}
        onChange={InputEvent}
        >
          
        </textarea>
        <Button onClick={addEvent}>
          <AddIcon className="plus_sign"  />
          </Button>
      </form>
    </div>
    </>
  )
};

export default CreateNote;
