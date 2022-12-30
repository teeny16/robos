import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import './app.css';
    
class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: robots,
            Searchfield: ''
        }
        }
        onSearchChange=(event) =>{
            this.setState({Searchfield:event.target.value})
            
          
        }
    
    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots = {filteredRobots} /> 
            </div>
        );
    }
    
}
export default App;
