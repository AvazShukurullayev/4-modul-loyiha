const Filter = ({filter, onFilterSelect}) => {
    const buttons = [
        {id: "all", label: "All products"},
        {id: "completed", label: "Completed"},
        {id: "big-size", label: "Big size"}
    ]
    return (
        <div className={'filter'}>
            <div className="btns">
                {/* eslint-disable-next-line react/jsx-key */}
                {buttons.map(btn => (<button
                    key={btn.id}
                    id={btn.id}
                    onClick={() => onFilterSelect(btn.id)}
                    className={`${filter === btn.id && 'active'}`}>
                    {btn.label}
                </button>))}
            </div>
        </div>
    )
}

export default Filter