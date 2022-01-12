import './productList.css'
import Product from '../product/Product'

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
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}
