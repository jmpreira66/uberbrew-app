import React, { Component } from 'react';
import Beer from './Beer';
import axios from 'axios';

class App extends Component {
  
  state = {
    beers : [],
    beerSelectedId: null
  }

  componentDidMount() {
    axios.get('https://6l36bf3ud0.execute-api.us-east-1.amazonaws.com/dev/beers', { crossdomain: true })
      .then(response => {
        const mappedResponsePayload = response.data.map((beer, i) => {
          return {index:i, value:beer.beer_name};
        });

        mappedResponsePayload.sort((a, b) => {
          if(a.value > b.value) {
            return 1;
          }
          if(a.value < b.value) {
            return -1;
          }
          return 0;
        });

        const sortedResponsePayload = mappedResponsePayload.map((beer) => {
          return response.data[beer.index];
        });

        this.setState({beers: sortedResponsePayload});
      });
  }  

  beerSelectHandler = (id) => {
    this.setState({beerSelectedId: id});
    axios.get('https://6l36bf3ud0.execute-api.us-east-1.amazonaws.com/dev/beer/'+id, { crossdomain: true })
      .then(response => {
        //const beerReponsePayLoad = JSON.parse(JSON.stringify(response.data));
        const beerReponsePayLoad = response.data;
        this.setState({selectedBrew: beerReponsePayLoad});
    });
  }

  render() {
    let selectedBrewDescription = null;
    if(this.state.selectedBrew) {
      selectedBrewDescription = this.state.selectedBrew[0].beer_description.substring(0, 20);
    }
    
    const beers = this.state.beers.map( beer => {
      return (<Beer
                key = {beer.bid}
                bid = {beer.bid}
                name = {beer.beer_name}
                label = {beer.beer_label}
                description = {selectedBrewDescription || null}
                selected = {this.beerSelectHandler}
                beerSelected = {this.state.beerSelectedId}/>                
            );                      
    });

    return (
      <div>
        <h1 className='UberBrew'>Uber Brew Fountain of Youth</h1>
        <h2 className='UberBrew'>Select your brew of choice for a brief description</h2>
        <ul className='DisplayBeers'>
          {beers}          
        </ul>
      </div>              
    );
  }

}

export default App;
