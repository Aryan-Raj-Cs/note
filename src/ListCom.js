import React, { useState } from "react";


//import DeleteIcon from "@material-ui/icons/Delete";
const ListCom = (props) => {

 const [line, setLine] = useState(false);

   const cutIt = () => {


    setLine(true);
  };
return (
<div className="todo_style" style={{ display: line ? "none" : "block" }}>
  <span onClick={cutIt}>
  <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
  </span>


      <li style={{ textDecoration: line ? "line-through" : "none" }}>


        {props.text}


      </li>


    </div>


  );


};
export default ListCom;