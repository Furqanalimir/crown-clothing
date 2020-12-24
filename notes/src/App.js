import React from 'react';
import './App.css';
import CharacterListing from './character-listing.js'


class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    information : []
}
}



componentDidMount(){
  fetch("https://www.breakingbadapi.com/api/characters")
  .then( data => data.json())
  .then( users =>  this.setState({information: users }))
  .catch("Failed to Fetch")
}

render() {
    
  return(
    
     
        <div className="HomePage">
        <h1 className="Title">Breaking Bad</h1>
      {
       <CharacterListing key={this.state.information.char_id} information={this.state.information}
       ></CharacterListing>
      }
      </div>
  )
}
}

export default App;
