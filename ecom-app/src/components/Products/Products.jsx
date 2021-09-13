import React from 'react'
import { Grid } from '@material-ui/core'
import Product  from './Product/product'

const products = [
    {id : '1', name:'Shoes', description: 'This is Shoes' , price: '5$'},
    {id : '2', name:'Book', description: 'This is Book' ,price: '10$'},
 
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