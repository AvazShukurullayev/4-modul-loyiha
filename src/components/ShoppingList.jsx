import React from "react";
import ShoppingListItem from "./ShoppingListItem.jsx";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, onDelete, onToggleActive} = this.props
        const emptyMsg = <h3 className="empty__message">No data...</h3>
        return (<div className="shopping__list">
            {data.length ? data.map((item) => (<ShoppingListItem item={item} key={item.id} onDelete={() => onDelete(item.id)}
                                                   onToggleActive={() => onToggleActive(item.id)}/>)) : emptyMsg}
        </div>)
    }
}

export default ShoppingList