import React from 'react'
import { Grid } from '@material-ui/core'
import Product  from './Product/product'
import Number from 'D:/Github/Ecommerce-in-React/ecom-app/src/assets/Number.png'

const products = [
    {id : '1', name:'Shoes', description: 'This is Ballon Stand' , price: '5$' , image:{Number}},
    {id : '2', name:'Leptop', description: 'This is Ballon' ,price: '10$' , image:{Number}},
  
 
]

const Products = () => {
    return(<main>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}

        </Grid>

    </main>)
}

export default Products;