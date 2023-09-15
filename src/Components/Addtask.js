import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addtask } from './Actions';
import "./Todo.css"

const Addtask = () => {
    const [task,setTask]=useState(" ");
    const dispatch=useDispatch();
    const handleAddTask=()=>{
if(task.trim()!==" "){
    dispatch(addtask(task));
    setTask(" ")
}
    }
  return (
    <div className='tododiv'>
      <h1>TodoList App</h1>
<input type="text"
placeholder='enter a task'
value={task}
onChange={(e)=>setTask(e.target.value)}/>

<button onClick={handleAddTask}>Add task</button>
    </div>
  );
}

export default Addtask