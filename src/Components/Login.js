import React, { Component } from 'react';
// import axios from "axios";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: ""
        };

    }


    render() {
        return (
            <div>
                <form name="form" onSubmit={this.makeRequest}>
                    
                    <label for="repName" id="accUsernameLabel">Username: </label>
                    <input name="name" type="text" id="accUsername" class="form-control"  />
                    <label for="accContent" id="accContentLable">Password: </label>
                    <input name="ingreds"  type="text" id="accContent" class="form-control" />
                    <br />

                    <input type="submit" class="btn btn-primary" value="Register" />
                </form>
            </div>
        );
    }
}

export default Login;