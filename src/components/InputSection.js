import React from "react"
import "../css/InputSection.css"

class InputSection extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const text = event.target.value
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