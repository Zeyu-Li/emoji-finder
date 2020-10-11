import React, { Component } from 'react'
// Search class

class Search extends Component {

    searchInput(event) {
        console.log(event)
    }

    render() {
        return (
            <div className="search">
                <input id="searchInput" type="text" placeholder="Search for Emoji" size="20" onChange={this.searchInput}></input>
                <button class="btn" type="submit">Search</button>
            </div>
        )
    }

}

export default Search
