import './productList.css'
import Product from '../product/Product'
import products from '../../data.js'

export default function ProductList() {
    return (
        <div className='pl'>
            <div className='pl-text'>
                <h1 className='pl-title'> Create & Inspire</h1>
                <p className='pl-desc'>
                    My creative projects 
                </p>
            </div>
            <div className="pl-list">
            {products.map((item) =>(
                <Product img={item.img} key={item.img} link={item.link}/>
            ))}
            </div>
        </div>
    )
}
