import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




function User(props) {


  


    return (
        <tr>
            <td >
                <h4>{props.name}</h4>
                <p>{props.email}</p>
                <p>{props.password}</p>
                <p>{props.password2}</p>
                
            </td>
        </tr>
    );
}


export default User;