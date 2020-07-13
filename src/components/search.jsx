import React from 'react'
import '../css/search.css'
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.setCity = this.setCity.bind(this)
    }
    setCity(){
        this.props.city(document.getElementById("searchBar").value)
    }
    render(){
        return (
            <div className="container">
                <input type="text" className="input" id="searchBar" placeholder="Enter city name..."/>
                <button onClick={this.setCity}><b>Search</b></button>
            </div>
        )
    }
}
export default Search