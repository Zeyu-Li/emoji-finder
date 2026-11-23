import React, { Component, useState } from 'react'
// Search class
// not needed

class Search extends Component {


    searchInput(event) {
        // debug
        console.log(event.target.value)
    }

    search() {
        return
    }

    render() {
        return (
            <div className="search">
                <input id="searchInput" type="text" placeholder="Search for Emoji" size="20" onChange={this.searchInput} title="Search Emoji"></input>
                <button className="btn" type="submit">Search</button>
            </div>
        )
    }

}

export default Search
