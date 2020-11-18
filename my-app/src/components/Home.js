import React from 'react';
/* REACT BOOSTRAP */
import { Nav, Form, Col, Table, Card, Button } from 'react-bootstrap';
/* REACT ROUTER */
import { Link } from 'react-router-dom';
/* CSS */
import './Home.css';
/* Images */
import Plumber from "../images/plumbing1.jpg";
import Auto from "../images/auto1.jpg";
import Restaurant from "../images/resto3.jpg";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            filled: false 
        }
    }

    handleOnClick = (event) => {
       this.setState({
           filled: true
       });
        
    }
    // METHOD:
    selectBusinesses = () => {
        return(
            <div>
                The Best Businesses in Town
            </div>
        );

    }
    // METHOD: 
    tableBusinesses = () => {
        return(
            <div>
                <table className="tableBusinesses">
                        <tr>
                            <td>
                                <Card  style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Restaurant} />
                                        <Card.Body>
                                            <div className="buttonContainer">
                                                <Button id="buttonBusinesses">Restaurants</Button>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </td>
                            <td>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Plumber} />
                                        <Card.Body>
                                            <div className="buttonContainer">
                                                <Button id="buttonBusinesses">Plumbers</Button>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </td>
                            <td>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Auto}/>
                                        <Card.Body>
                                            <div className="buttonContainer">
                                                <Button id="buttonBusinesses">Auto Repairs</Button>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                </table>
            </div>
        );
    }
    // METHOD: 
    searchBars = () => {

        return(
            <div>
                <div className="formBody">
                        <form className="loginNow" onSubmit={this.handleOnClick}>
                            <input 
                            id="placeInput"
                                type="text" 
                                name="place"
                                placeholder="restaurants, plumbers, auto repairs..."
                            />
                            <input
                                id="addressInput"
                                type="text"
                                name="location" 
                                placeholder="address, city, state or zip"
                            />
                        <button type="submit" id="loginNow">Find</button>
                    </form>
                </div>  
        </div>
        );
    }
    // METHOD:
    body = () => {
        return (
            <div>
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
                    {this.searchBars()}
            
                </div>
                <div className="selectBusinesses"> {this.selectBusinesses()}</div>
                <div> {this.tableBusinesses()}</div>
            </div>
        );
    }
    // METHOD: Displays the given username on top right of the screen and offers 
    // a logout button.
    signedIn = (name) => {
        return (
            <div>
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
                    {this.searchBars()}
                </div>
                <div className="selectBusinesses">{this.selectBusinesses()}</div>
                <div> {this.tableBusinesses()}</div>
            </div>
        );
    }
    render() {
        // Captures the a given username from login
        let username = '';
        
        const location = this.props.location;
        let { filled } = this.state;
        if(location) {
            if(location.state){
                if(location.state.user){
                    username = location.state.user;
                }
            }
        }
        if(filled) {
            <div>
                Works!
            </div>
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