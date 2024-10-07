import "./itemlistcontainer.scss"

const ItemListContainer = ({greeting}) => {
    return(
        <div className="item-list">
            {greeting}
        </div>
    )
}

export default ItemListContainer 