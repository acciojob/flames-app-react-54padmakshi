import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
  check () {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
     for (let j = 0; j < array.length; j++) {
        const element = array[j];
        
     }   
    }
  }  
 

    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               FLAMES
               <input data-testid="input1">First Name</input> {/*Input should be considered case-sensitive */}
               <input data-testid="input2">Second Name</input>
               <button data-testid="calculate_relationship">Calculate Relationship Future</button>
               <h3>
                {/*Display the output here */}
               </h3>
               <button data-testid="clear">Clear Button</button>
            </div>
        )
    }
}


export default App;
