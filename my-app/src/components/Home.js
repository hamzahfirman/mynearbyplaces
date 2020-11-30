import React from 'react';
/* REACT BOOSTRAP */
import { Nav, Form, Col, Table, Row, Card, Button, InputGroup } from 'react-bootstrap';
/* REACT ROUTER */
import { Link, Redirect } from 'react-router-dom';
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
            selected: false,
            busineessType: "",
            place:"",
            address:"",
            addBusiness: false,
            goToLogin: false
        }
    }

    handleSearchSubmitted = () => {
        let { place, address } = this.state;
        let arrAddress = address.split(", ");
        let town = arrAddress[0][0].toUpperCase() + arrAddress[0].substring(1).toLowerCase();
        let state = arrAddress[1].toUpperCase();
        let insensitivePlace = place.toLowerCase();

        if(insensitivePlace === "restaurants" || insensitivePlace === "plumbers"
         || insensitivePlace === "auto repairs" ){
            this.props.history.push({
                pathname: "/businesses",
                business: insensitivePlace[0].toUpperCase() + insensitivePlace.substring(1),
                address: town + ", " + state});

        }else{ //  User only chosen a Place 
            this.props.history.push({
                            pathname: "/businesses",
                            business: this.state.place,
                            address: this.state.address});

        }
    }
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        // Changes the username
        this.setState({
            [name]: value
        });
    }

    handleOnClickAddBusiness = () => {
        alert("Login is required");

    }
    handleOnClickWriteReview = () => {
        alert("Login is required");

    }

    handleOnClickAddBusinessState = () => {
        this.setState({addBusiness: true})
    }
    handleOnClick = (business, address) => {
        this.props.history.push({
            pathname: "/businesses",
            business: business,
            address: address
            });
    }
    goToLogin = () => {
        this.setState({goToLogin: true});


    }
      
    // METHOD:
    selectBusinesses = (aLocation) => {
        return(
            <div>
                The Best Businesses in {aLocation}
            </div>
        );
    }
    addBusiness = () => {
        return(

            <div>
                <div id="titleNewBusiness">
                Add a Business
                </div>
                <hr></hr>
                <div id="addBusinessForm">
                    <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Place Name 
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control type="email" placeholder="Place Name" />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                        Address
                        </Form.Label>
                        <Col sm={5}>
                        <Form.Control type="password" placeholder="Address" />
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Category
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Restaurant"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="Plumbing"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                            <Form.Check
                            type="radio"
                            label="Auto Repairs"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>
                    <Button as="input" id="textSubmit" placeholder="Submit" type="submit" />
                    </Form>
                </div>
            </div>
        );
    }
    // METHOD: 
    tableBusinesses = (address) => {
        return(
            <div>
                <table className="tableBusinesses">
                        <tr>
                            <td>
                                <Card  style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Restaurant} />
                                        <Card.Body>
                                            <div className="buttonContainer">
                                                <Button id="buttonBusinesses" onClick={() => this.handleOnClick("Restaurants",address)}>Restaurants</Button>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </td>
                            <td>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Plumber} />
                                        <Card.Body>
                                            <div className="buttonContainer">
                                                <Button id="buttonBusinesses"  onClick={() => this.handleOnClick("Plumbers",address)}>Plumbers</Button>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </td>
                            <td>
                                <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={Auto}/>
                                        <Card.Body>
                                            <div className="buttonContainer">
                                                <Button id="buttonBusinesses"  onClick={() => this.handleOnClick("Auto Repairs",address)}>Auto Repairs</Button>
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
                        <form className="loginNow" onSubmit={this.handleSearchSubmitted} >
                            <input 
                                value={this.state.place}
                                onChange = {this.handleInputChange}
                                id="placeInput"
                                type="text" 
                                name="place"
                                placeholder="restaurants, plumbers, or auto repairs"
                            />
                            <input
                                value={this.state.location}
                                onChange = {this.handleInputChange}
                                id="addressInput"
                                type="text"
                                name="address" 
                                placeholder="Tucson, AZ"
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
                            <Nav.Link className="navLinks" onClick={this.handleOnClickWriteReview}>Write a Review</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLinks" onClick={this.handleOnClickAddBusiness}>Add a Business</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  className="navLinks" onClick={this.goToLogin}>Login</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div id="welcome">
                        WELCOME TO FINDAPLACE
                    </div>
                    {this.searchBars()}
                </div>
                <div className="selectBusinesses">Login is required to see the best businesses in Tucson, AZ below.</div>
            </div>
        );
    }
    // METHOD: Displays the given username on top right of the screen and offers 
    // a logout button.
    signedIn = (name, location) => {
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
                            <Nav.Link className="navLinks" href="">Write a Review</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLinks" onClick={this.handleOnClickAddBusinessState}>Add a Business</Nav.Link>
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
                <div className="selectBusinesses">{this.selectBusinesses(location)}</div>
                <div> {this.tableBusinesses(location)}</div>
            </div>
        );
    }
    render() {
        // Captures the a given username from login
        let username = '';
        let aLocation = '';

        const location = this.props.location;
        let { addBusiness } = this.state;
        if(location) {
            if(location.state){
                if(location.state.user && location.state.location){
                    username = location.state.user;
                    aLocation = location.state.location;
                  
                }
            }
        }
        if(this.state.goToLogin == true){
            return(
            <Redirect to= {{pathname: '/login'}}/>
            );
        }
        if(username.length > 0 && addBusiness === true ){
            return(
                <div>
                    {this.signedIn(username, aLocation)}
                    <div>
                        {this.addBusiness()}
                    </div>
                </div>
            );
        }
        if(username.length > 0){
            return(
                <div>
                    {this.signedIn(username, aLocation)}
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