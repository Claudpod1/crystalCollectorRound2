import React, {Component} from "react";
import crystals from "./crystals.json";
import Header from "./components/Header";






class App extends Component{
    state = {
        crystals, 
        target: 0,
        score: 0, 
        wins: 0,
        loses: 0,
        values: null,

    }
    render(){
        return(
            <div className = "App">
                <Header /> 
            </div>
            

        )
    }
}

export default App;