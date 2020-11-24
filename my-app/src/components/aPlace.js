import React from 'react';
/* CSS */
import "./aPlace.css";
/* REACT BOOSTRAP  */
import { Jumbotron, Form, Container, Card, Row, Image, Button, Col, Carousel } from 'react-bootstrap';

class Place extends React.Component {
    constructor(props) {
        super(props);

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
                <Form id="textArea">
                    <Form.Control as="textarea" rows={3} />{<br></br>}
                    <Button as="input" id="textSubmit" type="submit" value="Submit" />
                </Form>
                <div id="allReviews">
                    <h5>Recent Reviews:</h5>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <Carousel.Caption>
                                 <h3>{categories}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                  
                </div>
            </div>
        );

    }

}


export default Place;