import React, {Component} from "react";
import Scores from "./components/Scores";
import crystals from "./crystals.json";
import Header from "./components/Header";
import Data from "./components/HistoricData";
import Wrapper from "./components/Wrapper";
import CrystalPics from "./components/Crystalpics"

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
                <Scores target={this.state.target} yScore={this.state.score}/>
                <Wrapper>
                {this.state.crystals.map(crystal => (
                    <CrystalPics 
                    className="image"
                    image={crystal.picture}
                    name={crystal.name}
                    id={crystal.id}
                    key={crystal.id}
                    /> 
                ))}
                </Wrapper>
                <Data wins={this.state.wins} loses={this.state.loses} />
            </div>
        );
    }
}

export default App;