function Buttons ({filteredJewelry}) {
    return (
        <div className="container-buttons" >
            <button className="btn-filter" onClick={() => filteredJewelry('earrings')}>Серьги</button>
            <button className="btn-filter" onClick={() => filteredJewelry('necklace')}>Чокеры <br/>и колье</button> 
            <button className="btn-filter" onClick={() => filteredJewelry('ring')}>Кольца</button>
            <button className="btn-filter" onClick={() => filteredJewelry('bracelet')}>Браслеты</button>
        </div>
                ) 
    }
    export default Buttons;