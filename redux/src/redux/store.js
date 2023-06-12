import { legacy_createStore } from "redux";
import { reducer } from "./AuthReducer/reducer";





export const store=legacy_createStore(reducer)