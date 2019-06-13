import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    count:0,
    friends, 
    topscore: 0, 
  
    id: '',
    array: [], 

    
  };



score = (id) => {
       
  this.setState({count: this.state.count + 1 })       // add to the currrent count 
      
  if (this.state.count>=this.state.topscore) {         //only add to the topscore if your current score is greator 
  this.setState({topscore: this.state.topscore +1 })
          }



      
      const array = this.state.array.concat(id);  // you can't use push in react, so use concat to get 'id' into an array 
      this.setState({array: array }, ()=> {console.log('value of the array: ' + this.state.array )  //making setState 'synchronous' instead of asynchrounous by using a callback function
    
     // var first = this.state.array[0];
       for (var i=0; i<=this.state.array.length; i++) {         // for loops to check if you have clicked on an image TWICE or not 
          for (var j=0; j<=this.state.array.length; j++) {               
            if (i!==j) {
            if (this.state.array[i]===this.state.array[j]) {
            
            // if (first === this.state.array[i+1]) {     //compares the first image you clicked on versus all the following ones, if they are equal then you lose 
      
          this.setState({count: 0});     //restart the count
          this.setState({array: []});    // restart the array 
          
          if(this.state.count>=this.state.topscore) {
          this.setState({topscore: this.state.topscore -1 });    // make it so that the last click does not count...
           
            }   
        }}}
      }



      const rename = this.state.friends.sort( ()=> 0.5-Math.random());   //the images reshuffle when you click on them
      this.setState({friends:rename});
    
      }); 
      
      
     // console.log(this.state.array);
    
}



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
   const begin = this.state.count; 

   
    return (
    
      <Wrapper>
        <h1>Click on an image to score points, but don't click on an image twice!</h1>
             {this.state.topscore===0 &&  <Title>  { begin ===0  ? 'Click image to start': ''} | Score: {this.state.count} | Top Score: {this.state.topscore} </Title>
             }

             {begin>0 &&   <Title>  { begin>0 ?  'Winning!' : ''} | Score: {this.state.count} | Top Score: {this.state.topscore} </Title>
             }

            {this.state.topscore>0 && <Title> {  begin===0 ? 'You lost! Click on any image to play again' : ''}     </Title>    }


        {this.state.friends.map(friend => (
          <FriendCard
     
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            count={this.state.count}  //reveals the state count
          
            score={this.score}

          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
