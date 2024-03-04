import Information from "./Information.jsx";
import ShoppingList from "./ShoppingList.jsx";
import Filter from "./Filter.jsx";
import ShoppingAddForm from "./ShoppingAddForm.jsx";

function App() {
    const data = [
        {
            id: 1,
            size: 14,
            title: "Buy Bananas",
            active: false
        },
        {
            id: 2,
            size: 10,
            title: "Buy Pineapples",
            active: true
        },
        {
            id: 3,
            size: 5,
            title: "Buy Peaches",
            active: false
        }
    ]
    return (
        <div className="app">
            <div className="wrapper">
                <div className="card">
                    <Information/>
                    <ShoppingAddForm/>
                    <ShoppingList data={data}/>
                    <Filter/>
                </div>
            </div>
        </div>
    )
}

export default App
