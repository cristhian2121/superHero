import React from 'react';
import Link from "next/link";


/**
 * Label Link tranform a project to SPA
 */
const Navbar = () => {
    return (
        <>
            <nav>
                <menu>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </menu>
            </nav>
        </>
    )
}

export default Navbar;
