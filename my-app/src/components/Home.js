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
    // METHOD: Displays the given username on top right of the screen and offers 
    // a logout button.
    signedIn = (name) => {
        return (
            <div className="bodyContainer">
                <div id="logout">
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link className="navLinks" href="/">Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                         <Nav.Link className="navLinks" href="/places">Write a Review</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLinks" href="/businesses">Add a Business</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  className="navLinks" href="">{name}</Nav.Link>
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
                    {this.signedIn(username)}
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