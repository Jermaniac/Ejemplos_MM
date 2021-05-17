import {ADD, FILTER_JOBS} from '../Reducers/reducer'

export const add = (data) =>{

 return{
    type:ADD,
    payload:{
     data
    }
 }
}

export const filter_jobs = (data) =>{

   return{
      type:FILTER_JOBS,
      payload:{
       data
      }
   }
}