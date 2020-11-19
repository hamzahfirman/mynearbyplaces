import React from 'react';
/* REACT BOOSTRAP  */
import { Jumbotron, Container, Card, Row, Image, Form, Button, Col } from 'react-bootstrap';
/* IMAGES */
import Resto from '../images/resto3.jpg';
/* CSS */
import './Businesses.css';
class Businesses extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
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
                            <h1 id="header">The Best {this.props.location.business} in {this.props.location.location}</h1>
                        </Container>
                    </Jumbotron>
                </div>
                <Container>
                    <Row>
                    
                        <Card className="cardBusiness" style={{ width: '12rem' }}>
                                <Card.Header>Brooklyn Pizza</Card.Header>
                            <Card.Body>
                            <Image id="imageBusiness" src={Resto} fluid />
                                <Card.Title id="cardBusinessTitle">Reviews Total: 9</Card.Title>
                                    <Card.Text id="cardBusinessText">
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        );

    }

}

export default Businesses;