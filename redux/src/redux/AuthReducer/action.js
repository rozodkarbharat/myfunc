import { LOGIN } from "./action.type"




export const Login=(dispatch)=>(payload)=>{
dispatch({type:LOGIN,payload})
}