import { LOGIN } from "./action.type"


const initstate={
    arr:[]
}

export const reducer=(state=initstate,action)=>{
const {payload,type}=action

switch(type){
    case LOGIN:{
        console.log(payload)
        return state
    }
    default :{
  return state
    }
}

}