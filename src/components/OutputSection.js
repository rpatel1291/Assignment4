import React from "react"

class OutputSection extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="preview" 
                dangerouslySetInnerHTML={{__html:this.props.sendText}}
            >
            </div>
        )
    }
}
export default OutputSection