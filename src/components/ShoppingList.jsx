import ShoppingListItem from "./ShoppingListItem.jsx";
import React from "react";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        const {data} = this.props
        return (<div className="shopping__list">
            {data.map(item => <ShoppingListItem item={item} key={item.id}/>)}
        </div>)
    }
}

export default ShoppingList