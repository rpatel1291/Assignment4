import React from "react"
import Container from "./Container"

export default function App() {
    return (
        <div>
            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-4 text-center text-uppercase">
                            Assignment 4
                        </h1>
                        <p className="text-center text-uppercase">
                            A Markdown Note Downloader
                        </p>
                    </div>
                </div>
                <div id="container">
                    <Container/>
                </div>
            </main>
        </div>
    )
}