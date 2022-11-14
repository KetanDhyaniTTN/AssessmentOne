import Countereducer from "../Reducer/CountReducer";
import { applyMiddleware,legacy_createStore} from "redux";
import thunk from "redux-thunk";

const Store=legacy_createStore(Countereducer,applyMiddleware(thunk));
export default Store;