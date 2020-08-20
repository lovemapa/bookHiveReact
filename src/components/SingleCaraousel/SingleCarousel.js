import React, { Component } from 'react'
import axios from '../../axios-book'
import Book from '../../containers/Book/Book'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import './SingleCarousel.css'

export default class SingleCarousel extends Component {


    state = {
        modalClose: true,
        location: ''
    }

    clickedHandler = (id) => {

        axios.get(`book/getparticularBook/${id}`)
            .then(response => {

                console.log(response);

                this.setState({ modalClose: false, location: response.data.data.location })

            }).catch(err => console.log(err))
    }

    render() {

        let BookComponent = null
        if (!this.state.modalClose) {
            BookComponent = (<Book location={this.state.location} />)
        }

        return (
            <Aux>
                {BookComponent}
                <div className="tile" onClick={() => { this.clickedHandler(this.props.bookId) }}>
                    <div className="tile__media">
                        <img className="tile__img" src={'http://localhost:8081' + this.props.image} alt="" />
                    </div>
                    <div className="tile__details">
                        <div className="tile__title">
                            {this.props.title}
                        </div>
                    </div>
                </div>
            </Aux>

        )
    }
}
