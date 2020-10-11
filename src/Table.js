import React, { Component } from 'react'
// Table class

class Table extends Component {
    // a table

    state = {
        data: [],
        emojis: [],
        category: "",
        pages: 1,
        loaded: false,
        reload: false
    }
    
    componentDidMount() {
        // mounts json
        this.setState({loaded: true})
        fetch('json/emoji.json')
        .then(data => data.json())
        .then(data => this.setState({data}))
        .then(_ => this.init())
        .then(data => this.setState({data, loaded: false}))
    }
    
    init() {
        // once we get the json, this is called

        // set the first category 
        this.setState({
            category: this.state.data[0].category
        })

        // for each emoji, set row
        for (let emoji of this.state.data) {

            // set emoji data
            let single_emoji = {
                text: emoji.emoji,
                description: emoji.description,
                category: emoji.category,
                aliases: emoji.aliases,
                tags: emoji.tags,
                unicode_version: emoji.unicode_version
            }
            // push single emoji into emojis state
            this.state.emojis.push(single_emoji)
        }
    }

    renderNextPage() {
        let pages = this.state.pages
        return (
            <div key={this.state.category}>
            <h1>{this.state.category}</h1><table>
                <thead>
                    <tr>
                    <th scope="col">Emoji</th>
                    <th scope="col">Description</th>
                    <th scope="col">Aliases and Tags</th>
                    <th scope="col">Unicode Version</th>
                    </tr>
                </thead>
                <tbody>
            {
            // once loaded show the first category
            this.state.loaded ? <tr><th>...</th></tr>: 
            this.state.emojis.map((element, index) => {
                if (element.category === this.state.category) {
                    return (
                        // remove duplicates of tags and aliases 
                        <tr><td>{element.text}</td><td>{element.description}</td><td>{[...new Set(element.tags.concat(element.tags))].join(", ")} </td><td>{element.unicode_version}</td></tr>
                    )
                } else if (pages !== this.state.pages) {
                    // set next category and end map
                    this.state.category = element.category
                    this.state.pages++
                    return
                }
            })
            }
            </tbody></table></div>
        )
    }

    search_emoji = (string) => {
        // filters through all the emoji names
        ;
    }
    
    render() {
        return (
            <div className="table">
                {this.renderNextPage()}
            </div>
        )
    }
}

export default Table
