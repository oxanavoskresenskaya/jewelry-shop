
import { useState } from 'react';
import { data } from './data';
import Jewelry from './Jewelry';
import Buttons from './Buttons';
import fotoBeads from './foto-beads.jpg';
function Home () {
    const [jewelry, setJewelry] = useState(data);
    const chosenJewelry = (searchTerm) => {
        const newJewelry = data.filter (el => el.searchTerm === searchTerm);
        setJewelry (newJewelry);
    }; 
    return (
        <div>
            <div className='container' >
                <h1>Ювелирная бижутерия</h1>
                <h2>Твое украшение.  Собрано в ручную. Ювелирное покрытие</h2>
                <img src={fotoBeads} alt='beads' width='1130px' height='480px'/>
            </div>
            <Buttons filteredJewelry = {chosenJewelry}/>
            <Jewelry anyThings = {jewelry}/>
        </div>
    )
}

export default Home;