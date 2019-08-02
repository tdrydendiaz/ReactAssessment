import React, { Component } from 'react';
import axios from "axios";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            message: ""
        };

    }
    makeRequest = (e) => {
        e.preventDefault();

        // console.log(e.target[0].value)

        let newItem = {
            username: e.target[0].value,
            password: e.target[1].value,

        }

        axios
            .get("http://localhost:5000/user/name/:username", newItem)

            .then(response => {
                this.setState({ message:  JSON.stringify(response.data.Status) });
                console.log(response);
                });

                this.props.getAll();       
    };

    render() {
        return (
            <div>
                <form name="form" onSubmit={this.makeRequest}>

                    <label for="repName" id="accUsernameLabel">Username: </label>
                    <input name="name" type="text" id="accUsername" class="form-control" />
                    <label for="accContent" id="accContentLable">Password: </label>
                    <input name="ingreds" type="text" id="accContent" class="form-control" />
                    <br />

                    <input type="submit" class="btn btn-primary" value="Register" />
                </form>
                <p>
                    {this.state.message}
                </p>
            </div>
        );
    }
}

export default Login;