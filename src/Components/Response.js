import React, { Component } from 'react';

export class Response extends Component {
    render(props) {


        return (
            <tbody>
                <tr><td>{this.props.responseData.username}</td></tr>
                <tr><td>{this.props.responseData.email}</td></tr>
                <tr><td>{this.props.responseData.password}</td></tr>
                <tr><td>{this.props.responseData.password2}</td></tr>



            </tbody>
        );
    }
}
