import '../styles/Banner.css'

function Banner (){
    const titre = 'La maison de la jungle'
    return (<div className="lmj-banner">
        <h1>{titre.toLocaleUpperCase()}</h1>
    </div>)
}
export default Banner