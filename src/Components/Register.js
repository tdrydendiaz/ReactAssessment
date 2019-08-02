import React, { Component } from 'react';
import axios from "axios";


class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: ""
        };

    }

    makeRequest = (e) => {
        e.preventDefault();

        console.log(e.target[0].value)

        let newItem = {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            password2: e.target[3].value
        }

        axios
            .post("http://localhost:5000/user/createUser", newItem)

            .then(response => {


                this.setState({
                    data: response.data
                });

                this.props.getAll();



            });
    };

    render() {
        return (
            <div>
                <form name="form" onSubmit={this.makeRequest}>
                    
                    <label for="repName" id="accUsernameLabel">Username: </label>
                    <input name="name" type="text" id="accUsername" class="form-control"  />
                    <br />
                    <label for="accEmail" id="accEmailLable">Email: </label>
                    <input name="desc" type="text" id="accEmail" class="form-control"  />
                    <br />
                    <label for="accContent" id="accContentLable">Password: </label>
                    <input name="ingreds"  type="text" id="accContent" class="form-control" />
                    <br />
                    <br />
                    <label for="accEmail" id="accEmailLable">Repeat Password: </label>
                    <input name="image" type="text" id="accEmail" class="form-control"  />
                    <br />

                    <input type="submit" class="btn btn-primary" value="Register" />
                </form>
            </div>
        );
    }
}

export default Register;