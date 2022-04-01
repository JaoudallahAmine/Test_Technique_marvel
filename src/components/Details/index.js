/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Grid } from "@material-ui/core";
import { getCharacters } from '../../api';
import {
    Link,
    useParams
  } from "react-router-dom";

const Details = () => {
    const [characters, setCharacters] = React.useState([]);
    let params = useParams();
    console.log(params);

    useEffect(() => {
        onSearch();
    }, [])

    const onSearch = async () => {
          const chars = await getCharacters({ id: params.id });
          setCharacters(chars);
      };

  return (
	<section className="lumx-spacing-padding-horizontal-huge">
        {characters.map(({ name, id, thumbnail, description }) => (
            <Grid item key={id}>
            <img src={thumbnail} height={450} />
            <h3>ID: {id}</h3>
            <h3>name: {name}</h3>
            <h3>description: {description}</h3>
            </Grid>
        ))}
        <Link to="/" style={{color: 'blue'}} activeStyle={{color: 'red'}}>Back to page</Link>
	</section>
  );
};

export default Details;
