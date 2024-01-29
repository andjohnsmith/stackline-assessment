import React from 'react'
import { Product } from './salesSlice'
import './ProductInfo.css'

interface ProductInfoProps {
    product: Product
}

const ProductInfo = ({ product }: ProductInfoProps) => {
    return (
        <div className="product-info">
            <img src={product.image} alt="Product" />
            <h2>{product.title}</h2>
            <p className="subtitle">{product.subtitle}</p>
            <div className="tags">
                {product.tags.map(tag => <span>{tag}</span>)}
            </div>
        </div>
    )
}

export default ProductInfo