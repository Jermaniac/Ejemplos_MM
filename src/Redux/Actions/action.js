import {ADD} from '../Types/types'

export const add = (data) =>dispatch=>{

 return{
    type:ADD,
    payload:{
     data
    }
 }
}