import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CharacterDetails from '../components/details/CharacterDetails';
import { fetchCharacterDetail } from '../services/RandMApi';

const RandMDetail = () => {
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
    let { id } = useParams()

    useEffect(() => {
        fetchCharacterDetail(id)
            .then(setCharacter)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <h1>Loading...</h1>;
    return <CharacterDetails character={character} />;
   
}

export default RandMDetail;