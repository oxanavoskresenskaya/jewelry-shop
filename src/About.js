import dasha from './image-dasha.jpeg';
import instagram from './icon-instagram.png';
import email from './letter-logo.png';
import {
    EmailShareButton,
  } from "react-share";
function About () {
    return (
        <div className='block-about'>
            <div className="about-header" id='hash-about'>
                <h1 className='about-header-one' >Обо мне</h1>
            </div>
            <div className="about" >
                <img src={dasha} alt='Dasha' className='img-dasha' />
                <p className='about-text' >Привет!<br/>
    Меня зовут Дарья, я делаю украшения ручной работы. И рада приветствовать вас в своем магазине!
    <br/>Раньше я как и многие девушки пыталась найти на просторах интернета необычные и качественные украшения, которые будут радовать и служить длительное время. А не сломаются, потемнеют, поржавеют через несколько недель после покупки.
    Со временем я решила, почему бы самой не заняться созданием украшений, которые я так настойчиво искала. И теперь я пришла к тому, чтобы поделиться с вами не только своим творчеством, но и качественной продукцией.
    На этом сайте вы сможете найти актуальный ассортимент, прайс и информацию по доставке.<br/>
    Также вы можете заглянуть в мой Instagram или написать  мне на почту.</p>
            </div>
            <div  className='about-logo'>
                <img src={instagram} alt='logo-instagram' className='logo-about' />
                <EmailShareButton url='dariaudina@icloud.com'><img src={email} alt='logo-email' width='90px' className='logo-about'/></EmailShareButton>
            </div>
        </div>
    )
}
export default About;