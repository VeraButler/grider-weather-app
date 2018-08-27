import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state={ term: ""};

        this.onInputChange = this.onInputChange.bind(this);
    }
    //add change handler for input
    //all DOM functions have event object as parameter
    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term: event.target.value })
    }
    //make input controlled componenet by adding value = state
    render() {
        return(
            <form className = "input-group">
                <input
                placeholder="Get a 5 day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}