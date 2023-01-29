import Slaider from "./Slaider";
import { useState } from "react";
function Jewelry ({anyThings}) {
    const [showText, setShowText]=useState (false);
    const showTextClick = (el) => {
        el.showMore = !el.showMore;
        setShowText (!showText);
    };
    return (
        <div className='products'>
            {anyThings.map((el) => {
                const {id, image, searchTerm, productName, description, price, showMore} = el;
                return (
                    <div key={id} className='product-card'>
                        <h3>{productName}</h3>
                        {
                            image !==undefined ? <Slaider slaide = {image}/> : null
                        }
                        <p>{showMore ? description : description.substring(0, 50)+'...'}
                        {
                        description.length > 50 ? <button className='showBtn' onClick={()=>showTextClick(el)}>{showMore ? 'Скрыть ' : 'Показать полностью'}</button> : null
                        }
                        </p>
                        <h4>{price}</h4>
                        <button className="btn" >Заказать</button>
                    </div>
                ) 
            })}
        </div>
    )
    }
    
    export default Jewelry;