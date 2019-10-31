import React, { Component } from "react";
import Scores from "./components/Scores";
import crystals from "./crystal.json";
import Header from "./components/Header";
import Data from "./components/HistoricData";
import Wrapper from "./components/Wrapper";
import CrystalPics from "./components/CrystalPictures";
import "./App.css"

class App extends Component {
    state = {
        crystals,
        target: 0,
        score: 0,
        wins: 0,
        loses: 0,
        values: null

    }

    // function that will set up our target and values at the same time 
    // need a click-event that will add to the score 
    // function to check did you win or did you lose 

    render() {
        return (
            <div className="App">
                <Header />
                <Scores target={this.state.target} yScore={this.state.score} />
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