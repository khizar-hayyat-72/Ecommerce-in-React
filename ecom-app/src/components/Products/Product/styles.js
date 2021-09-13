import { makeStyles } from "@material-ui/core/styles";
 
export default makeStyles(() => ({

    root:{
        marginTop: '30px',
        maxWidth: '100%'
    },
    media:{
        height: '0',
        paddingTop: '56.25%'
    },
    cardContent:{
        display: 'flex',
        justifyContent: 'space-between', 
    },
    CardActions:{
        display: 'flex',
        justifyContent: 'flex-end'

    }

}));