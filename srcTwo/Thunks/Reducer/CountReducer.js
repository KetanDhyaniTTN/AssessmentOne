import { INCREMENT,DECREMENT,API} from "../Actions/Actions";

const INITIAL_STATE={
    count:0,
    dataApi:[]
};
const CountReducer=(state=INITIAL_STATE,action)=>{
    const{type,payload}=action;
    switch (type) {
        case INCREMENT:
            return{...state,count:state.count+payload}
        case DECREMENT:
            return{...state,count:state.count-payload}
        case API:
            return{...state,dataApi:payload}
        default:
            return state;
    }
};
export default CountReducer;