import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner (){
    const titre = 'La maison de la jungle'
    return (
        <div className="lmj-banner">
            <img src={logo} alt='la maison de la jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{titre.toLocaleUpperCase()}</h1>
        </div>)
}
export default Banner