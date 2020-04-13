import React, { Component } from 'react'
import { Col, Image, Button } from 'react-bootstrap'

export default class MoveiCard extends Component {
    render() {

        let { YourName, link, name, typee, history } = this.props.movei
        return (
            <Col md={3} className="m-2" style={{ borderStyle: "double", borderRadius: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Image roundedCircle style={{ height: 150, width: 150 }} src={link} ></Image>
                <p>{this.props.movei.name}</p>
                <h5>{history}</h5>
                <h5>{typee}</h5>
                <h4>{YourName} </h4>
                <Button className="mb-3" variant="outline-warning">more info</Button>

            </Col>
        )
    }
}