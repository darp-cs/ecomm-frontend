import React from 'react';
import { Button, CardContent, Card, Typography, CardActions,ListItem, ListItemText, Divider } from '@mui/material'


export const Product = (props) =>{

    console.log(props)
    return(
        <>
        <ListItem alignItems="flex-start">
        
          <ListItemText
            primary={props.product.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.product.price}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
    )
}