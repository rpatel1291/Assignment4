import React from "react"
import "../css/InputSection.css"
const showdown = require("showdown")
import ReactDOMServer from "react-dom/server"

class InputSection extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        let convert = new showdown.Converter()
        const text = convert.makeHtml(event.target.value)
        this.props.updateValue(text)
    }
    render(){
        return (
            <div>    
                <textarea 
                    id="markdown" 
                    className="markdown" 
                    onChange={this.handleChange.bind(this)}
                ></textarea>
            </div>
        )
    }
}

export default InputSection