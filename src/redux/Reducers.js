
import { GET_EMPLOYEES_SUCCESS, DELETE_EMPLOYEES_SS, UPDATE_USER, GET_EDIT_ITEM, OPEN, CLOSE, IS_ADD } from './Constants';

const initialState = {
    employees: [],
    loading: false,
    editItem: {},
    isShow: false,
    updateUser: {},
    isAdd: false
};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: action.payload
            };
        case UPDATE_USER:
           var dem = 0;
            for (var i = 0; i < state.employees.length; i++) {
                if (state.employees[i].id === action.updateUser.id) {
                    state.employees[i] = action.updateUser;
                    dem++;
                }
            }
            if(dem==0 ) {
                state.employees.push(action.updateUser);
            }
            return {
                ...state
            }
        case DELETE_EMPLOYEES_SS:
            return {
                ...state,
                employees: state.employees.filter(employee=> employee.id!==action.payload),
                employee: action.id===state.employee && null
            }
        case CLOSE:
            return { ...state, isShow: false }
        case OPEN:
            return { ...state, isShow: true }  
        case GET_EDIT_ITEM:
            //console.log(action.editItem);
            return { ...state, editItem: action.editItem }
        case IS_ADD:
            return {...state, isAdd: true}
        default:
            return state;
    }
}

export default rootReducer;