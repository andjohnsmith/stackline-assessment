import React from 'react'
import ProductInfo from './ProductInfo'
import './Sales.css'
import SalesGraph from './SalesGraph';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentProduct } from './salesSlice';

const Sales = () => {
    const product = useAppSelector(selectCurrentProduct)

    if (!product) {
        return <span>Loading...</span>
    }
    
    return (
        <div className="sales">
            <ProductInfo product={product} />
            <SalesGraph sales={product.sales} />
        </div>
    );
}

export default Sales