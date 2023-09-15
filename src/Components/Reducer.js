import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "./Actions";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case EDIT_TASK:
      const { taskid, updatedtask } = action.payload;
      const updatedTasks = [...state.tasks];
      updatedTasks[taskid] = updatedtask;
      // return{
      //     ...state,
      //     tasks:state.tasks.map((task,index)=>index===action.payload.taskid
      //    ?action.payload.updatedTask
      // :task),
      // };

      return {
        ...state,
        tasks: updatedTasks,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};
export default taskReducer;
