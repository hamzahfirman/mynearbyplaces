import React from 'react';
/* CSS */
import "./aPlace.css";
/* REACT BOOSTRAP  */
import { Jumbotron, Form, Container, Card, Row, Image, Button, Col, Carousel } from 'react-bootstrap';

class Place extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            review:""
        }

    }
    handleOnSubmit = (details) => {
        let { username, review } = this.state;
        this.props.location.details.reviews.push(
            {username: username , review: review});
        this.props.history.push({
                pathname: "/aPlace",
                details: details});
    }
    getAllReviews = (item) => {
        return (
            <div>
                <div id="aReview">
                     "{item.review}" - {item.username}
                </div>
            </div>
        );


    }
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        // Changes the username
        this.setState({
            [name]: value
        });
    }


    render() {
        const { name, address, phone, cost, categories, totalReviews } = this.props.location.details;
        console.log(this.props.location);
        return(
            <div>
           
                <div id="bussinessDescription">
                    <h1>{name}</h1>
                    <p>
                        {address}{<br/>}
                        {phone}{<br/>}
                        {cost} - {categories}{<br/>}
                        <span id="totalReviews">Total reviews: {totalReviews}</span>
                    </p>
                </div>
                <hr/>
                <Form id="textArea" onSubmit={() => this.handleOnSubmit(this.props.location.details.reviews)}>
                    <Form.Control  
                    value = {this.state.username}
                    onChange = {this.handleInputChange}
                    name="username" 
                    placeholder="username"/> {<br></br>}
                    <Form.Control 
                    as="textarea" 
                    placeholder="Write your review here ... " 
                    rows={3}
                    value = {this.state.review}
                    onChange = {this.handleInputChange}
                    name="review" 
                     />{<br></br>}
                    <Button as="input" id="textSubmit"  type="submit" value="Submit" />
                </Form>
                <div id="allReviews">
                    <h5>Recent Reviews:</h5>
                    {this.props.location.details.reviews.map(this.getAllReviews)}
                </div>
            </div>
        );

    }

}


export default Place;