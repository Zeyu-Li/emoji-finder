import React, {Component} from 'react';
import Table from './Table';
// import Search from './Search';

class App extends Component {

    state = {
        data: {},
        emojis: {},
        rendered_emojis: {},
        // category: "",
        // pages: 1,
        searchStr: '',
        loaded: false,
        reload: false,
        copy_msg: false
    }
    
    componentDidMount() {
        // mounts json
        this.setState({loaded: false})
        fetch('json/emoji.json')
            .then(data => data.json())
            .then(data => this.setState({data}))
            .then(_ => this.init())
            .then(data => this.setState({data, loaded: true}))
    }
    
    init() {
        // once we get the json, this is called

        // set the first category 
        let category_ = this.state.data[0].category
        let categories = {}

        let tmp = []

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
            // assuming emojis are in order of categories
            if (category_ !== emoji.category) {
                categories[category_] = tmp
                category_ = emoji.category
                tmp = []
            }
            // push single emoji into emojis state
            tmp.push(single_emoji)
        }

    this.setState({emojis: categories})
    this.setState({rendered_emojis: categories})
    // debug
    // console.log(this.state.emojis)
    }

    copy_toggle() {
        // after copies onto clipboard, display message
        // console.log(this.state.copy_msg)
        this.setState({copy_msg: !this.state.copy_msg})
    }

    // TODO: move to search
    searchInput = (event) => {
        let search_str = event.target.value.toLowerCase()
        let categories = {}
        // debug
        // console.log(search_str)
        // console.log(this.state.emojis)
        
        // for every emojis category
        Object.entries(this.state.emojis).map(item => {
            // filters through all the emoji names
            categories[item[0]] = item[1].filter(emoji => {
                return (emoji.description.includes(search_str) || emoji.aliases.includes(search_str) || emoji.tags.join().includes(search_str))
            })
            return categories[item[0]]
        })
        
        // set state so it can rerender
        this.setState({rendered_emojis: categories,searchStr: search_str, loaded: !this.state.loaded})
        // console.log(this.state.rendered_emojis, this.state.loaded)
    }

    render() {
        return (
            <div className="main_content" key="App">
                {/* searching */}
            <div className="search">
                <input id="searchInput" type="text" placeholder="Search for Emoji" size="20" onChange={this.searchInput} title="Search Emoji"></input>
                <button className="btn" type="submit">Search</button>
            </div>
                {/* <Search /> (Scrapped*/}

                {/* table */}
                {this.state.loaded ? <Table data={this.state.rendered_emojis} msg={this.copy_toggle.bind(this)} key="table1"/>: <p className="none">...</p>}
                {this.state.loaded ? <p className="none">...</p> :<Table data={this.state.rendered_emojis} msg={this.copy_toggle.bind(this)} />}

                {/* copied notice */}
                {this.state.copy_msg ? <p id="notice">Copied Emoji</p>: <p></p>}
            </div>
        )
    }
}

export default App;
