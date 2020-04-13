import React, { Component } from 'react'
import axios from "axios"
import { Container, Row, Col, Form , Image} from 'react-bootstrap'



export default class OneMovei extends Component {

    state ={
        movie: {}
    }
    componentDidMount() {
        axios.get('https://sei12.herokuapp.com/movei/json')
            .then(res => {
                this.setState({
                    movie: res.data.filter(m => {
                        return m._id === this.props.match.params.id
                    })[0]
                })
            }).catch(err => console.log(err))
    }

   
    

    render() {
        console.log(this.state.movie)
        return (
                <Col md={10} className="m-auto" style={{ borderStyle: "double", borderRadius: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Image roundedCircle style={{ height: 200, width: 200 }} src={this.state.movie.link} ></Image>
                <p>{this.state.movie.name}</p>
                <h5>{this.state.movie.history}</h5>
                <h5>{this.state.movie.typee}</h5>
                <h4>{this.state.movie.YourName} </h4>

            </Col>
         
        )
    }
}
