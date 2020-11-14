import React, { Component } from 'react'
// Table class

class Table extends Component {
    // a table
    state = {
        emojis: this.props.data
    }
    
    copy(text) {
        // copies to clipboard
        // debug
        let emoji = text.currentTarget.dataset.id
        let textField = document.createElement('textarea')
        textField.innerText = emoji
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()

        this.props.msg()

        setTimeout(() => {this.props.msg()}, 3000)
        // console.log(text.currentTarget.dataset.id )
        // document.execCommand('copy')
    }

    // renderNextPage() {
    //     // let pages = this.state.pages
    //     return (
    //         <div>
    //         <h1>{this.props.data.category}</h1><table>
    //             <thead>
    //                 <tr>
    //                 <th scope="col">Emoji</th>
    //                 <th scope="col">Description</th>
    //                 <th scope="col">Aliases and Tags</th>
    //                 <th scope="col">Unicode Version</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //         {
    //         this.props.data.emojis.map((element, index) => {
    //             if (element.category === this.state.category) {
    //                 return (
    //                     // remove duplicates of tags and aliases 
    //                     <tr onClick={this.copy.bind(this)} data-id={element.text}><td>{element.text}</td><td>{element.description}</td><td>{[...new Set(element.tags.concat(element.aliases))].join(", ")} </td><td>{element.unicode_version}</td></tr>
    //                 )
    //             } 
    //             // else if (pages !== this.state.pages) {
    //             //     // set next category and end map
    //             //     this.state.category = element.category
    //             //     this.state.pages++
    //             //     return
    //             // }
    //         })
    //         }
    //         </tbody></table></div>
    //     )
    // }

    renderAllPages() {
        // render all the pages

        // debug
        // console.log(this.state.emojis)

        // for each entry
        return Object.entries(this.state.emojis).map((item, index) => {
            // console.log(category)
            // if empty, don't display anything
            if (!item[1].length) {
                return <div></div>
            }
            return (
                <div>
                <h1>{item[0]}</h1>
                <table>
                    <thead>
                        <tr>
                        <th scope="col">Emoji</th>
                        <th scope="col">Description</th>
                        <th scope="col">Aliases and Tags</th>
                        <th scope="col">Unicode Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item[1].map(element => {
                            // console.log(element[1].text)
return (<tr onClick={this.copy.bind(this)} data-id={element.text} ><td>{element.text}</td><td>{element.description}</td><td>{[...new Set(element.tags.concat(element.aliases))].join(", ")} </td><td>{element.unicode_version}</td></tr>)
                        })}
</tbody></table></div>
            )
        })
    }

    
    render() {
        return (
            <div className="table">
                {this.renderAllPages()}
            </div>
        )
    }
}

export default Table
