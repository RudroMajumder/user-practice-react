import React from 'react';

const Info = (props) => {
    let salary= 0;
    const clickedUser= props.clickedUser;
    for (let i = 0; i < clickedUser.length; i++) {
        const user = clickedUser[i];
        salary = parseFloat(salary + user.salary);
        console.log(salary);
    }
    return (
        <div>
            <h1>Total Added:{clickedUser.length}</h1>
            <h4>Total Salary: {salary} </h4>
        </div>
    );
};

export default Info;