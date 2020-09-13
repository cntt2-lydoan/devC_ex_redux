import React, { Component } from 'react'
import './Style.css';
import { connect } from 'react-redux';
import { CLOSE, UPDATE_USER } from '../redux/Constants';

class FormEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.editItem.id,
            first_name: this.props.editItem.first_name,
            last_name: this.props.editItem.last_name,
            avatar: this.props.editItem.avatar,
            email: this.props.editItem.email
        };

       
    }
    componentDidMount(){
        // console.log(this.props.editItem);
        if(this.props.isAdd === true) {
            this.setState({
                id: this.props.editItem.id,
                first_name: this.props.editItem.first_name,
                last_name: this.props.editItem.last_name,
                avatar: this.props.editItem.avatar,
                email: this.props.editItem.email
            })
        }
    }

    isChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, " , ", value);
        this.setState({
            [name]: value
        })
    }

    save() {
        let data = this.state;
        console.log(data);
        this.props.close();
        this.props.updateUser(data)

    }
    
    render() {
        const {id,first_name, last_name, avatar, email} = this.state;
        return (
            <div className = "form-e">
                <h2>Form Employment</h2>
                <div className = "form-em">
                    
                    <label>
                        Id: <input name="id"  value={id} onChange={(event =>this.isChange(event))}></input>
                    </label>
                    <label>
                        Email:  <input name="email"  value={email} onChange={(event => this.isChange(event))} />
                    </label>
                    <label>
                        First Name: <input name="first_name"  value={first_name} onChange={(event => this.isChange(event))} />
                    </label>
                    <label>
                        Last Name: <input  name="last_name"   value={last_name} onChange={(event => this.isChange(event))} /> 
                    </label>
                    <label>
                        Avatar: <input name="avatar"  value={avatar} onChange={(event => this.isChange(event))} />
                    </label>

                    <img src={avatar} />
                    <input className="btn-save" type="button" value="save" onClick={() => this.save()} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShow: state.isShow,
        editItem: state.editItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        close : () => {
            dispatch({type: CLOSE})
        },
        updateUser : (updateUser) => {
            dispatch({type: UPDATE_USER, updateUser})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormEdit)