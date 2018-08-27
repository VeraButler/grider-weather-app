import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state={ term: ""};

        this.onInputChange = this.onInputChange.bind(this);
    }
    //add change handler for input
    //all DOM functions have event object as parameter
    onInputChange(event){
        this.setState({ term: event.target.value })
    }
    //since running on lh:8080 you need to fix submit for form bc server is not "real"
    onFormSubmit(event) {
        event.preventDefault();

        //go fetch weather data

    }
    //make input controlled componenet by adding value = state
    render() {
        return(
            <form onSubmit={this.onFormSubmit} className = "input-group">
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