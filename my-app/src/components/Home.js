import React from 'react';
/* REACT BOOSTRAP */
import { Nav, Form, Col } from 'react-bootstrap';
/* REACT ROUTER */
import { Link } from 'react-router-dom';
/* CSS */
import './Home.css';


class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    body = () => {
        return (
            <div className="bodyContainer">

                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                         <Nav.Link className="navLinks" href="/places">Write a Review</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLinks" href="/businesses">Add a Business</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  className="navLinks" href="/login">Login</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div id="welcome">
                    WELCOME TO FINDAPLACE
                </div>
                <div className="formBody">
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="Find A Place..." />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Near..." />
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
            </div>
        );
    }
    render() {
        // Captures the a given username from login
        let username = '';
        
        const location = this.props.location;
        if(location) {
            if(location.state){
                if(location.state.user){
                    username = location.state.user;
                }
            }
        }
        if(username.length > 0){
            return(
                <div>
                    It works
                </div>
            );
        }
        return(
            <div>
                {this.body()}
            </div>
        );

    }

}


export default Home;