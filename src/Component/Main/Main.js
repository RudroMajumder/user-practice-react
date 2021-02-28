import React, { useState,useEffect  } from 'react';
import User from '../User/User';
import userData from '../../FakeData/fakeData.json';
import './Main.css'
import Info from '../Info/Info';
const Main = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        setUsers(userData);
    },[users])

    const [clickedUser, setClickedUser] = useState([]);
    const buttonHandler =(user)=>{
        console.log('clicked',user.name)
        const newClicked = [...clickedUser,user];
        setClickedUser(newClicked);
    }

    return (
        <div className="main" >
            <div className="user" >
                {
                    users.map(user => <User user={user} buttonHandler={buttonHandler} key={user.id}></User>)
                }
            </div>
            <div className="info-container">
                <Info clickedUser={clickedUser}></Info>
            </div>
        </div>
    );
};

export default Main;