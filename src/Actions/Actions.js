export const ADD_DATA = 'ADD_DATA'
export const DELETE_DATA = 'DELETE_DATA'
export const  EDIT_DATA='EDIT_DATA'
export const  TOGGLE_DATA='TOGGLE_DATA'
export const addData = (info, type) => {
    return {
        type: ADD_DATA,
        payload: { [type]: info } 
    };
};

export const deleteData = (info, type) => {
    return {
        type: DELETE_DATA,
        payload:  { [type]:info } 
    }
};
export const editData=(info,type)=>{
    return{
        type:EDIT_DATA,
        payload:{[type]:info}
    }
};
export const toggledata=(info,type)=>{
    return{
        type:TOGGLE_DATA,
    }
};