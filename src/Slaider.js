import { useState } from "react";
function Slaider ({slaide}) {
    const [picture, setPicture]=useState(0);
    const previousImage = ()=>{
        setPicture((item =>{
            item--;
            if (item < 0) {
                return slaide.length -1;
            } return item;
        }))
    }
    const nextImage = () => {
        setPicture((item=>{
            item++;
            if (item > slaide.length -1) {
                item = 0;
            } return item;
        }))
    }
    return (
        <div className="container-slaider">
            {
                slaide.length !== 1 ? <button onClick={previousImage} className='btn-slaider'>❮</button> : null
            }
            <img src={slaide[picture]} alt='jewelry' width='413px' height='423px'/>
            {
            slaide.length !== 1 ? <button onClick={nextImage} className='btn-slaider'>❯</button> : null
            }
        </div>
    )
}
export default Slaider;