/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { Grid } from "@material-ui/core";

import CharacterCard from '../CharacterCard';

const Search = ({ characters }) => {
  console.log(characters);
  return (
    
	<section className="lumx-spacing-padding-horizontal-huge">

    <Grid container spacing={2}>
    {characters.map(({ name, id, thumbnail, description }) => (
      <Grid item key={id}>
          <CharacterCard name={name} id={id} thumbnail={thumbnail} description ={description}/>
          </Grid>
      ))}
      </Grid>
	</section>
  

  );
};

export default Search;
