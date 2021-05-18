import React from 'react';
import PropTypes from 'prop-types';
 

const CharacterDetails = ({ character }) => (
    <>
    <img src={character.image} alt={character.name} />
    <p>Name: {character.name}</p>
    <p>Status: {character.status}</p>
    <p>Species: {character.species}</p>
    <p>Gender: {character.gender}</p>
    
    </>

);

CharacterDetails.propTypes = {
    character: PropTypes.objectOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired
    })
).isRequired
};

export default CharacterDetails;