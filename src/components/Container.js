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
            filename:"",
            html:"",
        }
        this.handleFileName = this.handleFileName.bind(this)
    }
    updateValue(text){
        this.setState({text})
    }
    handleFileName(event){
        this.setState({filename: event.target.value})
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
                        <h3 id="editor-section-id">Editor: </h3>
                        <InputSection  
                            updateValue={this.updateValue.bind(this)}
                        />
                    </div>
                    <div className="view-pane">
                        <h3 
                            id="preview-section-id"
                        >
                            Preview File: {this.state.filename}
                        </h3>
                        <label>Enter File Name:
                            <input 
                                type="text"
                                placeholder={this.state.filename}
                                onChange={this.handleFileName.bind(this)}
                            />
                        </label>
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
