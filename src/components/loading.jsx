import React from 'react'
import '../css/loading.css'
class Loading extends React.Component{
    render(){
        return (
            <center>
                <div className="loading-container">
                    <div className="vertical-line"></div>
                </div>
            </center>
        )
    }
}

export default Loading