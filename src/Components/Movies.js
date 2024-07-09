import React from 'react'

function Movies(props) {

    console.log("creating moovies copy");
  return (
    <div className='Movie'>
    <h2>Movie Name: {props.name}</h2>
    <h3>Director Name: {props.directorName}</h3>
    <h3>Hero Name: {props.heroName}</h3>
    <h3>Heroine Name: {props.heroineName}</h3>
    <h3>Producer Name: {props.producerName}</h3>
    </div>
  )
}

export default Movies