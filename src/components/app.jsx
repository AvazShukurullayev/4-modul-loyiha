import React from "react";
import Information from "./Information.jsx";
import ShoppingList from "./ShoppingList.jsx";
import Filter from "./Filter.jsx";
import ShoppingAddForm from "./ShoppingAddForm.jsx";
import {v4 as uuidv4} from 'uuid';
import {arr} from "../constants/index.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: arr
        }
    }

    onDelete = (id) => {
        const newArr = this.state.data.filter(item => item.id !== id)
        this.setState({data: newArr})
    }
    onToggleActive = (id) => {
        const newArr = this.state.data.map(item => {
            if (item.id === id) {
                return {...item, active: !item.active}
            }
            return item
        })
        this.setState({data: newArr})
    }

    onAddItem = (item) => {
        const {title, number} = item
        const {data} = this.state
        const newItem = {title, size: number, id: uuidv4(), active: false}
        const newArr = [...data, newItem]
        this.setState({data: newArr})
    }

    render() {
        const {data} = this.state
        return (<div className="app">
            <div className="wrapper">
                <div className="card">
                    <Information length={data.length}/>
                    <ShoppingAddForm onAddItem={this.onAddItem}/>
                    <ShoppingList data={data} onDelete={this.onDelete} onToggleActive={this.onToggleActive}/>
                    <Filter/>
                </div>
            </div>
        </div>)
    }
}

export default App
