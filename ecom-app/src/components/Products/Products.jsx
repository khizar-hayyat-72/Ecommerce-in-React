import React from 'react'
import { Grid } from '@material-ui/core'
import Product  from './Product/product'
import useStyles from './styles';

const products = [
    {id : '1', name:'Shoes', description: 'This is Ballon Stand' , price: '5$' , image: 'https://source.unsplash.com/random'},
    {id : '2', name:'Lep top', description: 'This is Ballon' ,price: '10$' , image: 'https://source.unsplash.com/random'},
]
const Products = () => {
    const classes = useStyles()

    return(
    <main className = {classes.content}>
        <div className = {classes.toolbar}/>
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