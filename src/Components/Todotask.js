import React from "react";
import { useSelector,useDispatch } from "react-redux";

import { editask,deletetask } from "./Actions";
function Todotask(){
    const tasks=useSelector((state)=>state.tasks);
    const dispatch=useDispatch();

    const handleDelete=(index)=>{
        dispatch(deletetask(index));
    };

    const handleEdit=(index,updatedTask)=>{
        dispatch(editask(index,updatedTask));
    };
return(
    <ul className='tododiv1'>
        {
            tasks.map((task,index)=>(
<li key={index}>
<span>{task}</span>
<button onClick={()=>handleEdit(index,prompt('Edit Task:',task))}>Edit</button>
<button onClick={()=>handleDelete(index)}>Delete

</button>

</li>

            ))
        }
    </ul>
)
}
export default Todotask;