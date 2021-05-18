import React, { useEffect, useState } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/RandMApi';


const RandMContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCharacters()
            .then(setCharacters)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters} />;
}

export default RandMContainer;