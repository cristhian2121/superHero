import React from 'react';
import { useRouter } from 'next/router';

const SuperHero = () => {
    const { query } = useRouter();
    return (
        <div>
            <h1>{query.heroId}</h1>
        </div>
    )
}

export default SuperHero;