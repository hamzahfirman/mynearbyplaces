import React from 'react';
/* CSS */
import "./aPlace.css";
/* REACT BOOSTRAP  */
import { Jumbotron, Form, Container, Card, Row, Image, Button, Col, Carousel } from 'react-bootstrap';
/* Data */
import { currPlaceData } from  "./Checkpoints";

var DATA="";
var CHECKPOINT= false
class Place extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            review:"",
            data: {}
        }

    }
    handleOnSubmit = () => {
        let { username, review } = this.state;
    
        console.log(this.props.location.details);
        this.props.location.details.reviews.push({username: username, review: review})
        console.log(this.props.location.details);
        
        currPlaceData = this.props.location.details;
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
        // First time visit to this component
        if(this.props.location.details === undefined){
                    
            DATA = currPlaceData["data"];
            const data = DATA;
            this.setState({data: data});
        }else{
            console.log(currPlaceData["data"]);
            // Queries Values
            DATA = this.props.location.details
  
            //Fetches the data through the server
            console.log(DATA);
            const data = DATA;
            this.setState({data: data});
        
        }
    }
    render() {

    
        const { data } = this.state
        
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
                        {this.props.location.details.reviews.map(this.getAllReviews)}
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