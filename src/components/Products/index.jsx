import React from 'react'
import { ProductsData } from '../../data/products'
import styles from './stylesHome.css'

export const Products = () => {
    return (
        <div className="columna_products"> {ProductsData.map((product, i) => (
            <div key={i}>
                <img className="img_product"  src={product.img} alt={product.name} />
                <div>
                    <p className=" name">
                        {product.name} 
                    </p>
                    <p className="name_product">
                     ${product.price}
                    </p>

                    <button className="boton" onClick={() => console.log(product)}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        )
        )}
        </div>
    )
}
export default Products
