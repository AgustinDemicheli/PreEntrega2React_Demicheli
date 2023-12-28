import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './item.css';

export const Item = ({ product }) => {
  const { productName, price, productImage, description } = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={productImage}
          alt="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color={'gray'} component="div">
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Since ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;
