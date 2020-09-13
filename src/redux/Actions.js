
import {  GET_EMPLOYEES_SUCCESS,  DELETE_EMPLOYEES_SS, UPDATE_USER } from './Constants';




export function getEmployeeSuccessAction(data){
    return {
        type: GET_EMPLOYEES_SUCCESS,
        payload: data
    }
}
var list = [];
export const getEmployeeAction = () => {
    return dispatch => {
        try{
           
            fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(data => {
                data.data.map(value => list.push(value));
             })

            fetch("https://reqres.in/api/users?page=2")
            .then(res => res.json())
            .then(data => {
                data.data.map(value => list.push(value));
                dispatch(getEmployeeSuccessAction(list))
             })
             
        }catch(error){
            console.log(error);
        }
    };
};

export const updateUser = (updateUser) => {
    return {
        type: UPDATE_USER,
        payload: updateUser
    }
}

export const deleteEmployee = (id)=>({
    type: DELETE_EMPLOYEES_SS,
    payload: id
})


