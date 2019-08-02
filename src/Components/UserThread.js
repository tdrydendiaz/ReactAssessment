import React, { Component } from 'react';
import _ from 'lodash';
import {
    Table
} from 'reactstrap';
import User from './User'


function UserThread(props) {

    const {
        data
    } = props;

    return (
        <div >
            <Table striped bordered hover variant="dark">
                <tbody>
                    {_.reverse(data).map((item, index) => (
                        <User key={index} getAll={props.getAll} username={item.username}  />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}





export default UserThread;