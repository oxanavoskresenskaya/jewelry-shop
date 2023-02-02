import whatsapp from './whatsapp.png';
import ReactWhatsapp from "react-whatsapp";
function Delivery () {
    return (
        <div className='container-block' id='hash-delivery'>
            <div className="block-one">
                <h1 className='delivery-header-one'>Заказать</h1>
                <h3  className='delivery-header-three'>Пиши мне в Whats App:</h3>
                <ReactWhatsapp number="7-938-161-0950" className='logo-about'>
                    <img src={whatsapp} alt='logo-whatsapp' className='logo-whatsapp'/>
                </ReactWhatsapp>
            </div>
            <div className="block-two">
                <h1 className='delivery-header-one'>Доставка</h1>
                <h3  className='delivery-header-three'><span>По г.Ростову-на-Дону</span></h3>
                <h3  className='delivery-header-three'>Яндекс Доставка</h3>
                <h3  className='delivery-header-three'><span>По России</span></h3>
                <h3  className='delivery-header-three'>Почта России<br/>СДЭК</h3>
                <h3>При заказе от 4000 рублей доставка в подарок!</h3>
            </div>
        </div>
    )
}
export default Delivery;
