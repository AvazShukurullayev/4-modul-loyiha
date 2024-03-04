import React from "react";

class ShoppingListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    onChangeActive = () => {
        this.setState(state => ({active: !state.active}))
    }

    render() {
        const {item} = this.props
        const {active} = this.state
        return (
            <div className={`list__item ${active && 'active'}`}>
                <div className="item__info">
                    <span>{item.size}</span>
                    <p>{item.title}</p>
                </div>
                <div className="item__actions">
                    <span className={"check"} onClick={this.onChangeActive}>&#10003;</span>
                    <span className={"times"}>&times;</span>
                </div>
            </div>
        )
    }
}

export default ShoppingListItem