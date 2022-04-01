import { string } from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import React from 'react';

import useStyles from "./useStyles";
import { Link } from "react-router-dom";

export default function CharacterCard({
  name,
  thumbnail = "https://via.placeholder.com/350x210?text=No%20Image%20Found",
  description,
  id,
}) {
    const classes = useStyles();
  return (
    <Card classes={{ root: classes.root }}>
      <CardActionArea component={Link} to={`/${id}`}>
        <CardMedia component="img" width="300" height="210" image={thumbnail} title={name} />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

          <Typography gutterBottom variant="h6" component="h2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CharacterCard.propTypes = {
  title: string.isRequired,
  id: string.isRequired,
  image: string,
};
