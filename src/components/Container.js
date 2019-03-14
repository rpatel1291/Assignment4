import React from "react"
import SplitPane from "react-split-pane"
import InputSection from "./InputSection"
import OutputSection from "./OutputSection"
// const showdown = require("showdown")

import '../css/Container.css'

class Container extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text:"",
            // html:"",
        }
        // this.updateValue = this.updateValue.bind(this)  
    }
    updateValue(text){
        this.setState({text})
    }

    render(){
        console.log(this.state.text)
        return(
            <div className="Container">
                <nav className="navbar">
                    {/* Enter download button */}
                </nav>
                <SplitPane split="vertical" defaultSize="50%">
                    <div className="input-section-pane">
                        <h3>Editor: </h3>
                        <InputSection  
                            updateValue={this.updateValue.bind(this)}
                        />
                    </div>
                    <div className="view-pane">
                        <h3>Preview:</h3>
                        <OutputSection 
                            sendText={this.state.text}  
                        />
                    </div>
                </SplitPane>
            </div>

        )
    }
}

export default Container;
