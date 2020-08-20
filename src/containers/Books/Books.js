import React, { Component } from 'react'
import axios from '../../axios-book'
import Caraousel from '../../components/Caraousel/Carousel'
import Modal from '../../containers/Modal/Modal'
export default class Books extends Component {

    state = {
        books: [],
        isModalVisible: true,
    }

    componentDidMount() {

        axios.post("book/getAllBooks")
            .then(response => {

                this.setState({ books: response.data.data })
            })
    }

    modalClosedHandler = () => {

        this.setState({ isModalVisible: false })

    }

    render() {

        let display = (
            this.state.books.map(book => (

                (< Caraousel
                    key={book._id}
                    booksArray={book}
                />)

            ))
        )

        return (
            <div>

                {display}

            </div>
        )
    }
}
