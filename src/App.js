import React from 'react';
import Weather from '../src/components/weather'
import Search from '../src/components/search'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city : '',
      state : '',
      country : '',
      longitude : '',
      latitude : '',
      loading : true
    }
    this.setData = this.setData.bind(this)
  }
  setData(city){
    this.setState({
      loading : true
    })
    fetch("http://api.weatherstack.com/current?access_key="+process.env.REACT_APP_WEATHER_API_KEY+"&query="+city)
    .then(res => res.json())
    .then(res => {

            this.setState({
                city : res.location.name,
                state : res.location.region,
                country : res.location.country,
                temp : res.current.temperature,
                weather_icons : res.current.weather_icons[0],
                weather_description : res.current.weather_descriptions[0],
                loading : false
            })
            
    })
  }
  getPosition = async () => {

    let promise = new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  
    let pos = await promise;
    this.setState({
      longitude: pos.coords.longitude,
      latitude: pos.coords.latitude
    })

    await fetch("https://geocode.xyz/"+this.state.latitude+","+this.state.longitude+"?geoit=json")
    .then(res=>res.json())
    .then(res=>{
        this.setState({
            city : res.city,
            state : res.state,
            country : res.country,
        })
    })
    fetch("http://api.weatherstack.com/current?access_key="+process.env.REACT_APP_WEATHER_API_KEY+"&query="+this.state.state)
    .then(res => res.json())
    .then(res => {
            this.setState({
                temp : res.current.temperature,
                weather_icons : res.current.weather_icons[0],
                weather_description : res.current.weather_description,
                loading : false
            })

    })
  }
  
  componentDidMount(){
    this.getPosition();
  }
  
  render(){
    return (
      <div className="App">
        <Search city={this.setData}/>
        <Weather state={this.state}/>
      </div>
    );
  }
}

export default App;
