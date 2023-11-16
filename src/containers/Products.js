import React, {useEffect, useState} from 'react'
import { DefaultInstance } from '../utils/DefaultInstance'
import { Product } from '../components/Product'
import { List } from '@mui/material'
export const Products = () =>{

    const [products, setProducts] = useState([])
    useEffect(()=>{
        DefaultInstance.get('products/')
        .then(response => {
            setProducts(response.data)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])

    return(
        <List>
            {products.map(product=>{
                return(<Product key ={product.id} product = {product}/>)
            })}
        </List>
    )

}

