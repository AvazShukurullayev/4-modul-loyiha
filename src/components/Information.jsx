const Information = ({length}) => {
    return (
        <div className={"information"} style={{margin: "0 0 20px 0"}}>
            <h1 className={"information__title"}>Shopping List</h1>
            <span className={"information__span"}>{length}</span>
        </div>
    )
}

export default Information