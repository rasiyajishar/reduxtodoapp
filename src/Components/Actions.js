export const ADD_TASK='ADD_TASK';
export const EDIT_TASK='EDIT_TASK';
export const DELETE_TASK='DELETE_TASK';

export const addtask=(task)=>({
    type:ADD_TASK,
    payload:task,

});
export const editask=(taskid,updatedtask)=>({
    type:EDIT_TASK,
    payload:{taskid,updatedtask},

});
export const deletetask=(taskid)=>({
    type:DELETE_TASK,
    payload:taskid,

});
