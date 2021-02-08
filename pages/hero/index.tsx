import React, { useState, useEffect, useMemo, } from 'react';
import { SuperHeroService } from '../../services/superHero/superHeroService';

// tailwindcss styles
import "tailwindcss/tailwind.css";
// import "styles/global.css"

const HeroesList = ({ }) => {

    const [heroes, setheroes] = useState([]);

    useEffect(() => {
        getHeroes()
    }, [])

    async function getHeroes() {
        const superHeroService = new SuperHeroService();
        const { state, data } = await superHeroService.getAll()
        if (state && data.data && data.data.result) {
            setheroes(data.data.result);
        }
    }

    return (
        <div className="">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
        </div>
    )
}

export default HeroesList;