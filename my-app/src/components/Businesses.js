import React from 'react';
/* REACT BOOSTRAP  */
import { Jumbotron, Container, Card, Row, Image, Form, Button, Col } from 'react-bootstrap';
/* Images */
import Resto from '../images/resto3.jpg';
/* CSS */
import './Businesses.css';
/* Data */
import server from '../serverInterface/server';

class Businesses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        };
    }

    getBusinesses = (item) => {
        return (
            <div>
                    <Col>
                        <Card className="cardBusiness" style={{ width: '12rem' }}>
                                <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                            <Image id="imageBusiness" src={Resto} fluid />
                                <Card.Title id="cardBusinessTitle">Reviews Total: 9</Card.Title>
                                    <Card.Text id="cardBusinessText">
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

            </div>
        );
    }


    componentDidMount() {

        // Queries Values
        const location = this.props.location;
        var businessType = location.business;
        var aLocation = location.address.split(',');
        var aTown = aLocation[0];
        var aState = aLocation[1];

        //Fetches the data through the server
        const data = server.fetchEntries(businessType);
        this.setState({entries: data.businesses});
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
                            <Form.Control width="10px" placeholder="ramen, tacos, fish n' chips..." />
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
                                <h1 id="header">The Best {this.props.location.business} in {this.props.location.address}</h1>
                            </Container>
                        </Jumbotron>
                    </div>
                    <Container>
                        <Row>
                            {entries.map(this.getBusinesses)}
                         </Row>
                    </Container>
          
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