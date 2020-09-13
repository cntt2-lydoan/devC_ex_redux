import React from 'react';
import { connect } from "react-redux"
import { getEmployeeAction, deleteEmployeeSSAction, deleteEmployee } from '../redux/Actions';
import { useEffect } from "react";
import { EDIT_EMPLOYEES_SUCCESS, DELETE_EMPLOYEES_SS, GET_EDIT_ITEM, OPEN, IS_ADD } from './../redux/Constants';
import FormEdit from './FormEdit';
import './Style.css';


const ListEmployee = ({ getEmployees, employees, loading, props, isShow, open, editItem,isAdd,deleteData }) => {
    useEffect(() => {
        getEmployees();
    }, []);
    //console.log(employees);


    const editData = (object) => {

        editItem(object)
        //console.log(object);
        open();


    }
    const show = () => {
        if (isShow == true ) {
            return <FormEdit />
        }
    }
    //console.log(isShow);
    const addUser = () => {
        // console.log(object);
        open();
        isAdd();
    }
    return (
        <div className = "EmployeeDT">
            <div className = "btn-add">
                 <button onClick = {() => addUser()}>Add User</button>
             </div>
            {loading && <div>loading...</div>}
            {
                    show()
                }
            
            <div className="content">
                <table class="table table-dark">
                    
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Full Name</th>
                            <th>Avatar</th>
                            <td>Action</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map(employee => (        
                                <tr>                                 
                                    <td>{employee.id}</td>
                                    <td>{employee.email} </td>
                                    <td>{employee.first_name} {employee.last_name} </td>
                                    <td><img src={`${employee.avatar}`} alt="" /></td>
                                    <td>
                                        <button onClick={() => editData(employee)} >Edit</button>
                                        <button onClick={(id) => deleteData(employee.id)}>Delete</button>
                                        
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>

                </table>
                
                


            </div>

        </div>
    );
};
const mapStateToProps = (state) => ({
    employees: state.employees,
    loading: state.loading,
    isShow: state.isShow,
    isAdd: state.isAdd
});

const mapDispatchToProps = (dispatch) => ({
    getEmployees: () => dispatch(getEmployeeAction()),
    editItem: (editItem) => {
        dispatch({ type: GET_EDIT_ITEM, editItem })
    },
    deleteData: (id) => {
        dispatch(deleteEmployee(id))
    },
    open: () => {
        dispatch({ type: OPEN })
    },
    isAdd: () => {
        dispatch({type: IS_ADD})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListEmployee);