import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
const User = (props) => {
    const {name,email,job,salary,image} = props.user;
    const buttonHandler = props.buttonHandler;
    

    return (
        <div className="user-div" >
            <img className="user-img" src={image} alt=""/>
            <p><big> {name}</big></p>
            <p><big> {email}</big></p>
            <p><big> {job}</big></p>
            <p><big> $ {salary}</big></p>
            <button onClick={()=>buttonHandler(props.user)}> <FontAwesomeIcon icon={faPlus} /> </button>
        </div>
    );
};

export default User;