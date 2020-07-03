import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";
import "./note.css";
const ToDoList = () => {


    const [item, setItem] = useState("");


    const [newitem, setNewItem] = useState([]);




    const itemEvent = (event) => {
  
        setItem(event.target.value);


    };




    const listOfItems = () => {


        setNewItem((prevValue) => {

            if(item.length>0)
            return [...prevValue, item];
            else{
                return [...prevValue]
            }


        });


        setItem("");


    };

   const clear=(e)=>{
    e.target.value="";
       console.log();
     
   }
     


    return (
        <>
            <div class="main">
                <div class="child">
                    <h1>Todolist</h1>
                    <input type="text"  onChange={(e)=>{itemEvent(e)}}  onFocus={(e)=>{clear(e)}} />
                    <button type="button" class="btn btn-primary"  onClick={listOfItems}>Add</button>

                    <ol>


{newitem.map((val, index) => {


  return <ListCom key={index} text={val} />;


})}


</ol>

                </div>
               
            </div>

        </>
    );
};


export default ToDoList;