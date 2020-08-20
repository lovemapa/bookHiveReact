import React, { Component } from 'react'
import suitableBoy from '../../assets/ASuitableBoy.epub'
import subtleArt from '../../assets/the_Subtle_art .epub'
import btw from '../../assets/btw.epub'
import taraWestover from '../../assets/Educated_ A Memoir by Tara Westover.epub'
import { ReactReader, EpubView } from "react-reader";


export default class Books extends Component {
    state = {
        location: "epubcfi(/6/2[cover]!/6)"
    }

    render() {
        console.log(this.props.location);
        return (
            <div style={{ position: "absolute", width: "100%", height: "80%" }}>

                <div style={{ position: "relative", height: "100%", width: "100%" }}>

                    <ReactReader
                        url={'http://localhost:8081' + this.props.location}
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
