import React from 'react'
import Grid from '@babel/core'


const products = [
    {id : '1', name:'Shoes', description: 'This is Shoes'},
    {id : '2', name:'Book', description: 'This is Book'},
    {id : '3', name:'Machine', description: 'This is Machine'}
]

const Products = () => {
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product/>
                </Grid>
            ))}

        </Grid>

    </main>
}

export default Products;