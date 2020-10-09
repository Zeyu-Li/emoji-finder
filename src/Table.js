import React, { Component } from 'react';
// main class


class Table extends Component {
    // a Game object that acts like the main container for this game "engine"

    // state var containing all the levels and necessary info on those levels
    state = {
        data: [],
        emojis: [],
        loaded: false,
        reload: false
    }


    search_emoji = (string) => {
        // filters through all the emoji names
        ;
    }

    init() {
        // once we get the json, this is called

        // for each emoji, set row
        for (let emoji of Object.entries(this.state.data)) {

            let single_emoji = {
                text: emoji.emoji,
                description: emoji.description,
                category: emoji.category,
                aliases: emoji.aliases,
                tags: emoji.tags,
                unicode_version: emoji.unicode_version
            }
            this.state.emojis.push(single_emoji)
        }
    }

    componentDidMount() {
        // gets json and calls all the necessary inits
        this.setState({loaded: true})
        fetch('json/data.json')
            .then(data => data.json())
            .then(data => this.setState({data}))
            .then(_ => this.init())
            .then(data => this.setState({data, loaded: false}))
    }

    render() {
        return (
            <div className="main_content">
                <table>
                    {this.state.loaded ? "loading... Perhaps you are not running it on a server": 
                    this.state.emojis.map((element, i) => {
                        return (
                            <tr>{element}</tr>
                        )
                    })
                    }
                </table>
            </div>
        )
    }
}

export default Table
