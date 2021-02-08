import React, { useState, useEffect, useMemo, } from 'react';
import { SuperHeroService } from '../../services/superHero/superHeroService';

const HeroesList = ({ }) => {

    const [heroes, setheroes] = useState([]);

    useEffect(() => {
        getHeroes()
    }, [])

    async function getHeroes() {
        const superHeroService = new SuperHeroService();
        const { state, data } = await superHeroService.getAll()
        if(state && data.data && data.data.result){
            setheroes(data.data.result);
        }
    }

    return (
        <div className="">
            
        </div>
    )
}

export default HeroList