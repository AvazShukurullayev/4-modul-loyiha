import React from "react";

class ShoppingAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            number: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAdd = () => {
        const {title, number} = this.state
        if (title.trim() && number.trim()) {
            const obj = {title, number}
            this.props.onAddItem(obj)
            this.setState({title: "", number: ""})
        } else {
            alert("Inputs should be completed fully!")
        }
    }

    render() {
        const {title, number} = this.state
        return (
            <div className="form">
                <input type="text" name="title" placeholder="Title" onChange={this.onChange} value={title}/>
                <input type="number" name="number" placeholder={"14"} onChange={this.onChange} value={number}/>
                <button onClick={this.onAdd}>Add</button>
            </div>
        )
    }
}

export default ShoppingAddForm