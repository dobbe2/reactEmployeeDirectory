import React from "react";

function EmployeeList(props) {
    return (
        <div>
        <img alt={props.name} src={props.image}/>
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Phone Number:</strong> {props.phone}
                </li>
                <li>
                    <strong>Email:</strong> {props.email}
                </li>
            </ul>
        </div>
    )
}

export default EmployeeList;