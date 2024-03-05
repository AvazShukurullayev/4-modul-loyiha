import React from "react";

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    onSearch = (e) => {
        const value = e.target.value
        this.setState({search: value})
        this.props.onUpdateSearch(value)
    }

    render() {
        const {search} = this.state
        return (<input type="search"
                       className="search__input"
                       onChange={this.onSearch}
                       value={search}
                       name="search" id="search"
                       placeholder="Searching..."
        />)
    }
}

export default SearchPanel