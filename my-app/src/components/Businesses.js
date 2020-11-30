import React from 'react';
/* REACT BOOSTRAP  */
import { Jumbotron, Container, Card, Row, Image, Form, Button, Col } from 'react-bootstrap';
/* Images */
import Resto from '../images/resto3.jpg';
/* CSS */
import './Businesses.css';
/* Data */
import server from '../serverInterface/server';
/* Checkpoint */
import { currentData }  from './Checkpoints';

var LOCATION = "";
var BUSINESS = "";
class Businesses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        };
    }
    handleAReview = (businessDetails) => {
        this.props.history.push({
            pathname: "/place",
            details: businessDetails});
    }

    getBusinesses = (item) => {
        return (
            <div>
                <Col>
                    <Card className="cardBusiness" style={{ width: '12rem' }}>
                            <Card.Header>{item.name}</Card.Header>
                        <Card.Body>
                        <Image id="imageBusiness" src={Resto} fluid />
                            <Card.Title id="cardBusinessTitle">Total Reviews: {item.totalReviews}</Card.Title>
                                <Card.Text id="cardBusinessText">
                                    Address: {item.address}{<br/>}
                                    Hours  : {item.hours}{<br/>}
                                    Phone  : {item.phone}{<br/>}
                                    Website: {<a href={item.link}>{item.website}</a>}{<br/>}
                                    <Button variant="secondary" id="reviewButton" onClick={() => this.handleAReview(item)}size="sm" active>
                                         Write a Review
                                    </Button> 
                                </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </div>
        );
    }


    componentDidMount() {
        
        if(currentData["business"] == ""){

            // Queries Values
            const location = this.props.location;
            BUSINESS = location.business;
            LOCATION = location.address;
            currentData["business"] = BUSINESS;
            currentData["location"] = LOCATION;
          
            
            //Fetches the data through the server
            const data = server.fetchEntries(BUSINESS);
            this.setState({entries: data.businesses});
        }else{
            if((this.props.location.business != undefined &&
                this.props.location.business != BUSINESS)
                 && (this.props.location.address != LOCATION &&
                    this.props.location.address != undefined) 
                    ||(this.props.location.address == LOCATION &&
                    this.props.location.address != undefined)){
                        
                    const location = this.props.location;
                    BUSINESS = location.business;
                    LOCATION = location.address;
                    currentData["business"] = BUSINESS;
                    currentData["location"] = LOCATION;
                 }else{
                    LOCATION = currentData["location"];
                    BUSINESS = currentData["business"];
                 }
            //Fetches the data through the server
            const data = server.fetchEntries(BUSINESS);
            this.setState({entries: data.businesses});
        }

    }

    render() {
        const { entries } = this.state;
        if(entries.length > 0){
            return(
                <div>
                    
                    <div id="brandName">
                        FINDAPLACE
                    </div>
                    <Form.Row id="searchForm">
                            <Col>
                            <Form.Control width="10px" placeholder="Under Construction ... " />
                            </Col>
                            <Col>
                            <Button id="buttonForm" type="submit">
                                Find
                            </Button>
                            </Col>
                    </Form.Row>
                    <div>
                        <Jumbotron id="headerJumbotron" fluid>
                            <Container id="headerContainer">
                                <h1 id="header">The Best {BUSINESS} in {LOCATION}</h1>
                            </Container>
                        </Jumbotron>
                    </div>
                    <div id="businessCards">
                        <Container >
                            <Row>
                                {entries.map(this.getBusinesses)}
                            </Row>
                        </Container>
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
    
    }
    
}

export default Businesses;