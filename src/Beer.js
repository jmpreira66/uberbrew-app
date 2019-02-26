import React from 'react';
import './Beer.css';

const beer = (props) => {
    return (
        <li className='Beer' onClick = {() => props.selected(props.bid)}>            
            <div className='BeerLabelContainer'>
                <p>{props.name}</p>
                <img className='BeerLabel' src={props.label} />
                {props.bid === props.beerSelected 
                  ? <div className="BeerDescription">{props.description}</div>
                  : null
                }            
            </div>   
        </li>
    );    
}

export default beer;



// class Beer extends Component {

//     state = {
//         selectedBrew: null
//     }

//     componentDidMount() {
//        // console.log(this.props);
//     }
    
//     componentDidUpdate() {
//         if(this.props.bid) {
//             console.log("bid is: "+this.props.bid);
//             //if(!this.state.selectedBrew || (this.state.selectedBrew.bid !== this.props.bid)) {
//                 axios.get('https://6l36bf3ud0.execute-api.us-east-1.amazonaws.com/dev/beer/'+this.props.bid)
//                     .then(response => {
//                     console.log("payload is: "+ JSON.stringify(response.data));
//                     let beerRequestPayLoad = JSON.stringify(response.data);
//                     beerRequestPayLoad = JSON.parse(beerRequestPayLoad);
//                     console.log("payload object: "+ beerRequestPayLoad);
//                     //this.setState({selectedBrew: response.data});
//                 });
//             //}
//         }        
//     }

//     render() {
//         // let brewDescription;
//         // if (this.state.selectedBrew.description) 
//         //     brewDescription = this.props.beerSelected ? <p className="BeerDescription">{this.state.selectedBrew.description}</p> : null;
       
//         return (
//                 <li className='Beer' onClick = {this.props.selected(this.props.bid)}>            
//                     <div className='BeerLabelContainer'>
//                         <p>{this.props.name}</p>
//                         <img className='BeerLabel' src={this.props.label} />
//                         {/* {brewDescription}                    */}
//                     </div>   
//                 </li>
//         );
        
//     }
// }
