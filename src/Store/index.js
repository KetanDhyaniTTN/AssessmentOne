import {legacy_createStore} from "redux";
import ToDoReducer from "../Reducer/Reducer";

const Store=legacy_createStore(ToDoReducer);

export default Store;

