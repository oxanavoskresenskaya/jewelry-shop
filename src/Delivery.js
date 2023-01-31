import whatsapp from './whatsapp.png';

function Delivery () {
    return (
        <div className='container-block'>
            <div className="block-one">
                <h1 className='delivery-header-one'>Заказать</h1>
                <h3  className='delivery-header-three'>Пиши мне в Whats App:</h3>
                <img src={whatsapp} alt='logo-whatsapp' width='90px' className='logo-about'/>
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