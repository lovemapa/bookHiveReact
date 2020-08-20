import React, { Component } from 'react'

import { ReactReader, EpubView } from "react-reader";


export default class Books extends Component {
    state = {
        location: "epubcfi(/6/2[cover]!/6)"
    }

    componentDidMount() {


    }
    render() {

       

        return (
            <div style={{ position: "absolute", width: "100%", height: "80%" }}>

                <div style={{ position: "relative", height: "100%", width: "100%" }}>

                    <ReactReader
                        url={this.props.location}
                        title={"A Suitable boy"}
                        location={this.state.location}
                        locationChanged={epubcifi => {
                            console.log(epubcifi)
                            return this.setState({ location: epubcifi.toString() })
                        }}
                    />
                </div>
            </div>
        )
    }
}
