import React from 'react'
import Navbar from '@components/Navbar'

// Styles in módule
import styles from '@styles/custom.module.css'

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer className={styles.container}>This is teh footer</footer>
        </div>
    )
}

export default Layout
