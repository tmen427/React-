import React from "react";
import "./style.css";




class FriendCard extends React.Component {
   
    render () {    
  return (

    <div className="card">   {/*this is how each card will look like */}
     
      <div className="img-container">
        <img alt={this.props.name} src={this.props.image} onClick= {() => this.props.score(this.props.id)}/>
      </div>

      <div className="content">
        <ul>
          <li>
            <strong>Name :</strong> {this.props.name}
          </li>
         </ul>
      </div>
     
    </div>
  );
}
  
}
export default FriendCard;
