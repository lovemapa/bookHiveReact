import React, { Component } from 'react'
import classes from './Modal.css'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../../components/UI/Backdrop/Backdrop'




class Modal extends Component {

    state = {
        textarea: '',
        modalClosed: true,
        show: false
    }



    // componentDidUpdate(prevProps) {

    //     if (this.props.todo !== prevProps.todo)
    //         this.setState({ textarea: this.props.todo.name })


    // }

    handleChange = (event) => {


        let name = event.target.value

        this.setState(prevState => {

            return { textarea: name }
        })

    }

    updateTodo = () => {

        this.props.onUpdate(this.props.todo._id, this.state.textarea, this.props.token)
        this.props.modalClosed()

    }


    render() {

        return (
            <Aux>
                {/* <Backdrop show={this.props.show} Clicked={this.props.modalClosed} /> */}

                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vH)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    <textarea

                        rows="4"
                        name="name"
                        value={this.state.textarea}

                        onChange={(event) => this.handleChange(event)}
                    />

                    <button

                        className={classes.Button}
                        onClick={this.updateTodo}
                    > Update</button>


                </div>
            </Aux >
        )
    }
}







export default Modal

