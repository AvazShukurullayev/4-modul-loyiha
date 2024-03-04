import React from "react";
import ShoppingListItem from "./ShoppingListItem.jsx";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, onDelete, onToggleActive} = this.props
        return (<div className="shopping__list">
            {data.map((item) => (<ShoppingListItem item={item} key={item.id} onDelete={() => onDelete(item.id)}
                                                   onToggleActive={() => onToggleActive(item.id)}/>))}
        </div>)
    }
}

export default ShoppingList