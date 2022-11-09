import { ADD_DATA, TOGGLE_DATA } from "../Actions/Actions";
import { DELETE_DATA } from "../Actions/Actions";
import { EDIT_DATA } from "../Actions/Actions";
const INITIAL_STATE={
    info: {
        SCHEDULE: [
          {
            id:100,
            title:'Add Name',
            subtitle:'Add Subtitle'
          }
        ],
     SCHOOL: [
          {
            id:101,
            title:'Add Address',
            subtitle:'Add Address',
          }
        ],
    GROCERY: [
          {
            id:102,
            title:'Add Bill',
            subtitle:'Add Bill'
          }
        ],
      },
      edit:false
};
const ToDoReducer=(state=INITIAL_STATE,action)=>{
    const{type,payload}=action;
    switch(type){
     case ADD_DATA:
        return {info:{...state.info,...payload}};
      case DELETE_DATA:
        return{info:{...state.info,...payload}};
      case EDIT_DATA:
        return{info:{...state.info,...payload}};
      // case TOGGLE_DATA:
      //   return{info:{...state, edit:!edit.state.edit}};
        default:
            return state;
    };
}
export default ToDoReducer;