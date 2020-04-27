import React from "react";
import "./style.css"

function EmployeeList(props) {
    return (
        <div className="card" style={{margin: "10px auto", borderRadius:"30px"}}>
            <div className="conatiner">
                    <img alt={props.name} src={props.image} style={{height:130, float:"left", borderTopLeftRadius:"30px", borderBottomRightRadius:"30px"}}/>
                        <h4><strong>Name:</strong> {props.name}</h4>
                        <p><strong>Phone Number:</strong> {props.phone}</p>
                        <p><strong>Email:</strong> {props.email}</p>
            </div>
        </div>
        
    )
}

export default EmployeeList;