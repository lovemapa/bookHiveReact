import classes from './Carousel.css'
import SingleCarousel from '../SingleCaraousel/SingleCarousel'
import React, { Component } from 'react'
// import Book from '../../containers/Book/Book'
// import axios from '../../axios-book'

export default class Carousel extends Component {

    componentDidMount() {


    }

 

    render() {

        let carousel = this.props.booksArray.books.map(book =>
            (
                <SingleCarousel
                    key={book._id}
                    bookId={book._id}
                    // clicked={() => { this.clickedHandler(book._id) }}
                    image={book.coverPhoto}
                    title={book.bookTitle}
                />

            )
        )
        return (
            <div>
                <div className={classes.contain}>
                    <div className={classes.row}>
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{this.props.booksArray.bookCategory.name}</span>
                        <div className="row__inner">
                            {carousel}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

