import React from "react"
import SplitPane from "react-split-pane"
import InputSection from "./InputSection"
import OutputSection from "./OutputSection"
import ReactDOMServer from "react-dom/server"

import '../css/Container.css'

class Container extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text:"",
            md:"",
            filename:"Default",
            fileextention:"html",
            html:"",
        }
        this.handleFileName = this.handleFileName.bind(this)
        this.handleFileExt = this.handleFileExt.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    updateValue(text){
        this.setState({text})
        this.updateHtml(this.state.text)
    }
    updateMd(md){
        this.setState({md})
    }
    updateHtml(text){
        let x = `<!doctype html><html><head></head><body>${this.text}</body></html>`
        this.setState({html:x})
    }
    handleFileName(event){
        if(event.target.value === ""){this.setState({filename:"Default"})}
        else this.setState({filename: event.target.value})
    }
    handleFileExt(event){
        this.setState({fileextention: event.target.value})
    }
    handleOnClick(event){
        event.preventDefault()
        let fullName = `${this.state.filename}.${this.state.fileextention}`
        let a = document.createElement("a")
        document.body.appendChild(a)
        if(this.state.fileextention === "md"){
            let blob = new Blob([this.state.md],{type:"text/plaintext"})
            let url = window.URL.createObjectURL(blob)
            a.href= url
            a.download = fullName
            a.click()
            window.URL.createObjectURL(url)
        }
        if(this.state.fileextention === "html"){
            let blob = new Blob([ReactDOMServer.renderToString(this.state.html)],{type:"text/plaintext"})
            let url = window.URL.createObjectURL(blob)
            a.href= url
            a.download = fullName
            a.click()
            window.URL.createObjectURL(url)
        }
        return function(data, fullName){
            let blob = new Blob()
            let url = window.URL.createObjectURL(blob)
            a.href = url
            a.download = fullName
            a.click()
            window.URL.revokeObjectURL(url)
        }
    }
    render(){
        return(
            <div className="Container">
                <SplitPane split="vertical" defaultSize="50%">
                    <div className="input-section-pane">
                        <h3 id="editor-section-id">Editor: </h3>
                        <InputSection  
                            updateValue={this.updateValue.bind(this)}
                            updateMd={this.updateMd.bind(this)}
                        />
                    </div>
                    <div className="view-pane">
                        <h3 id="preview-section-id">
                            Preview File: {this.state.filename}.{this.state.fileextention}
                        </h3>
                        <label>Enter File Name:
                            <input
                                id="filename-input" 
                                type="text"
                                placeholder={this.state.filename}
                                onChange={this.handleFileName.bind(this)}
                            />
                            <select
                                id="file-extention-selector"
                                onChange={this.handleFileExt.bind(this)}
                            >
                                <option value="html">HTML (.html)</option>
                                <option value="md">MarkDown (.md)</option>
                            </select>
                            <button
                                id="download-button"
                                onClick={this.handleOnClick}
                            >
                                Download
                            </button>
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
