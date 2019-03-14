import React from "react"
import Convert from "showdown"

class OutputSection extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="preview">{this.props.sendText}</div>

        )
    }

}

export default OutputSection