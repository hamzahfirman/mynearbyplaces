import React from 'react';
/* CSS */
import "./aPlace.css";
/* REACT BOOSTRAP  */
import { Jumbotron, Form, Container, Card, Row, Image, Button, Col, Carousel } from 'react-bootstrap';
/* Data */
import { storage, currPlaceData } from "./Checkpoints";
import server from "../serverInterface/server";

var DATA;
var CHECKPOINT= false
class Place extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            review:"",
            data: {},
            render: true
        }

    }
    handleOnSubmit = (event) => {
     
        let { username, review } = this.state;
        storage.reviews.push({username: username, review: review})
        storage.totalReviews += 1;
        this.setState({username:"",review:""})

        event.preventDefault();
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

    componentDidMount() {
        console.log(this.props.location.details);
        console.log(this.props.location.details.id);
        const data = server.fetchReviews(this.props.location.details.id).then(x => this.setState({data: x})).catch(e => console.log(e));
    }
    render() {

    
        const { data } = this.state
        console.log(this.props.location.details);
        if(data.name != undefined){
            const { name, address, phone, 
                cost, categories, totalReviews } = data;
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
                    <Form id="textArea" onSubmit={this.handleOnSubmit}>
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
                        <Button as="input" id="textSubmit"  type="submit" />
                    </Form>
                    <div id="allReviews">
                        <h5>Recent Reviews:</h5>
                        {data.reviews.map(this.getAllReviews)}
                    </div>
                </div>
            );

        }else{
           
            return(
                <div>
                    Data is loading...
                </div>
            );

        }
    }}

export default Place;