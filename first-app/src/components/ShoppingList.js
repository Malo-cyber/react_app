import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'



function ShoppingList(){
    
    const categories = plantList.reduce(
        (acc, plant) => 
            acc.includes(plant.category) ? acc : acc.concat(plant.category), 
        []
    )

    return (
            <div>
                <ul>    
                    {categories.map((cat) => (
                        <li key={cat}>{cat}</li>
                    ))}
                </ul>
                <ul className='lmj-plant-list'>
                    {plantList.map((plant) => (

                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isBestSale && <span> - 🔥 Good deal 🔥</span>}
                        {plant.isAvailable ? <span> - en stock </span> : <span> - rupture de stock</span>}
                        {plant.isSolde && <div className='lmj-sales'>Soldes</div> }
                        <CareScale className='light' scaleValue={plant.light} />
                        <CareScale className='water' scaleValue={plant.water} />
                    </li>
                    ))}
                </ul>

            </div>
            
    )
}
export default ShoppingList