function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowePrice = 15
    return (<div>
        <h2> Panier </h2>
        <ul>
            <li>Monstera : {monsteraPrice}$</li>
            <li>Lierre : {ivyPrice}$</li>
            <li>Fleurs : {flowePrice}$</li>
        </ul>
    </div>)
} 
export default Cart