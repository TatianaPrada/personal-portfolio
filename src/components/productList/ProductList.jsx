import './productList.css'
import Product from '../product/Product'
import products from '../../data.js'

export default function ProductList() {
    return (
        <div className='pl'>
            <div className='pl-text'>
                <h1 className='pl-title'> Projects</h1>

            </div>
            <div className="pl-list">
            {products.map((item) =>(
                <Product img={item.img} key={item.img} link={item.link} name={item.name} repo={item.repo} desc={item.description} tech={item.techhnologies}/>
            ))}
            </div>
        </div>
    )
}
