import React from "react";

class ShoppingListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {item, onDelete, onToggleActive} = this.props
        return (
            <div className={`list__item ${item.active && 'active'}`}>
                <div className="item__info">
                    <span>{item.size}</span>
                    <p>{item.title}</p>
                </div>
                <div className="item__actions">
                    <span className={"check"} onClick={onToggleActive}>&#10003;</span>
                    <span className={"times"} onClick={onDelete}>&times;</span>
                </div>
            </div>
        )
    }
}

export default ShoppingListItem