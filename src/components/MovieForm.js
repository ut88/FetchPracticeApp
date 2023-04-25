import Form from 'react-bootstrap/Form';
import { useState } from 'react';
const MovieForm=()=>{
    const [title,seTitle] =useState();
    const [description,setDescription] =useState();
    const [date,setDate] =useState();
    const titleHandler=(e)=>{
        seTitle(e.target.value)
    }
    const descriptionHandler=(e)=>{
        setDescription(e.target.value)
    }
    const dateHandler=(e)=>{
        setDate(e.target.value)
    }
   const submitHandler=(e)=>{
     e.preventDefault();
       const obj={
        title:title,
        description:description,
        date:date,
       }
       console.log(obj);
   }
   

    return(
        <form onSubmit={submitHandler}>
            <label><h1>Movie Title</h1></label>
            <input type='text' onChange={titleHandler}></input>
            <label><h1>Movie Description</h1> </label>
            <input type="text" onChange={descriptionHandler}></input><br />
            <label><h1>Releasing Date</h1></label>
            <input type='date' onChange={dateHandler}></input>
            <br /><br />
            <button type="submit">Add Movie</button>
        </form>
    )
}

export default MovieForm;